import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  iconColor: string;
  iconBgColor: string;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  price, 
  iconColor, 
  iconBgColor 
}: ServiceCardProps) {
  return (
    <Card className="shadow-xl hover:shadow-2xl transition-shadow group hover:transform hover:scale-105 transition-all duration-300 christmas-lights-border" style={{ backgroundColor: 'var(--card-background)' }}>
      <CardContent className="p-8 text-center">
        <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-20 transition-colors`}>
          <Icon className={`${iconColor} h-8 w-8`} />
        </div>
        <h3 className="font-playfair text-2xl font-bold festive-heading mb-4">{title.toUpperCase()}</h3>
        <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{description}</p>
        <div className="space-y-2 text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
          {features.map((feature, index) => (
            <div key={index} className="flex justify-center items-center">
              <Check className="mr-2 h-4 w-4" style={{ color: 'var(--deep-forest)' }} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-holiday-green mb-2">
            Starting at <span className="text-holiday-red">{price}</span>
          </p>
          <Button className="w-full present-button py-3 text-sm font-bold transition-all duration-300 border-0 bg-gradient-to-r from-holiday-red to-red-600">
            <span className="button-text">GET QUOTE</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
