import { useQuery } from '@tanstack/react-query';
import { Navigation } from '@/components/navigation';
import { SEOHead } from '@/components/seo-head';
import { seoData } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { GalleryItem } from '@shared/schema';
import { useState } from 'react';

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  
  const { data: galleryItems = [], isLoading } = useQuery<GalleryItem[]>({
    queryKey: ['/api/gallery'],
  });

  // Static gallery items to showcase the service
  const staticGalleryItems = [
    {
      id: '1',
      title: 'Majestic Tree Lighting',
      description: '30-foot evergreen display',
      imageUrl: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      serviceType: 'Tree Lighting',
      featured: true,
    },
    {
      id: '2',
      title: 'Welcoming Entry',
      description: 'Garland and accent lighting',
      imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      serviceType: 'Residential Installation',
      featured: false,
    },
    {
      id: '3',
      title: 'Professional Installation',
      description: 'Safety is our priority',
      imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      serviceType: 'Commercial Display',
      featured: false,
    },
    {
      id: '4',
      title: 'Complete Package',
      description: 'Lights, garlands & wreaths',
      imageUrl: 'https://images.unsplash.com/photo-1544966503-7bb9bb1dd9b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      serviceType: 'Premium Package',
      featured: false,
    },
    {
      id: '5',
      title: 'Suburban Elegance',
      description: 'Sophisticated roofline display',
      imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      serviceType: 'Residential Installation',
      featured: true,
    },
    {
      id: '6',
      title: 'Commercial Storefront',
      description: 'Eye-catching business display',
      imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      serviceType: 'Commercial Display',
      featured: false,
    },
  ];

  const allItems = [...galleryItems, ...staticGalleryItems];
  
  const filteredItems = selectedFilter === 'all' 
    ? allItems 
    : allItems.filter(item => item.serviceType === selectedFilter);

  const serviceTypes = ['all', 'Residential Installation', 'Commercial Display', 'Premium Package', 'Tree Lighting'];

  if (isLoading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-holiday-red mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading gallery...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead data={seoData.gallery} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-holiday-green to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Our Holiday Transformations
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Browse through our portfolio of stunning Christmas light installations. 
              Each project showcases our commitment to creating magical holiday experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceTypes.map((type) => (
              <Button
                key={type}
                variant={selectedFilter === type ? "default" : "outline"}
                onClick={() => setSelectedFilter(type)}
                className={`rounded-full ${
                  selectedFilter === type 
                    ? 'bg-holiday-red hover:bg-red-700 text-white' 
                    : 'border-holiday-red text-holiday-red hover:bg-holiday-red hover:text-white'
                }`}
              >
                {type === 'all' ? 'All Projects' : type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-holiday-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No items found for the selected filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    {item.featured && (
                      <Badge className="absolute top-4 left-4 bg-holiday-gold text-white">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm opacity-90 mb-2">{item.description}</p>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {item.serviceType}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-holiday-green mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <Badge variant="outline" className="border-holiday-red text-holiday-red">
                      {item.serviceType}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-holiday-green mb-6">
            Ready to Create Your Own Holiday Magic?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us transform your property into a stunning holiday display that will create 
            lasting memories for you and your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-holiday-red hover:bg-red-700 text-white rounded-full font-semibold">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-holiday-green text-holiday-green hover:bg-holiday-green hover:text-white rounded-full font-semibold">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
