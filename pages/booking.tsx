import { Navigation } from '@/components/navigation';
import { BookingForm } from '@/components/booking-form';
import { SEOHead } from '@/components/seo-head';
import { seoData } from '@/lib/seo';
import { Shield, Star, Clock, Phone, Mail, MapPin } from 'lucide-react';

export default function BookingPage() {
  return (
    <>
      <SEOHead data={seoData.booking} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-holiday-green to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Book Your Holiday Magic
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Ready to transform your property into a winter wonderland? 
              Fill out our booking form below and we'll provide you with a free, detailed quote within 24 hours.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-green-100">
              <div className="flex items-center">
                <Shield className="text-holiday-gold mr-2 h-6 w-6" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Star className="text-holiday-gold mr-2 h-6 w-6" />
                <span>5-Star Customer Rating</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-holiday-gold mr-2 h-6 w-6" />
                <span>24-Hour Quote Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingForm />

      {/* Contact Information */}
      <section className="py-20 bg-holiday-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-holiday-green mb-4">
              Prefer to Talk Directly?
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help! Reach out to us directly for immediate assistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-holiday-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-holiday-red h-8 w-8" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-holiday-green mb-4">Call Us</h3>
              <p className="text-3xl font-bold text-holiday-red mb-2">(555) 123-LITE</p>
              <p className="text-gray-600">Available 7 days a week</p>
              <p className="text-sm text-gray-500 mt-2">8am - 8pm daily</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-holiday-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-holiday-green h-8 w-8" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-holiday-green mb-4">Email Us</h3>
              <p className="text-lg font-medium text-holiday-green mb-2">hello@placedholidays.com</p>
              <p className="text-gray-600">24-hour response guaranteed</p>
              <p className="text-sm text-gray-500 mt-2">Usually within 2 hours</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-holiday-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-holiday-gold h-8 w-8" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-holiday-green mb-4">Service Area</h3>
              <p className="text-lg font-medium text-holiday-green mb-2">Greater Metro Area</p>
              <p className="text-gray-600">30-mile radius coverage</p>
              <p className="text-sm text-gray-500 mt-2">Special requests considered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-holiday-green mb-4">
              How Our Booking Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've made it simple and stress-free to get your holiday lighting installed professionally.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-holiday-red rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-holiday-green mb-3">Submit Request</h3>
              <p className="text-gray-600">Fill out our booking form with your project details and preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-holiday-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-holiday-green mb-3">Free Consultation</h3>
              <p className="text-gray-600">We'll visit your property for a detailed assessment and design consultation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-holiday-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-holiday-green mb-3">Professional Installation</h3>
              <p className="text-gray-600">Our certified team installs your lights safely and efficiently.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-holiday-green mb-3">Enjoy & Relax</h3>
              <p className="text-gray-600">Sit back and enjoy your magical holiday display all season long!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-holiday-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-holiday-green mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers to help make your booking decision easier.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-holiday-green mb-2">How far in advance should I book?</h3>
              <p className="text-gray-600">We recommend booking by early November to ensure availability for your preferred installation dates. However, we often accommodate last-minute requests based on our schedule.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-holiday-green mb-2">Do you provide the lights and decorations?</h3>
              <p className="text-gray-600">Yes! All lights, decorations, and installation materials are included in our service packages. We use only professional-grade, weather-resistant LED lights.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-holiday-green mb-2">What happens if lights go out during the season?</h3>
              <p className="text-gray-600">We include maintenance service with all installations. If any issues occur, simply call us and we'll come out to fix them at no additional charge.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-holiday-green mb-2">When do you remove the lights?</h3>
              <p className="text-gray-600">We typically schedule removal in early to mid-January, depending on weather conditions and your preferences. Removal is included in all our service packages.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-holiday-green mb-2">Are you licensed and insured?</h3>
              <p className="text-gray-600">Absolutely! We are fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage for your protection.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
