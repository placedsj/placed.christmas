import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '@shared/schema';

interface GalleryCarouselProps {
  items: GalleryItem[];
}

export function GalleryCarousel({ items }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (items.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [items.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) {
    return (
      <div className="card-primary text-center py-12">
        <p className="text-light text-lg uppercase">NO GALLERY ITEMS AVAILABLE</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-xl shadow-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={item.id} className="w-full flex-shrink-0 relative">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-80 object-cover"
                />
                {/* Overlay with description */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 uppercase text-outlined heading-section">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed text-outlined">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800 bg-opacity-80 text-white p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800 bg-opacity-80 text-white p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Carousel counter */}
      <div className="text-center mt-4">
        <span className="text-light text-sm uppercase font-semibold">
          {currentIndex + 1} of {items.length}
        </span>
      </div>
    </div>
  );
}