import React from 'react';
import { Download, Share2, Calendar, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import additional generated marketing images
import holidayFlyer from '@assets/generated_images/Door_to_door_marketing_flyer_28722049.png';
import emailSignature from '@assets/generated_images/Professional_email_signature_design_19265024.png';
import takedownPromo from '@assets/generated_images/January_takedown_service_promotion_552613df.png';
import referralProgram from '@assets/generated_images/Customer_referral_program_graphic_855181af.png';
import emergencyService from '@assets/generated_images/24/7_emergency_service_banner_bcf64bf3.png';
// Use existing images for remaining templates
import placedLogo from '@assets/placedchristmas1logo_1754703231545.png';
import realInstallation from '@assets/image_1754704532843.png';

export function AdditionalMarketingAssets() {
  const additionalAssets = [
    {
      id: 'holiday-flyer',
      src: holidayFlyer,
      title: 'HOLIDAY MARKETING FLYER',
      description: 'Door-to-door flyer for neighborhood marketing campaigns in Quispamsis area',
      category: 'Print Marketing',
      platforms: ['Print', 'Door-to-Door', 'Community Board'],
      season: 'November-December'
    },
    {
      id: 'email-signature',
      src: emailSignature,
      title: 'PROFESSIONAL EMAIL SIGNATURE',
      description: 'Add to all business emails with contact info and Christmas branding',
      category: 'Digital Communication',
      platforms: ['Email', 'Gmail', 'Outlook'],
      season: 'Year-Round'
    },
    {
      id: 'takedown-promo',
      src: takedownPromo,
      title: 'JANUARY TAKEDOWN SERVICE',
      description: 'Post-holiday takedown service promotion for January bookings',
      category: 'Seasonal Promotion',
      platforms: ['Social Media', 'Email', 'Website'],
      season: 'January'
    },
    {
      id: 'referral-program',
      src: referralProgram,
      title: 'CUSTOMER REFERRAL PROGRAM',
      description: 'Encourage word-of-mouth marketing with referral incentives',
      category: 'Customer Retention',
      platforms: ['Social Media', 'Print', 'Email'],
      season: 'Year-Round'
    },
    {
      id: 'emergency-service',
      src: emergencyService,
      title: '24/7 EMERGENCY SERVICE BANNER',
      description: 'Highlight emergency repair services for storm damage or outages',
      category: 'Service Promotion',
      platforms: ['Website', 'Social Media', 'Print'],
      season: 'December-January'
    },
    {
      id: 'package-comparison',
      src: placedLogo,
      title: 'SERVICE PACKAGE COMPARISON',
      description: 'Visual guide showing Basic, Premium, and Commercial service options',
      category: 'Educational',
      platforms: ['Website', 'Sales Material', 'Print'],
      season: 'Year-Round'
    },
    {
      id: 'social-media-post',
      src: realInstallation,
      title: 'FACEBOOK POST TEMPLATE',
      description: 'Ready-to-use social media post template with booking call-to-action',
      category: 'Social Media',
      platforms: ['Facebook', 'Instagram', 'LinkedIn'],
      season: 'November-December'
    },
    {
      id: 'thank-you-card',
      src: placedLogo,
      title: 'CUSTOMER THANK YOU CARD',
      description: 'Professional thank you card to leave after completed installations',
      category: 'Customer Service',
      platforms: ['Print', 'Hand Delivery'],
      season: 'December-January'
    }
  ];

  const downloadImage = (src: string, filename: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = filename;
    link.click();
  };

  return (
    <section className="bg-gradient-to-br from-slate-800 via-christmas-green to-slate-900 py-16">
      <div className="container-professional">
        <div className="text-center mb-12">
          <h2 className="font-festive text-4xl md:text-5xl font-bold text-christmas-gold mb-4 uppercase text-outlined">
            🎯 ADDITIONAL MARKETING ASSETS
          </h2>
          <p className="text-xl text-light max-w-3xl mx-auto font-semibold">
            Extended marketing suite for comprehensive business promotion across all seasons and customer touchpoints.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {additionalAssets.map((asset) => (
            <div key={asset.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-christmas-gold/30 hover:border-christmas-gold transition-all duration-300 hover:scale-105">
              <div className="bg-white rounded-xl p-3 mb-4">
                <img
                  src={asset.src}
                  alt={asset.title}
                  className="w-full h-32 object-contain"
                />
              </div>
              
              <h3 className="text-lg font-bold text-christmas-gold mb-2 uppercase text-outlined text-sm">
                {asset.title}
              </h3>
              
              <p className="text-light text-xs mb-3 leading-relaxed">
                {asset.description}
              </p>

              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-3 w-3 text-christmas-cream" />
                  <span className="text-christmas-cream text-xs font-semibold">{asset.season}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {asset.platforms.slice(0, 2).map((platform) => (
                    <span key={platform} className="bg-christmas-red/20 text-christmas-cream px-2 py-1 rounded text-xs font-semibold">
                      {platform}
                    </span>
                  ))}
                  {asset.platforms.length > 2 && (
                    <span className="text-christmas-cream text-xs">+{asset.platforms.length - 2}</span>
                  )}
                </div>
              </div>

              <div className="flex gap-1">
                <Button
                  size="sm"
                  className="flex-1 bg-christmas-gold text-slate-900 hover:bg-yellow-400 font-bold text-xs py-2"
                  onClick={() => downloadImage(asset.src, `${asset.id}-placed-santas-helpers.png`)}
                >
                  <Download className="h-3 w-3 mr-1" />
                  GET
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-christmas-gold text-christmas-gold hover:bg-christmas-gold hover:text-slate-900 px-2"
                  onClick={() => navigator.share?.({ url: asset.src, title: asset.title })}
                >
                  <Share2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-christmas-red/20 border border-christmas-red/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-christmas-gold mb-6 uppercase">
              📅 SEASONAL MARKETING CALENDAR
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6 text-left">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-3 uppercase flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  OCTOBER-NOVEMBER
                </h4>
                <ul className="text-light text-sm space-y-1">
                  <li>• Early bird promotions</li>
                  <li>• Door-to-door flyers</li>
                  <li>• Package comparison guides</li>
                  <li>• Social media campaigns</li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-3 uppercase">
                  DECEMBER
                </h4>
                <ul className="text-light text-sm space-y-1">
                  <li>• Emergency service banners</li>
                  <li>• Last-minute booking ads</li>
                  <li>• Thank you cards</li>
                  <li>• Installation showcases</li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-3 uppercase">
                  JANUARY
                </h4>
                <ul className="text-light text-sm space-y-1">
                  <li>• Takedown service promos</li>
                  <li>• Thank you follow-ups</li>
                  <li>• Referral program launch</li>
                  <li>• Next year bookings</li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-3 uppercase">
                  YEAR-ROUND
                </h4>
                <ul className="text-light text-sm space-y-1">
                  <li>• Email signatures</li>
                  <li>• Referral programs</li>
                  <li>• Package information</li>
                  <li>• Brand maintenance</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-900/50 rounded-lg">
              <div className="flex items-center justify-center gap-4 mb-4">
                <MapPin className="h-6 w-6 text-green-200" />
                <Phone className="h-6 w-6 text-green-200" />
              </div>
              <p className="text-green-200 font-bold text-xl uppercase">
                COMPLETE MARKETING SYSTEM FOR QUISPAMSIS
              </p>
              <p className="text-green-300 text-sm mt-2">
                18 professional marketing assets • Seasonal campaign guidance • Multi-platform optimization • Ready for immediate deployment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}