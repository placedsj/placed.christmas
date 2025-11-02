import { db } from "./db";
import { bookings } from "@shared/schema";

export async function seedCustomerData() {
  try {
    // Create sample customer bookings for testing
    const sampleBookings = [
      {
        fullName: "John Smith",
        email: "john@example.com",
        phone: "(506) 555-0123",
        address: "123 Main Street, Quispamsis, NB",
        serviceType: "residential-premium",
        projectDetails: "Front yard and roofline lighting, warm white LED",
        estimatedPrice: "799",
        status: "confirmed",
        paymentStatus: "paid",
        paidAmount: "799",
        automatedBooking: true
      },
      {
        fullName: "Sarah Johnson",
        email: "sarah@example.com", 
        phone: "(506) 555-0456",
        address: "456 Oak Avenue, Saint John, NB",
        serviceType: "residential-deluxe",
        projectDetails: "Full property Christmas display with animated elements",
        estimatedPrice: "1299",
        status: "in-progress",
        paymentStatus: "paid",
        paidAmount: "649", // Partial payment
        automatedBooking: true
      },
      {
        fullName: "Mike Wilson",
        email: "mike@example.com",
        phone: "(506) 555-0789",
        address: "789 Pine Road, Rothesay, NB", 
        serviceType: "residential-basic",
        projectDetails: "Simple front entrance lighting",
        estimatedPrice: "399",
        status: "pending",
        paymentStatus: "pending",
        automatedBooking: true
      },
      {
        fullName: "Test Customer",
        email: "test@placed.life",
        phone: "(506) 650-2122",
        address: "Test Address, Quispamsis, NB",
        serviceType: "residential-premium",
        projectDetails: "Test booking for portal access",
        estimatedPrice: "599",
        status: "confirmed",
        paymentStatus: "paid",
        paidAmount: "599",
        automatedBooking: true
      }
    ];

    for (const booking of sampleBookings) {
      await db.insert(bookings).values(booking);
    }

    console.log("✓ Sample customer data seeded successfully");
  } catch (error) {
    console.error("Error seeding customer data:", error);
  }
}