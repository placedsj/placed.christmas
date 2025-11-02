import React, { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { SEOHead } from '@/components/seo-head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

export default function AppointmentSchedulerPage() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });
  const { toast } = useToast();

  const services = [
    { id: 'christmas-lights', name: 'Christmas Light Installation', duration: '2-4 hours', price: 'From $299' },
    { id: 'gutter-cleaning', name: 'Gutter Cleaning & Maintenance', duration: '1-2 hours', price: 'From $149' },
    { id: 'exterior-inspection', name: 'Exterior Property Inspection', duration: '1 hour', price: 'From $99' },
    { id: 'package-deal', name: 'Complete Holiday Package', duration: '3-5 hours', price: 'From $599' }
  ];

  const availableTimes = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !selectedDate || !selectedTime || !customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to book your appointment.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would send to your booking API
    toast({
      title: "🎄 Appointment Booked!",
      description: `Your ${services.find(s => s.id === selectedService)?.name} appointment on ${selectedDate} at ${selectedTime} has been scheduled. We'll confirm shortly!`,
    });

    // Reset form
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setCustomerInfo({
      name: '',
      email: '',
      phone: '',
      address: '',
      notes: ''
    });
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  const seoData = {
    title: "Book Appointment - Christmas Light Installation | PLACED Santa's Helpers",
    description: "Schedule your Christmas light installation, gutter cleaning, or property inspection in Quispamsis, NB. Easy online booking with immediate confirmation.",
    keywords: "book christmas light installation, schedule holiday lighting, Quispamsis appointments, Christmas service booking"
  };

  return (
    <>
      <SEOHead data={seoData} />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-b from-christmas-cream to-white">
        {/* Hero Section */}
        <section className="section-padding pt-32 pb-16 bg-gradient-to-br from-rich-burgundy via-deep-forest to-rich-burgundy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="container-professional relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
                🎄 Book Your Appointment 🎄
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-yellow-200">
                YOUR CHRISTMAS, OUR HANDS - Schedule Your Holiday Service Today
              </p>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Choose your service, pick your preferred date and time, and let Santa's Helpers take care of the rest!
              </p>
            </div>
          </div>
        </section>

        <div className="container-professional section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-holiday-gold">
                <CardHeader className="bg-gradient-to-r from-deep-forest to-holiday-green text-white">
                  <CardTitle className="text-2xl">Schedule Your Service</CardTitle>
                  <CardDescription className="text-yellow-200">
                    Fill out the details below to book your appointment
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-rich-burgundy font-semibold mb-3 text-lg">
                        Select Service *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service) => (
                          <div
                            key={service.id}
                            className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                              selectedService === service.id
                                ? 'border-holiday-green bg-holiday-green bg-opacity-10'
                                : 'border-gray-200 hover:border-holiday-gold'
                            }`}
                            onClick={() => setSelectedService(service.id)}
                          >
                            <div className="flex items-center gap-3">
                              <input
                                type="radio"
                                name="service"
                                value={service.id}
                                checked={selectedService === service.id}
                                onChange={() => setSelectedService(service.id)}
                                className="text-holiday-green"
                              />
                              <div className="flex-grow">
                                <div className="font-semibold text-rich-burgundy">{service.name}</div>
                                <div className="text-sm text-gray-600">{service.duration} • {service.price}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-rich-burgundy font-semibold mb-3 text-lg">
                          <Calendar className="inline h-5 w-5 mr-2" />
                          Select Date *
                        </label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-holiday-green focus:outline-none text-lg"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-rich-burgundy font-semibold mb-3 text-lg">
                          <Clock className="inline h-5 w-5 mr-2" />
                          Select Time *
                        </label>
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          disabled={!selectedDate}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-holiday-green focus:outline-none text-lg disabled:bg-gray-100"
                          required
                        >
                          <option value="">Choose time...</option>
                          {availableTimes.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Customer Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-rich-burgundy font-semibold mb-2">Name *</label>
                        <input
                          type="text"
                          value={customerInfo.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-holiday-green focus:outline-none"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-rich-burgundy font-semibold mb-2">Email *</label>
                        <input
                          type="email"
                          value={customerInfo.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-holiday-green focus:outline-none"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-rich-burgundy font-semibold mb-2">Phone *</label>
                        <input
                          type="tel"
                          value={customerInfo.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-holiday-green focus:outline-none"
                          placeholder="(506) 555-0123"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-rich-burgundy font-semibold mb-2">Property Address</label>
                        <input
                          type="text"
                          value={customerInfo.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-holiday-green focus:outline-none"
                          placeholder="123 Main St, Quispamsis, NB"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-rich-burgundy font-semibold mb-2">Special Notes</label>
                      <textarea
                        value={customerInfo.notes}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-holiday-green focus:outline-none"
                        rows={3}
                        placeholder="Any special requests, property details, or questions..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-holiday-red to-rich-burgundy hover:from-rich-burgundy hover:to-holiday-red text-white font-bold py-4 text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <CheckCircle className="mr-2 h-5 w-5" />
                      🎄 Book My Appointment 🎅
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary & Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Appointment Summary */}
              <Card className="border-2 border-rich-burgundy">
                <CardHeader className="bg-gradient-to-r from-rich-burgundy to-deep-forest text-white">
                  <CardTitle>Appointment Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {selectedServiceData ? (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-rich-burgundy">Service:</h4>
                        <p className="text-gray-700">{selectedServiceData.name}</p>
                        <p className="text-sm text-gray-600">{selectedServiceData.duration}</p>
                      </div>
                      {selectedDate && (
                        <div>
                          <h4 className="font-semibold text-rich-burgundy">Date:</h4>
                          <p className="text-gray-700">{new Date(selectedDate).toLocaleDateString()}</p>
                        </div>
                      )}
                      {selectedTime && (
                        <div>
                          <h4 className="font-semibold text-rich-burgundy">Time:</h4>
                          <p className="text-gray-700">{selectedTime}</p>
                        </div>
                      )}
                      <div className="pt-4 border-t">
                        <h4 className="font-semibold text-rich-burgundy">Estimated Cost:</h4>
                        <p className="text-lg font-bold text-holiday-green">{selectedServiceData.price}</p>
                        <p className="text-xs text-gray-500">*Final price after consultation</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center">Select a service to see details</p>
                  )}
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-2 border-holiday-gold">
                <CardHeader>
                  <CardTitle className="text-rich-burgundy">Need Help Booking?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-holiday-green" />
                      <div>
                        <p className="font-semibold text-rich-burgundy">Call Us</p>
                        <p className="text-sm text-gray-700">(506) 650-2122</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-holiday-green" />
                      <div>
                        <p className="font-semibold text-rich-burgundy">Email</p>
                        <p className="text-sm text-gray-700">yourchristmas@placed.life</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Area */}
              <Card className="border-2 border-deep-forest">
                <CardHeader>
                  <CardTitle className="text-rich-burgundy">Service Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-deep-forest">We serve:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Quispamsis, NB</li>
                      <li>• Saint John, NB</li>
                      <li>• Rothesay, NB</li>
                      <li>• Hampton, NB</li>
                      <li>• Surrounding areas</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-deep-forest to-rich-burgundy text-white">
          <div className="container-professional text-center">
            <h2 className="text-4xl font-bold mb-6">Questions About Your Appointment?</h2>
            <p className="text-xl mb-8 text-yellow-200">
              Our Santa's Helpers are here to make your booking experience as smooth as possible
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-holiday-red hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/ask-a-pro'}
              >
                Ask a Pro
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-rich-burgundy font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = 'tel:5066502122'}
              >
                📞 Call (506) 650-2122
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}