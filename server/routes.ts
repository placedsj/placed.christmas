import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertTestimonialSchema } from "@shared/schema";
import { z } from "zod";
import Stripe from "stripe";

// Initialize Stripe (will work once secrets are provided)
let stripe: Stripe | null = null;
try {
  if (process.env.STRIPE_SECRET_KEY) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-07-30.basil",
    });
  }
} catch (error) {
  console.log("Stripe not initialized - add STRIPE_SECRET_KEY to enable payments");
}

// Automated pricing calculator
const calculateServicePrice = (serviceType: string, propertySize?: string): number => {
  const basePrices: Record<string, number> = {
    "residential-basic": 599,
    "residential-premium": 899,
    "residential-deluxe": 1499,
    "commercial-basic": 1299,
    "commercial-premium": 2199,
    "commercial-deluxe": 3499,
    "custom": 1199
  };

  const sizeMultipliers: Record<string, number> = {
    "small": 1.0,
    "medium": 1.3,
    "large": 1.6,
    "extra-large": 2.0
  };

  const basePrice = basePrices[serviceType] || 599;
  const sizeMultiplier = propertySize ? (sizeMultipliers[propertySize] || 1.0) : 1.0;
  
  return Math.round(basePrice * sizeMultiplier);
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Get featured testimonials
  app.get("/api/testimonials/featured", async (req, res) => {
    try {
      const testimonials = await storage.getFeaturedTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured testimonials" });
    }
  });

  // Get all gallery items
  app.get("/api/gallery", async (req, res) => {
    try {
      const items = await storage.getAllGalleryItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gallery items" });
    }
  });

  // Get featured gallery items
  app.get("/api/gallery/featured", async (req, res) => {
    try {
      const items = await storage.getFeaturedGalleryItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured gallery items" });
    }
  });

  // Get all bookings
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });

  // Get automated price quote
  app.post("/api/quote", async (req, res) => {
    try {
      const { serviceType, propertySize } = req.body;
      const estimatedPrice = calculateServicePrice(serviceType, propertySize);
      
      res.json({
        estimatedPrice,
        serviceType,
        propertySize,
        currency: "CAD",
        priceBreakdown: {
          baseService: Math.round(estimatedPrice * 0.7),
          installation: Math.round(estimatedPrice * 0.2),
          materials: Math.round(estimatedPrice * 0.1)
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to calculate quote" });
    }
  });

  // Create a new booking with automated pricing
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      
      // Calculate automated pricing
      const estimatedPrice = calculateServicePrice(validatedData.serviceType, req.body.propertySize);
      
      const bookingWithPrice = {
        ...validatedData,
        estimatedPrice: estimatedPrice.toString(),
        automatedBooking: true
      };
      
      const booking = await storage.createBooking(bookingWithPrice);
      res.status(201).json(booking);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create booking" });
      }
    }
  });

  // Create Stripe payment intent for booking
  app.post("/api/create-payment-intent", async (req, res) => {
    if (!stripe) {
      return res.status(503).json({ message: "Payment processing not available - Stripe keys not configured" });
    }

    try {
      const { bookingId, amount, currency = "cad" } = req.body;
      
      if (!bookingId || !amount) {
        return res.status(400).json({ message: "Booking ID and amount are required" });
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency,
        metadata: {
          bookingId,
          service: "christmas-lighting"
        },
        automatic_payment_methods: {
          enabled: true,
        },
      });

      // Update booking with payment intent ID
      await storage.updateBookingPayment(bookingId, {
        paymentIntentId: paymentIntent.id,
        paymentStatus: "processing"
      });

      res.json({
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id
      });
    } catch (error: any) {
      console.error("Payment intent creation failed:", error);
      res.status(500).json({ message: "Failed to create payment intent: " + error.message });
    }
  });

  // Confirm payment and update booking
  app.post("/api/confirm-payment", async (req, res) => {
    if (!stripe) {
      return res.status(503).json({ message: "Payment processing not available" });
    }

    try {
      const { paymentIntentId } = req.body;
      
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
      
      if (paymentIntent.status === "succeeded") {
        const bookingId = paymentIntent.metadata.bookingId;
        
        await storage.updateBookingPayment(bookingId, {
          paymentStatus: "paid",
          paidAmount: (paymentIntent.amount / 100).toString(),
          paymentDate: new Date().toISOString(),
          status: "confirmed"
        });

        res.json({ success: true, message: "Payment confirmed successfully" });
      } else {
        res.status(400).json({ message: "Payment not successful" });
      }
    } catch (error: any) {
      res.status(500).json({ message: "Failed to confirm payment: " + error.message });
    }
  });

  // Update booking status
  app.patch("/api/bookings/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      
      if (!status || typeof status !== 'string') {
        return res.status(400).json({ message: "Status is required" });
      }

      const booking = await storage.updateBookingStatus(id, status);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }

      res.json(booking);
    } catch (error) {
      res.status(500).json({ message: "Failed to update booking status" });
    }
  });

  // Create a new testimonial
  app.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.status(201).json(testimonial);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create testimonial" });
      }
    }
  });

  // Customer Portal Authentication
  app.post('/api/customer/auth', async (req, res) => {
    try {
      const { email, phone } = req.body;
      
      if (!email || !phone) {
        return res.status(400).json({ message: 'Email and phone are required' });
      }

      // Verify customer exists by matching email and phone
      const customer = await storage.getCustomerByEmailAndPhone(email, phone);
      
      if (!customer) {
        return res.status(401).json({ message: 'Customer not found with provided credentials' });
      }

      res.status(200).json({ 
        message: 'Authentication successful',
        customerId: customer.id 
      });
    } catch (error) {
      console.error('Error authenticating customer:', error);
      res.status(500).json({ message: 'Authentication failed' });
    }
  });

  // Get customer bookings
  app.get('/api/customer/bookings/:email', async (req, res) => {
    try {
      const { email } = req.params;
      
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }

      const bookings = await storage.getBookingsByEmail(email);
      res.status(200).json(bookings);
    } catch (error) {
      console.error('Error fetching customer bookings:', error);
      res.status(500).json({ message: 'Failed to fetch bookings' });
    }
  });

  // Update customer booking
  app.patch('/api/customer/bookings/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      
      // Only allow customers to update certain fields
      const allowedFields = ['address', 'projectDetails', 'phone'];
      const filteredData: any = {};
      
      for (const field of allowedFields) {
        if (updateData[field] !== undefined) {
          filteredData[field] = updateData[field];
        }
      }

      if (Object.keys(filteredData).length === 0) {
        return res.status(400).json({ message: 'No valid fields to update' });
      }

      const updatedBooking = await storage.updateBooking(id, filteredData);
      
      if (!updatedBooking) {
        return res.status(404).json({ message: 'Booking not found' });
      }

      res.status(200).json(updatedBooking);
    } catch (error) {
      console.error('Error updating booking:', error);
      res.status(500).json({ message: 'Failed to update booking' });
    }
  });

  // Cancel customer booking
  app.delete('/api/customer/bookings/:id', async (req, res) => {
    try {
      const { id } = req.params;
      
      // Only allow cancellation of pending bookings
      const booking = await storage.getBooking(id);
      
      if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
      }

      if (booking.status !== 'pending') {
        return res.status(400).json({ 
          message: 'Only pending bookings can be cancelled' 
        });
      }

      const cancelledBooking = await storage.updateBookingStatus(id, 'cancelled');

      res.status(200).json(cancelledBooking);
    } catch (error) {
      console.error('Error cancelling booking:', error);
      res.status(500).json({ message: 'Failed to cancel booking' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
