import { useEffect } from 'react';
import type { SEOData } from '@/lib/seo';

interface SEOHeadProps {
  data: SEOData;
}

export function SEOHead({ data }: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = data.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', data.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = data.description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    if (data.keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', data.keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = data.keywords;
        document.head.appendChild(meta);
      }
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      const existing = document.querySelector(`meta[property="${property}"]`);
      if (existing) {
        existing.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    updateOGTag('og:title', data.ogTitle || data.title);
    updateOGTag('og:description', data.ogDescription || data.description);
    updateOGTag('og:type', 'website');
    
    if (data.ogImage) {
      updateOGTag('og:image', data.ogImage);
    }

    // Structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "PLACED Santa's Helpers",
      "description": "Your Christmas, Our Hands - Professional Christmas light installation and holiday decorating services",
      "serviceArea": "Quispamsis, New Brunswick and surrounding areas",
      "addressLocality": "Quispamsis",
      "addressRegion": "New Brunswick",
      "addressCountry": "Canada",
      "priceRange": "$$",
      "areaServed": ["Quispamsis", "Saint John", "Rothesay", "New Brunswick"]
    };

    const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
    if (existingStructuredData) {
      existingStructuredData.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [data]);

  return null;
}
