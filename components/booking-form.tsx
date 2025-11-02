import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { insertBookingSchema, type InsertBooking } from '@shared/schema';
import { Send, Phone, Clock, Shield, Medal } from 'lucide-react';
import { z } from 'zod';

const bookingFormSchema = insertBookingSchema.extend({
  termsAccepted: z.boolean().refine((val: boolean) => val === true, 'You must accept the terms'),
});

type BookingFormData = InsertBooking & { termsAccepted: boolean };

export function BookingForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      serviceType: 'Residential Installation',
      projectDetails: '',
      termsAccepted: false,
    },
  });

  const createBookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest('POST', '/api/bookings', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Request Submitted!",
        description: "Thank you for your interest! We'll contact you within 24 hours with your free quote.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/bookings'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit booking request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: BookingFormData) => {
    const { termsAccepted, ...bookingData } = data;
    createBookingMutation.mutate(bookingData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-holiday-green mb-4">
            Ready to Light Up Your Holiday?
          </h2>
          <p className="text-xl text-gray-600">
            Get your free quote today and let us transform your property into a magical holiday display.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-holiday-green to-green-800 rounded-3xl p-8 md:p-12 text-white">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          className="bg-white text-gray-900 border-green-300 focus:border-holiday-gold focus:ring-holiday-gold"
                          {...field} 
                        />
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
                      <FormLabel className="text-white">Phone Number *</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          placeholder="(555) 123-4567" 
                          className="bg-white text-gray-900 border-green-300 focus:border-holiday-gold focus:ring-holiday-gold"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          className="bg-white text-gray-900 border-green-300 focus:border-holiday-gold focus:ring-holiday-gold"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Service Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white text-gray-900 border-green-300 focus:border-holiday-gold focus:ring-holiday-gold">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Residential Installation">Residential Installation</SelectItem>
                          <SelectItem value="Commercial Display">Commercial Display</SelectItem>
                          <SelectItem value="Premium Package">Premium Package</SelectItem>
                          <SelectItem value="Maintenance Service">Maintenance Service</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Property Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="123 Main St, City, State, ZIP" 
                        className="bg-white text-gray-900 border-green-300 focus:border-holiday-gold focus:ring-holiday-gold"
                        {...field}
                        value={field.value || ''}
                      />
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
                    <FormLabel className="text-white">Project Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        rows={4}
                        placeholder="Tell us about your vision, special requirements, or any questions you have..."
                        className="bg-white text-gray-900 border-green-300 focus:border-holiday-gold focus:ring-holiday-gold resize-none"
                        {...field}
                        value={field.value || ''}
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
                        className="bg-white border-gray-300"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-white text-sm">
                        I agree to receive quotes and updates via email and phone about my Christmas lighting project.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="submit"
                  size="lg"
                  disabled={createBookingMutation.isPending}
                  className="flex-1 bg-holiday-red hover:bg-red-700 text-white rounded-full font-semibold text-lg transition-colors"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {createBookingMutation.isPending ? 'Submitting...' : 'Get My Free Quote'}
                </Button>
                <Button 
                  type="button"
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-white hover:bg-white hover:text-holiday-green text-white rounded-full font-semibold text-lg transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (555) 123-LITE
                </Button>
              </div>
            </form>
          </Form>
          
          <div className="mt-8 pt-8 border-t border-green-600 text-center">
            <p className="text-green-100 mb-4">🎄 Early Bird Special: Book by November 15th and save 15% 🎄</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-green-200">
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>Same-day quotes</span>
              </div>
              <div className="flex items-center">
                <Shield className="mr-2 h-4 w-4" />
                <span>Fully insured</span>
              </div>
              <div className="flex items-center">
                <Medal className="mr-2 h-4 w-4" />
                <span>Satisfaction guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
