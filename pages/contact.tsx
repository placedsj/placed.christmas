import { Navigation } from '@/components/navigation';
import { SEOHead } from '@/components/seo-head';
import { seoData } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Star, Shield } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <SEOHead data={seoData.contact} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-holiday-green to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Ready to transform your property with professional Christmas lighting? 
              Contact us today for your free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-holiday-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-holiday-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-holiday-red h-8 w-8" />
                </div>
                <CardTitle className="text-holiday-green">Call Us Today</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-holiday-red mb-2">(555) 123-LITE</p>
                <p className="text-gray-600 mb-2">Available 7 days a week</p>
                <p className="text-sm text-gray-500">8am - 8pm daily</p>
                <Button className="mt-4 bg-holiday-red hover:bg-red-700 text-white rounded-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-holiday-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-holiday-green h-8 w-8" />
                </div>
                <CardTitle className="text-holiday-green">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-holiday-green mb-2">hello@placedholidays.com</p>
                <p className="text-gray-600 mb-2">24-hour response guaranteed</p>
                <p className="text-sm text-gray-500">Usually within 2 hours</p>
                <Button variant="outline" className="mt-4 border-holiday-green text-holiday-green hover:bg-holiday-green hover:text-white rounded-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-holiday-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-holiday-gold h-8 w-8" />
                </div>
                <CardTitle className="text-holiday-green">Service Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-holiday-green mb-2">Greater Metro Area</p>
                <p className="text-gray-600 mb-2">30-mile radius coverage</p>
                <p className="text-sm text-gray-500">Special requests considered</p>
                <Button variant="outline" className="mt-4 border-holiday-gold text-holiday-gold hover:bg-holiday-gold hover:text-white rounded-full">
                  Check Coverage
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-holiday-green mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Have a question or ready to get started? Fill out the form below and we'll get back to you quickly.
            </p>
          </div>
          
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <Input placeholder="John" className="border-gray-300 focus:border-holiday-red focus:ring-holiday-red" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <Input placeholder="Doe" className="border-gray-300 focus:border-holiday-red focus:ring-holiday-red" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input type="email" placeholder="john.doe@example.com" className="border-gray-300 focus:border-holiday-red focus:ring-holiday-red" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Input type="tel" placeholder="(555) 123-4567" className="border-gray-300 focus:border-holiday-red focus:ring-holiday-red" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Address</label>
                    <Input placeholder="123 Main St, City, State" className="border-gray-300 focus:border-holiday-red focus:ring-holiday-red" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                    <Select>
                      <SelectTrigger className="border-gray-300 focus:border-holiday-red focus:ring-holiday-red">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Installation</SelectItem>
                        <SelectItem value="commercial">Commercial Display</SelectItem>
                        <SelectItem value="premium">Premium Package</SelectItem>
                        <SelectItem value="maintenance">Maintenance Service</SelectItem>
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea 
                    rows={5}
                    placeholder="Tell us about your project, ask questions, or share any special requirements..."
                    className="border-gray-300 focus:border-holiday-red focus:ring-holiday-red resize-none"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1 bg-holiday-red hover:bg-red-700 text-white rounded-full font-semibold">
                    Send Message
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 border-holiday-green text-holiday-green hover:bg-holiday-green hover:text-white rounded-full font-semibold">
                    Request Quote
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Hours & Additional Info */}
      <section className="py-20 bg-holiday-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-holiday-green mb-6">Business Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Monday - Friday</span>
                  <span className="text-holiday-green">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-holiday-green">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-holiday-green">10:00 AM - 4:00 PM</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <h4 className="font-semibold text-holiday-green mb-3 flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Emergency Service Available
                </h4>
                <p className="text-gray-600">
                  Need urgent holiday lighting repairs during the season? 
                  We offer emergency service calls to keep your display running perfectly.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-playfair text-3xl font-bold text-holiday-green mb-6">Why Choose PLACED?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-holiday-red bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="text-holiday-red h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-holiday-green mb-2">Licensed & Insured</h4>
                    <p className="text-gray-600">Fully licensed, bonded, and insured for your complete peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-holiday-gold bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Star className="text-holiday-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-holiday-green mb-2">5-Star Service</h4>
                    <p className="text-gray-600">Consistently rated 5 stars by our customers for quality and service.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-holiday-green bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="text-holiday-green h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-holiday-green mb-2">Quick Response</h4>
                    <p className="text-gray-600">Same-day quotes and rapid response to all customer inquiries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
