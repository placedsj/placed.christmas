import React from 'react';
import { Download, Share2, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import generated marketing images
import teamPhoto from '@assets/generated_images/Professional_installation_team_photo_a95ce2db.png';
import beforeAfter from '@assets/generated_images/Before_after_transformation_comparison_72ac7b1e.png';
import instagramStory from '@assets/generated_images/Instagram_story_booking_template_2f76afa0.png';
import processInfog from '@assets/generated_images/Installation_process_infographic_3cc8d85e.png';
import facebookCover from '@assets/generated_images/Facebook_cover_photo_design_f8eb9b9c.png';
import yardSign from '@assets/generated_images/Professional_yard_sign_design_68011eb6.png';
import earlyBird from '@assets/generated_images/Early_bird_promotion_graphic_76138e3f.png';
import testimonialTemplate from '@assets/generated_images/Customer_testimonial_template_6c7b41ad.png';
import businessCard from '@assets/generated_images/Professional_business_card_design_885fd66d.png';
import truckWrap from '@assets/generated_images/Service_truck_wrap_design_3e46bb0d.png';

export function MarketingGallery() {
  const marketingAssets = [
    {
      id: 'team-photo',
      src: teamPhoto,
      title: 'PROFESSIONAL TEAM PHOTO',
      description: 'Use for website about page, social media, and marketing materials',
      category: 'Photography',
      platforms: ['Website', 'Social Media', 'Print']
    },
    {
      id: 'before-after',
      src: beforeAfter,
      title: 'BEFORE & AFTER COMPARISON',
      description: 'Perfect for showcasing transformation results on social media',
      category: 'Promotional',
      platforms: ['Facebook', 'Instagram', 'Website']
    },
    {
      id: 'instagram-story',
      src: instagramStory,
      title: 'INSTAGRAM STORY TEMPLATE',
      description: 'Ready-to-use booking promotion for Instagram stories',
      category: 'Social Media',
      platforms: ['Instagram', 'Facebook Stories']
    },
    {
      id: 'process-infographic',
      src: processInfog,
      title: 'INSTALLATION PROCESS GUIDE',
      description: 'Educational infographic showing your professional process',
      category: 'Educational',
      platforms: ['Website', 'Print', 'Email']
    },
    {
      id: 'facebook-cover',
      src: facebookCover,
      title: 'FACEBOOK COVER PHOTO',
      description: 'Branded cover photo featuring Quispamsis community focus',
      category: 'Social Media',
      platforms: ['Facebook', 'LinkedIn']
    },
    {
      id: 'yard-sign',
      src: yardSign,
      title: 'PROFESSIONAL YARD SIGN',
      description: 'Place at customer properties during and after installation',
      category: 'Print Marketing',
      platforms: ['Print', 'Physical']
    },
    {
      id: 'early-bird',
      src: earlyBird,
      title: 'EARLY BIRD PROMOTION',
      description: 'Seasonal promotion for November booking incentives',
      category: 'Promotional',
      platforms: ['Social Media', 'Email', 'Print']
    },
    {
      id: 'testimonial-template',
      src: testimonialTemplate,
      title: 'CUSTOMER TESTIMONIAL TEMPLATE',
      description: 'Template for showcasing customer reviews and ratings',
      category: 'Social Media',
      platforms: ['Facebook', 'Instagram', 'Website']
    },
    {
      id: 'business-card',
      src: businessCard,
      title: 'BUSINESS CARD DESIGN',
      description: 'Professional business card with all contact information',
      category: 'Print Marketing',
      platforms: ['Print', 'Networking']
    },
    {
      id: 'truck-wrap',
      src: truckWrap,
      title: 'SERVICE TRUCK WRAP DESIGN',
      description: 'Vehicle branding design for mobile advertising',
      category: 'Vehicle Graphics',
      platforms: ['Vehicle', 'Mobile Marketing']
    }
  ];

  const downloadImage = (src: string, filename: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = filename;
    link.click();
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16">
      <div className="container-professional">
        <div className="text-center mb-12">
          <h2 className="font-festive text-4xl md:text-5xl font-bold text-christmas-gold mb-4 uppercase text-outlined">
            📸 MARKETING ASSET GALLERY
          </h2>
          <p className="text-xl text-light max-w-3xl mx-auto font-semibold">
            Professional marketing images created for PLACED Santa's Helpers. Download and use across all your marketing channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketingAssets.map((asset) => (
            <div key={asset.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-christmas-gold/30 hover:border-christmas-gold transition-all duration-300 hover:scale-105">
              <div className="bg-white rounded-xl p-4 mb-4">
                <img
                  src={asset.src}
                  alt={asset.title}
                  className="w-full h-48 object-contain"
                />
              </div>
              
              <h3 className="text-lg font-bold text-christmas-gold mb-2 uppercase text-outlined">
                {asset.title}
              </h3>
              
              <p className="text-light text-sm mb-4 leading-relaxed">
                {asset.description}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {asset.platforms.map((platform) => (
                    <span key={platform} className="bg-christmas-red/20 text-christmas-cream px-2 py-1 rounded text-xs font-semibold">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-christmas-gold text-slate-900 hover:bg-yellow-400 font-bold"
                  onClick={() => downloadImage(asset.src, `${asset.id}-placed-santas-helpers.png`)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  DOWNLOAD
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-christmas-gold text-christmas-gold hover:bg-christmas-gold hover:text-slate-900"
                  onClick={() => navigator.share?.({ url: asset.src, title: asset.title })}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-christmas-red/20 border border-christmas-red/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-christmas-gold mb-4 uppercase">
              📋 MARKETING USAGE GUIDE
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-bold text-white mb-3 uppercase flex items-center">
                  <Facebook className="h-5 w-5 mr-2" />
                  SOCIAL MEDIA
                </h4>
                <ul className="text-light text-sm space-y-1">
                  <li>• Use Facebook cover photo for business page</li>
                  <li>• Post Instagram stories with booking template</li>
                  <li>• Share before/after comparisons</li>
                  <li>• Feature customer testimonials</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 uppercase flex items-center">
                  <Instagram className="h-5 w-5 mr-2" />
                  PRINT MARKETING
                </h4>
                <ul className="text-light text-sm space-y-1">
                  <li>• Order business cards from local printer</li>
                  <li>• Create yard signs for active job sites</li>
                  <li>• Use infographic in service brochures</li>
                  <li>• Print early bird promotion flyers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 uppercase">
                  🚚 VEHICLE BRANDING
                </h4>
                <ul className="text-light text-sm space-y-1">
                  <li>• Contact local sign shop for truck wrap</li>
                  <li>• Use team photo for website about page</li>
                  <li>• Add process guide to service proposals</li>
                  <li>• Feature testimonials on website</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-900/50 rounded-lg">
              <p className="text-green-200 font-bold text-lg uppercase">
                🎨 COMPLETE MARKETING SUITE READY!
              </p>
              <p className="text-green-300 text-sm mt-2">
                10 professional marketing assets • Ready for immediate use • Consistent PLACED branding • Optimized for all platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}