import React from 'react';
import placedLogo from '@assets/placedchristmas1logo_1754703231545.png';
import heroImage from '@assets/christmas_light_displays_1754703231360.jpeg';

interface SocialMetaTagsProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SocialMetaTags({ 
  title, 
  description, 
  image = heroImage, 
  url = window.location.href,
  type = 'website'
}: SocialMetaTagsProps) {
  const siteName = "PLACED Santa's Helpers";
  const twitterHandle = "@PlacedServices";
  const fbAppId = "YOUR_FB_APP_ID"; // User will need to provide this
  
  return (
    <>
      {/* Open Graph Meta Tags for Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_CA" />
      
      {/* Facebook App ID */}
      <meta property="fb:app_id" content={fbAppId} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Geographic SEO */}
      <meta name="geo.region" content="CA-NB" />
      <meta name="geo.placename" content="Quispamsis, New Brunswick" />
      <meta name="geo.position" content="45.4;-65.9" />
      <meta name="ICBM" content="45.4, -65.9" />
      
      {/* Business Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "PLACED Santa's Helpers",
          "alternateName": "Your Christmas, Our Hands",
          "description": "Professional Christmas light installation and holiday decorating services in Quispamsis, New Brunswick and surrounding areas.",
          "url": "https://placedchristmas.replit.app",
          "telephone": ["+1-506-650-2122", "+1-506-717-9627"],
          "email": "contact@placed.life",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Quispamsis",
            "addressRegion": "NB",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.4,
            "longitude": -65.9
          },
          "areaServed": [
            "Quispamsis",
            "Saint John",
            "Rothesay",
            "New Brunswick"
          ],
          "serviceType": [
            "Christmas Light Installation",
            "Holiday Decorating",
            "Gutter Cleaning",
            "Exterior Inspections"
          ],
          "priceRange": "$299-$1299",
          "paymentAccepted": ["Cash", "Credit Card", "Stripe"],
          "logo": placedLogo,
          "image": image,
          "sameAs": [
            "https://www.facebook.com/PlacedServices",
            "https://www.instagram.com/placedservices",
            "https://hhplaced.replit.app"
          ]
        })}
      </script>
    </>
  );
}