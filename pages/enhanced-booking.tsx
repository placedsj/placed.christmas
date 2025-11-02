import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useLocation } from 'wouter';
import { Navigation } from '@/components/navigation';
import { PriceCalculator } from '@/components/price-calculator';
import { SEOHead } from '@/components/seo-head';
import { seoData } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { insertBookingSchema, type InsertBooking } from '@shared/schema';
import { Shield, Star, Clock, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';
import { z } from 'zod';

const enhancedBookingSchema = insertBookingSchema.extend({
  termsAccepted: z.boolean().refine((val: boolean) => val === true, 'You must accept the terms'),
  propertySize: z.string().min(1, 'Property size is required'),
});

type EnhancedBookingData = InsertBooking & { 
  termsAccepted: boolean;
  propertySize: string;
};

export default function EnhancedBookingPage() {
  const [location, setLocation] = useLocation();
  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);
  const [selectedServiceType, setSelectedServiceType] = useState<string>('');
  const [selectedPropertySize, setSelectedPropertySize] = useState<string>('');
  const [showPayment, setShowPayment] = useState(false);
  const { toast } = useToast();

  const form = useForm<EnhancedBookingData>({
    resolver: zodResolver(enhancedBookingSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      serviceType: '',
      projectDetails: '',
      termsAccepted: false,
      propertySize: '',
    },
  });

  const createBookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest('POST', '/api/bookings', {
        ...data,
        propertySize: selectedPropertySize
      });
      return response.json();
    },
    onSuccess: (booking) => {
      toast({
        title: "Booking Created Successfully!",
        description: `Your booking has been created with automated pricing of $${estimatedPrice} CAD.`,
      });
      
      // Store booking details for payment
      sessionStorage.setItem('currentBookingId', booking.id);
      sessionStorage.setItem('currentBookingAmount', estimatedPrice.toString());
      
      setShowPayment(true);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handlePriceChange = (price: number, serviceType: string, propertySize: string) => {
    setEstimatedPrice(price);
    setSelectedServiceType(serviceType);
    setSelectedPropertySize(propertySize);
    form.setValue('serviceType', serviceType);
  };

  const onSubmit = (data: EnhancedBookingData) => {
    if (!estimatedPrice || !selectedServiceType) {
      toast({
        title: "Please Complete Pricing",
        description: "Select your service type and property size to get automated pricing.",
        variant: "destructive",
      });
      return;
    }

    const { termsAccepted, propertySize, ...bookingData } = data;
    createBookingMutation.mutate(bookingData);
  };

  const proceedToPayment = () => {
    setLocation(`/checkout?bookingId=${sessionStorage.getItem('currentBookingId')}&amount=${estimatedPrice}`);
  };

  if (showPayment) {
    return (
      <>
        <SEOHead data={seoData.booking} />
        <Navigation />
        <div className="min-h-screen bg-slate-50 py-12">
          <div className="container-professional">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  Booking Created Successfully!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-800 mb-3">Booking Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-medium">{selectedServiceType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Property Size:</span>
                      <span className="font-medium">{selectedPropertySize.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                      <span>Total:</span>
                      <span className="text-blue-600">${estimatedPrice} CAD</span>
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <p className="text-slate-600">
                    Complete your booking with secure online payment, or we can contact you to schedule and collect payment later.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={proceedToPayment} className="btn-primary flex-1">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay Now Online
                    </Button>
                    <Button onClick={() => setLocation('/')} variant="outline" className="flex-1">
                      Pay Later - We'll Contact You
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead data={seoData.booking} />
      <Navigation />
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16">
        <div className="container-professional">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              PLACED Santa's Helpers
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Your Christmas, Our Hands - Get instant automated pricing for professional Christmas lighting installation in Quispamsis and surrounding areas.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center">
                <Shield className="text-blue-300 mr-2 h-6 w-6" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Star className="text-blue-300 mr-2 h-6 w-6" />
                <span>Professional Installation</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-blue-300 mr-2 h-6 w-6" />
                <span>Automated Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-[#4a388d]">
        <div className="container-professional">
          <div className="grid lg:grid-cols-2 gap-12 text-[#a02635] bg-[#24252f] font-semibold">
            {/* Price Calculator */}
            <div className="text-[#6b316d] font-semibold bg-[#a8a9a9] text-right text-[20px]">
              <PriceCalculator onPriceChange={handlePriceChange} />
            </div>

            {/* Booking Form */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Complete Your Booking</CardTitle>
                <p className="text-slate-600">
                  Fill out your details below to create your automated booking
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(506) 555-0123" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Property Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main Street, Quispamsis, NB" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Details (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any specific requirements or preferences for your Christmas lighting installation..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="termsAccepted"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the terms and conditions
                            </FormLabel>
                            <p className="text-sm text-slate-600">
                              By booking, you agree to our service terms and automated pricing policy.
                            </p>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={createBookingMutation.isPending || !estimatedPrice}
                      className="w-full btn-primary"
                      size="lg"
                    >
                      {createBookingMutation.isPending ? (
                        <>
                          <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                          Creating Booking...
                        </>
                      ) : (
                        <>
                          Create Booking ${estimatedPrice ? `- $${estimatedPrice} CAD` : ''}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}