import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, User } from 'lucide-react';
import type { Testimonial } from '@shared/schema';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = parseFloat(testimonial.rating);
  
  return (
    <Card className="shadow-xl relative christmas-lights-border" style={{ backgroundColor: 'var(--card-background)' }}>
      <CardContent className="p-8">
        <div className="absolute -top-4 left-8">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--rich-burgundy)' }}>
            <Quote className="text-white h-4 w-4" />
          </div>
        </div>
        
        <div className="flex text-holiday-gold mb-4 pt-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? 'fill-current' : ''}`} />
          ))}
        </div>
        
        <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
          "{testimonial.comment}"
        </p>
        
        <div className="flex items-center">
          <div className="w-12 h-12 bg-holiday-gold bg-opacity-20 rounded-full flex items-center justify-center mr-4">
            <User className="h-6 w-6" style={{ color: 'var(--deep-forest)' }} />
          </div>
          <div>
            <h4 className="font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{testimonial.name.toUpperCase()}</h4>
            <p className="text-sm font-medium text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>{testimonial.serviceType.toUpperCase()}, {testimonial.location.toUpperCase()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
