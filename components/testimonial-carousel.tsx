import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { Testimonial } from '@shared/schema';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    if (testimonials.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const formatName = (name: string) => {
    if (!name) return "Anonymous";
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0]} ${parts[1].charAt(0)}.`;
    }
    return name;
  };

  const renderStars = (rating: string | number) => {
    const numRating = typeof rating === 'string' ? parseInt(rating) : rating;
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < numRating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  if (testimonials.length === 0) {
    return (
      <div className="card-primary text-center py-12">
        <p className="text-light text-lg uppercase">NO TESTIMONIALS AVAILABLE</p>
      </div>
    );
  }

  // Show 3 testimonials at a time on desktop, 1 on mobile
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3).concat(
    testimonials.slice(0, Math.max(0, (currentIndex + 3) - testimonials.length))
  );

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main carousel container */}
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="card-professional group">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Customer Name */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-yellow-300 uppercase text-outlined">
                  {formatName(testimonial.name)}
                </h3>
              </div>

              {/* Review Content */}
              <div className="text-center">
                {expandedId === testimonial.id ? (
                  <div className="space-y-4">
                    <p className="text-light leading-relaxed text-outlined">
                      "{testimonial.comment || 'Great service!'}"
                    </p>
                    <button
                      onClick={() => toggleExpanded(testimonial.id)}
                      className="text-yellow-300 hover:text-yellow-200 font-semibold uppercase text-sm"
                    >
                      SHOW LESS
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-light leading-relaxed text-outlined">
                      "{(testimonial.comment || 'Great service!').substring(0, 80)}..."
                    </p>
                    <button
                      onClick={() => toggleExpanded(testimonial.id)}
                      className="text-yellow-300 hover:text-yellow-200 font-semibold uppercase text-sm transition-colors duration-300"
                    >
                      READ MORE
                    </button>
                  </div>
                )}
              </div>

              {/* Service Type */}
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-300 uppercase tracking-wide">
                  {testimonial.serviceType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800 bg-opacity-80 text-white p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800 bg-opacity-80 text-white p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next testimonials"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * 3)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === index
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Carousel counter */}
      <div className="text-center mt-6">
        <span className="text-light text-sm uppercase font-semibold text-outlined">
          {Math.floor(currentIndex / 3) + 1} of {Math.ceil(testimonials.length / 3)} SETS
        </span>
      </div>
    </div>
  );
}