import React, { useEffect } from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Facebook SDK Integration
export function FacebookSDK() {
  useEffect(() => {
    // Load Facebook SDK
    (function(d: Document, s: string, id: string) {
      let js: HTMLScriptElement, fjs = d.getElementsByTagName(s)[0] as HTMLScriptElement;
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement; 
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=YOUR_APP_ID&autoLogAppEvents=1";
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return <div id="fb-root"></div>;
}

// Social Media Links Component
export function SocialMediaLinks() {
  const socialLinks = {
    facebook: "https://www.facebook.com/PlacedServices", // User needs to provide real URL
    instagram: "https://www.instagram.com/placedservices", // User needs to provide real URL
    messenger: "https://m.me/PlacedServices" // User needs to provide real URL
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Visit our Facebook page"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Visit our Instagram page"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href={socialLinks.messenger}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Message us on Facebook Messenger"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}

// Facebook Page Plugin
export function FacebookPagePlugin() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <div 
        className="fb-page" 
        data-href="https://www.facebook.com/PlacedServices"
        data-tabs="timeline,events,messages" 
        data-width="340" 
        data-height="500"
        data-small-header="false" 
        data-adapt-container-width="true" 
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote 
          cite="https://www.facebook.com/PlacedServices" 
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/PlacedServices">
            PLACED Santa's Helpers - Your Christmas, Our Hands
          </a>
        </blockquote>
      </div>
    </div>
  );
}

// Social Sharing Buttons
export function SocialSharingButtons({ url, title, description }: {
  url: string;
  title: string;
  description: string;
}) {
  const shareOnFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title + ' - ' + description)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnInstagram = () => {
    // Instagram doesn't have direct URL sharing, redirect to profile
    window.open('https://www.instagram.com/placedservices', '_blank');
  };

  const shareViaMessenger = () => {
    const shareUrl = `https://www.facebook.com/dialog/send?app_id=YOUR_APP_ID&link=${encodeURIComponent(url)}&redirect_uri=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
      <p className="text-light font-bold uppercase text-sm">SHARE WITH FRIENDS:</p>
      <div className="flex space-x-3">
        <Button
          onClick={shareOnFacebook}
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2 px-4 py-2 rounded-full"
        >
          <Facebook className="h-4 w-4" />
          <span>FACEBOOK</span>
        </Button>
        <Button
          onClick={shareOnInstagram}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center space-x-2 px-4 py-2 rounded-full"
        >
          <Instagram className="h-4 w-4" />
          <span>INSTAGRAM</span>
        </Button>
        <Button
          onClick={shareViaMessenger}
          className="bg-blue-500 hover:bg-blue-600 text-white flex items-center space-x-2 px-4 py-2 rounded-full"
        >
          <MessageCircle className="h-4 w-4" />
          <span>MESSAGE</span>
        </Button>
      </div>
    </div>
  );
}

// Social Proof Section
export function SocialProofSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
      <div className="container-professional text-center">
        <h3 className="font-festive text-3xl md:text-4xl font-bold mb-6 uppercase text-outlined">
          FOLLOW US FOR MORE CHRISTMAS MAGIC! ✨
        </h3>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Stay updated with our latest Christmas light installations, seasonal tips, and special offers!
        </p>
        <SocialMediaLinks />
        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Facebook className="h-12 w-12 mx-auto mb-4 text-blue-300" />
            <h4 className="font-bold text-lg mb-2 uppercase">FACEBOOK UPDATES</h4>
            <p className="text-blue-100">Daily photos, customer features, and holiday inspiration</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Instagram className="h-12 w-12 mx-auto mb-4 text-pink-300" />
            <h4 className="font-bold text-lg mb-2 uppercase">INSTAGRAM STORIES</h4>
            <p className="text-pink-100">Behind-the-scenes installation videos and time-lapses</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-green-300" />
            <h4 className="font-bold text-lg mb-2 uppercase">DIRECT MESSAGING</h4>
            <p className="text-green-100">Quick quotes and instant communication</p>
          </div>
        </div>
      </div>
    </section>
  );
}