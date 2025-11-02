import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Sparkles } from 'lucide-react';
import { FadeInOnScroll } from '@/components/animated-section';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

export function EnhancedBookingForm() {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const { toast } = useToast();

  const services: Service[] = [
    {
      id: 'christmas-lights',
      name: 'Christmas Light Installation',
      description: 'Complete holiday lighting design, installation, maintenance, and storage',
      price: 'From $299',
      duration: '2-4 hours',
      icon: '🎄'
    },
    {
      id: 'gutter-cleaning',
      name: 'Gutter Cleaning & Maintenance',
      description: 'Professional gutter cleaning and inspection to protect your home',
      price: 'From $149',
      duration: '1-2 hours',
      icon: '🏠'
    },
    {
      id: 'exterior-inspection',
      name: 'Exterior Property Inspection',
      description: 'Comprehensive exterior assessment for safety and maintenance needs',
      price: 'From $99',
      duration: '1 hour',
      icon: '🔍'
    },
    {
      id: 'holiday-package',
      name: 'Complete Holiday Package',
      description: 'Christmas lights, gutter cleaning, and exterior inspection bundle',
      price: 'From $549',
      duration: '3-5 hours',
      icon: '🎁'
    }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to request your quote.",
        variant: "destructive",
      });
      return;
    }

    const selectedServiceData = services.find(s => s.id === selectedService);
    
    toast({
      title: "🎄 Quote Request Submitted!",
      description: `Thank you ${formData.name}! We'll contact you within 24 hours about your ${selectedServiceData?.name} request.`,
    });

    // Reset form
    setSelectedService('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <section className="section-padding bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container-professional">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-festive md:text-5xl font-bold text-red-400 mb-6 animate-glow drop-shadow-lg text-[38px]"> Ready to Book Your Holiday Magic? </h2>
            <p className="text-xl text-green-200 max-w-4xl mx-auto font-sans">
              Get your <span className="text-yellow-300 font-bold">FREE QUOTE</span> in under 24 hours! 
              Choose your service, tell us about your property, and let Santa's Helpers work our magic.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Booking Form */}
          <div className="lg:col-span-2">
            <FadeInOnScroll delay={200}>
              <Card className="card-festive border-2 border-holiday-gold shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-rich-burgundy to-deep-forest text-white rounded-t-lg">
                  <CardTitle className="text-3xl font-festive text-center"> GET YOUR FREE QUOTE </CardTitle>
                  <CardDescription className="text-yellow-200 text-center text-lg font-sans">
                    Professional holiday services • Licensed & insured • 100% satisfaction guaranteed
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <form onSubmit={handleSubmit}>
                    {/* Service Selection */}
                    <div>
                      <label className="block text-rich-burgundy font-bold text-xl mb-6 text-center">
                        <Star className="inline h-6 w-6 mr-2 text-warm-gold" />
                        Choose Your Holiday Service
                        <Star className="inline h-6 w-6 ml-2 text-warm-gold" />
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service) => (
                          <div
                            key={service.id}
                            className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 consultation-card ${
                              selectedService === service.id
                                ? 'border-holiday-green bg-holiday-green bg-opacity-10 shadow-lg'
                                : 'border-gray-200 hover:border-holiday-gold hover:shadow-md'
                            }`}
                            onClick={() => setSelectedService(service.id)}
                          >
                            <div className="text-center">
                              <div className="text-4xl mb-3">{service.icon}</div>
                              <input
                                type="radio"
                                name="service"
                                value={service.id}
                                checked={selectedService === service.id}
                                onChange={() => setSelectedService(service.id)}
                                className="form-radio mb-3"
                              />
                              <h3 className="font-bold text-rich-burgundy text-lg mb-2">{service.name}</h3>
                              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{service.description}</p>
                              <div className="flex justify-between items-center text-sm">
                                <Badge className="bg-holiday-green text-white">{service.duration}</Badge>
                                <span className="font-bold text-holiday-red">{service.price}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-rich-burgundy font-semibold mb-2 text-lg">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="form-input"
                          placeholder="YOUR FULL NAME"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-rich-burgundy font-semibold mb-2 text-lg">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="form-input"
                          placeholder="YOUR.EMAIL@EXAMPLE.COM"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-rich-burgundy font-semibold mb-2 text-lg">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="form-input"
                          placeholder="(506) 555-0123"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-rich-burgundy font-semibold mb-2 text-lg">
                          Property Address
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="form-input"
                          placeholder="123 MAIN ST, QUISPAMSIS, NB"
                        />
                      </div>
                    </div>

                    {/* Scheduling Preferences */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-rich-burgundy font-semibold mb-2 text-lg">
                          <Calendar className="inline h-5 w-5 mr-2" />
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-rich-burgundy font-semibold mb-2 text-lg">
                          <Clock className="inline h-5 w-5 mr-2" />
                          Preferred Time
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                          className="form-input"
                        >
                          <option value="">SELECT TIME SLOT</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <label className="block text-rich-burgundy font-semibold mb-2 text-lg">
                        Special Requests or Questions
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="form-input"
                        rows={4}
                        placeholder="TELL US ABOUT YOUR PROPERTY, SPECIAL REQUESTS, OR ANY QUESTIONS YOU HAVE..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <Button 
                        type="submit" 
                        className="btn-primary text-xl px-12 py-6 animate-glow font-festive"
                      >
                        <Sparkles className="mr-3 h-6 w-6" />
                        🎄 GET MY FREE QUOTE 🎅
                        <ArrowRight className="ml-3 h-6 w-6" />
                      </Button>
                      <p className="text-gray-600 mt-4 text-sm font-sans">
                        * We'll contact you within 24 hours with your personalized quote
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </FadeInOnScroll>
          </div>

          {/* Quote Summary & Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quote Summary */}
            <FadeInOnScroll delay={400}>
              <Card className="border-2 border-rich-burgundy shadow-xl">
                <CardHeader className="bg-gradient-to-r from-deep-forest to-holiday-green text-white">
                  <CardTitle className="text-xl font-festive text-center">
                    🎁 Your Quote Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {selectedServiceData ? (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl mb-2">{selectedServiceData.icon}</div>
                        <h3 className="font-bold text-rich-burgundy text-lg">{selectedServiceData.name}</h3>
                        <p className="text-gray-600 text-sm mt-2">{selectedServiceData.description}</p>
                      </div>
                      
                      <div className="border-t pt-4 space-y-3">
                        <div className="flex justify-between">
                          <span className="font-semibold text-rich-burgundy">Duration:</span>
                          <span className="text-gray-700">{selectedServiceData.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-rich-burgundy">Starting Price:</span>
                          <span className="text-holiday-green font-bold text-lg">{selectedServiceData.price}</span>
                        </div>
                      </div>
                      
                      <div className="bg-christmas-cream p-4 rounded-lg">
                        <p className="text-xs text-gray-600 text-center">
                          Final price determined after free consultation and property assessment
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <Star className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Select a service above to see pricing details</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </FadeInOnScroll>

            {/* Quick Contact */}
            <FadeInOnScroll delay={600}>
              <Card className="border-2 border-holiday-gold shadow-xl">
                <CardHeader>
                  <CardTitle className="text-rich-burgundy text-center"> Need Immediate Help? </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="space-y-3">
                      
                      
                      <a 
                        href="tel:5067179627"
                        className="block btn-secondary text-center py-3"
                      >
                        <Phone className="inline h-5 w-5 mr-2" />
                        🎄 (506) 717-XMAS
                      </a>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-4 font-sans">
                      Available Mon-Sat: 8AM-6PM<br />
                      Sunday: Emergency calls only
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeInOnScroll>

            {/* Trust Badges */}
            <FadeInOnScroll delay={800}>
              <Card className="border-2 border-deep-forest shadow-xl">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <h4 className="font-bold text-rich-burgundy text-lg">
                      ✨ Why Choose Santa's Helpers? 🎄
                    </h4>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-holiday-green flex-shrink-0" />
                        <span className="text-gray-700 font-sans">Fully licensed & insured</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-holiday-green flex-shrink-0" />
                        <span className="font-sans text-[#37415100] pl-[-6px] pr-[-6px]">500+ satisfied customers</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-holiday-green flex-shrink-0" />
                        <span className="text-gray-700 font-sans">FREE consultations & quotes</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-holiday-green flex-shrink-0" />
                        <span className="text-gray-700 font-sans">100% satisfaction guarantee</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-holiday-green flex-shrink-0" />
                        <span className="text-gray-700 font-sans">Local New Brunswick business</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}