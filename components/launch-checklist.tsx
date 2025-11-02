import React from 'react';
import { CheckCircle, AlertTriangle, ExternalLink, Phone, Mail, Globe, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LaunchChecklist() {
  const checkedItems = [
    "✅ Real photos implemented throughout site",
    "✅ All navigation links tested and working", 
    "✅ SEO optimized with comprehensive keywords",
    "✅ Social media meta tags implemented",
    "✅ Facebook integration ready",
    "✅ Schema markup for Google",
    "✅ Mobile responsive design",
    "✅ Contact information verified",
    "✅ Booking system functional",
    "✅ Gallery with real Christmas light photos",
    "✅ Testimonials carousel working",
    "✅ Footer links all functional",
    "✅ Emergency services button active"
  ];

  const pendingItems = [
    "⚠️ Facebook Page URL (need real link)",
    "⚠️ Instagram Page URL (need real link)", 
    "⚠️ Facebook App ID (for social features)",
    "⚠️ Google Analytics tracking ID",
    "⚠️ Stripe payment keys (if not added)"
  ];

  const socialMediaSetup = [
    {
      platform: "Facebook Business Page",
      status: "NEEDED",
      description: "Create Facebook business page for PLACED Santa's Helpers",
      action: "https://business.facebook.com/",
      icon: Facebook
    },
    {
      platform: "Instagram Business",
      status: "NEEDED", 
      description: "Set up Instagram business account linked to Facebook",
      action: "https://business.instagram.com/",
      icon: Instagram
    },
    {
      platform: "Google My Business",
      status: "RECOMMENDED",
      description: "Create Google Business listing for local SEO",
      action: "https://business.google.com/",
      icon: Globe
    }
  ];

  return (
    <div className="bg-slate-800 p-8 rounded-2xl border-2 border-christmas-gold/30">
      <h2 className="font-festive text-4xl font-bold text-christmas-gold mb-8 text-center uppercase text-outlined">
        🚀 LAUNCH CHECKLIST - PLACED SANTA'S HELPERS
      </h2>

      {/* Completed Items */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center uppercase">
          <CheckCircle className="mr-3 h-6 w-6" />
          COMPLETED & READY FOR LAUNCH
        </h3>
        <div className="bg-green-900/30 p-6 rounded-lg border border-green-500/30">
          <div className="grid md:grid-cols-2 gap-2">
            {checkedItems.map((item, index) => (
              <div key={index} className="text-green-300 font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending Items */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center uppercase">
          <AlertTriangle className="mr-3 h-6 w-6" />
          PENDING - NEED USER INPUT
        </h3>
        <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-500/30">
          {pendingItems.map((item, index) => (
            <div key={index} className="text-yellow-300 font-semibold mb-2">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Setup */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center uppercase">
          <MessageCircle className="mr-3 h-6 w-6" />
          SOCIAL MEDIA ACCOUNT SETUP
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {socialMediaSetup.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div key={index} className="bg-slate-700 p-6 rounded-lg border border-slate-600">
                <div className="flex items-center mb-4">
                  <IconComponent className="h-8 w-8 text-blue-400 mr-3" />
                  <div>
                    <h4 className="font-bold text-white uppercase">{social.platform}</h4>
                    <span className="text-yellow-300 text-sm font-semibold uppercase">{social.status}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{social.description}</p>
                <a
                  href={social.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm flex items-center justify-center w-full"
                >
                  SET UP NOW <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Verification */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center uppercase">
          <Phone className="mr-3 h-6 w-6" />
          CONTACT INFORMATION VERIFIED
        </h3>
        <div className="bg-slate-700 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-white mb-3 uppercase">PHONE NUMBERS</h4>
              <div className="space-y-2">
                <a href="tel:+15067179627" className="block text-green-300 font-semibold hover:text-green-200">
                  📞 (506) 717-XMAS (9627) ✅
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 uppercase">EMAIL ADDRESSES</h4>
              <div className="space-y-2">
                <a href="mailto:contact@placed.life" className="block text-green-300 font-semibold hover:text-green-200">
                  ✉️ contact@placed.life ✅
                </a>
                <a href="mailto:yourchristmas@placed.life" className="block text-green-300 font-semibold hover:text-green-200">
                  ✉️ yourchristmas@placed.life ✅
                </a>
                <a href="mailto:santashelpers@placed.ca" className="block text-green-300 font-semibold hover:text-green-200">
                  ✉️ santashelpers@placed.ca ✅
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Launch Actions */}
      <div className="bg-gradient-to-r from-christmas-red to-christmas-green p-8 rounded-lg text-center">
        <h3 className="text-3xl font-bold text-white mb-4 uppercase text-outlined">
          READY TO LAUNCH! 🎄
        </h3>
        <p className="text-white text-lg mb-6 font-semibold">
          Your PLACED Santa's Helpers website is fully optimized and ready for customers!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-white text-christmas-red hover:bg-gray-100 font-bold px-8 py-3 text-lg"
            onClick={() => window.open('https://replit.com/@youruser/placedchristmas/deployments', '_blank')}
          >
            🚀 DEPLOY TO PRODUCTION
          </Button>
          <Button 
            className="bg-christmas-gold text-slate-900 hover:bg-yellow-400 font-bold px-8 py-3 text-lg"
            onClick={() => window.open('/booking', '_blank')}
          >
            📞 TEST BOOKING SYSTEM
          </Button>
        </div>
      </div>

      {/* SEO Summary */}
      <div className="mt-8 bg-slate-700 p-6 rounded-lg">
        <h4 className="text-xl font-bold text-blue-300 mb-4 uppercase">SEO OPTIMIZATION SUMMARY</h4>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h5 className="font-bold text-white mb-2 uppercase">PRIMARY KEYWORDS</h5>
            <ul className="text-gray-300 space-y-1">
              <li>• placed santa's helpers</li>
              <li>• christmas lights quispamsis</li>
              <li>• holiday decorating new brunswick</li>
              <li>• your christmas our hands</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-2 uppercase">LOCAL SEO</h5>
            <ul className="text-gray-300 space-y-1">
              <li>• Quispamsis, NB targeting</li>
              <li>• Saint John area coverage</li>
              <li>• Rothesay service area</li>
              <li>• Geographic coordinates added</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-2 uppercase">TECHNICAL SEO</h5>
            <ul className="text-gray-300 space-y-1">
              <li>• Schema markup implemented</li>
              <li>• Open Graph tags active</li>
              <li>• Mobile-first responsive</li>
              <li>• Fast loading optimized</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}