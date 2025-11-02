import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import real gallery images - Updated with latest uploads
import christmasDisplay1 from '@assets/christmas_light_displays_1754703231360.jpeg';
import christmasDisplay2 from '@assets/christmas_light_displays_on_a_beautiful_homef_1754703231460.jpeg';
import christmasDisplay3 from '@assets/christmas_light_displays_on_a_beautiful_homeff_1754703231483.jpeg';
import christmasDisplay4 from '@assets/christmas_light_displays_on_a_beautiful_homeffff_1754703231489.jpeg';
import christmasDisplay5 from '@assets/christmas_light_displays_on_a_beautiful_homell_1754703231540.jpeg';
import christmasDisplay6 from '@assets/christmas_light_displaysggh_1754703231542.jpeg';
import christmasDisplay7 from '@assets/christmas_light_displaysjj_1754703231543.jpeg';
import santasHelpers from '@assets/santashelpers_1754703231550.jpeg';
import weArePlaced from '@assets/we_are_placed_and_we_are_christmas_1754703231552.jpeg';
import realInstallation from '@assets/image_1754704532843.png';
import truckWrap from '@assets/santashelpertruck_1754752347631.png';

const realGalleryItems = [
  {
    id: 'real-1',
    imageUrl: christmasDisplay1,
    title: 'STUNNING RESIDENTIAL CHRISTMAS LIGHT DISPLAY',
    description: 'Complete home transformation with professional LED Christmas lighting installation including rooflines, trees, and walkways.',
    category: 'Residential',
    featured: true
  },
  {
    id: 'real-2', 
    imageUrl: christmasDisplay2,
    title: 'ELEGANT HOLIDAY HOME LIGHTING',
    description: 'Beautiful warm white LED installation creating a magical winter wonderland atmosphere for the entire family.',
    category: 'Residential',
    featured: true
  },
  {
    id: 'real-3',
    imageUrl: christmasDisplay3, 
    title: 'PREMIUM CHRISTMAS LIGHTING PACKAGE',
    description: 'Professional grade LED lights with custom design elements and synchronized lighting effects for maximum curb appeal.',
    category: 'Premium',
    featured: true
  },
  {
    id: 'real-4',
    imageUrl: christmasDisplay4,
    title: 'FESTIVE FAMILY HOME DISPLAY', 
    description: 'Complete Christmas light installation with energy-efficient LED technology and professional installation techniques.',
    category: 'Residential',
    featured: false
  },
  {
    id: 'real-5',
    imageUrl: christmasDisplay5,
    title: 'SPECTACULAR HOLIDAY LIGHTING',
    description: 'Stunning Christmas display featuring multi-color LED lights and custom architectural lighting design.',
    category: 'Premium', 
    featured: false
  },
  {
    id: 'real-6',
    imageUrl: christmasDisplay6,
    title: 'PROFESSIONAL CHRISTMAS INSTALLATION',
    description: 'Expert installation showcasing our attention to detail and commitment to creating magical holiday experiences.',
    category: 'Commercial',
    featured: false
  },
  {
    id: 'real-7',
    imageUrl: christmasDisplay7,
    title: 'FESTIVE NEIGHBORHOOD DISPLAY',
    description: 'Adding holiday cheer to entire neighborhoods with professional Christmas light installations.',
    category: 'Commercial',
    featured: false
  },
  {
    id: 'real-8',
    imageUrl: santasHelpers,
    title: 'PLACED SANTA\'S HELPERS TEAM',
    description: 'Our professional team of Christmas lighting experts ready to transform your home this holiday season.',
    category: 'Team',
    featured: true
  },
  {
    id: 'real-9',
    imageUrl: weArePlaced,
    title: 'WE ARE PLACED AND WE ARE CHRISTMAS',
    description: 'Bringing the magic of Christmas to Quispamsis and surrounding communities with professional holiday decorating.',
    category: 'Service',
    featured: true
  },
  {
    id: 'real-10',
    imageUrl: realInstallation,
    title: 'PROFESSIONAL INSTALLATION IN ACTION',
    description: 'Our PLACED team installing Christmas lights on a beautiful home in Quispamsis. Professional equipment, safety protocols, and attention to detail.',
    category: 'Installation',
    featured: true
  },
  {
    id: 'real-11',
    imageUrl: truckWrap,
    title: 'SANTA\'S HELPERS PROFESSIONAL TRUCK',
    description: 'Our fully wrapped professional vehicle with all contact information and branding. Ready to bring Christmas magic to your neighborhood.',
    category: 'Branding',
    featured: true
  }
];

interface RealGalleryProps {
  showFeaturedOnly?: boolean;
  maxItems?: number;
}

export function RealGalleryCarousel({ showFeaturedOnly = false, maxItems }: RealGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items = showFeaturedOnly 
    ? realGalleryItems.filter(item => item.featured)
    : realGalleryItems;
    
  const displayItems = maxItems ? items.slice(0, maxItems) : items;

  useEffect(() => {
    if (displayItems.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === displayItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [displayItems.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? displayItems.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === displayItems.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (displayItems.length === 0) {
    return (
      <div className="card-primary text-center py-12">
        <p className="text-light text-lg uppercase">LOADING GALLERY...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-christmas-gold/30">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {displayItems.map((item, index) => (
            <div key={item.id} className="w-full flex-shrink-0 relative">
              <div className="aspect-w-16 aspect-h-10">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-96 object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* Enhanced overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-christmas-red/90 px-3 py-1 rounded-full">
                        <span className="text-white font-bold text-sm uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      {item.featured && (
                        <div className="bg-christmas-gold/90 px-3 py-1 rounded-full">
                          <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                            ⭐ FEATURED
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 uppercase text-outlined heading-section">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed text-outlined mb-4">
                      {item.description}
                    </p>
                    <Button 
                      className="btn-outline text-sm px-6 py-2"
                      onClick={() => window.open('/gallery', '_blank')}
                    >
                      VIEW FULL GALLERY <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {displayItems.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {displayItems.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {displayItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-christmas-gold scale-125' 
                  : 'bg-slate-500 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      <div className="text-center mt-4">
        <span className="text-slate-400 font-semibold uppercase tracking-wider">
          {currentIndex + 1} OF {displayItems.length}
        </span>
      </div>
    </div>
  );
}

export function RealGalleryGrid({ showFeaturedOnly = false, maxItems }: RealGalleryProps) {
  const items = showFeaturedOnly 
    ? realGalleryItems.filter(item => item.featured)
    : realGalleryItems;
    
  const displayItems = maxItems ? items.slice(0, maxItems) : items;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayItems.map((item, index) => (
        <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="aspect-w-16 aspect-h-12">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              loading={index < 6 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-christmas-red/90 px-2 py-1 rounded text-white text-xs font-bold uppercase">
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="bg-christmas-gold/90 px-2 py-1 rounded text-slate-900 text-xs font-bold uppercase">
                      ⭐ FEATURED
                    </span>
                  )}
                </div>
                <h4 className="text-white font-bold text-sm mb-1 uppercase text-outlined">
                  {item.title}
                </h4>
                <p className="text-gray-200 text-xs leading-relaxed text-outlined">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}