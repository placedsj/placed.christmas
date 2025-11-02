import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, DollarSign, CheckCircle } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';

interface PriceCalculatorProps {
  onPriceChange: (price: number, serviceType: string, propertySize: string) => void;
  className?: string;
}

export function PriceCalculator({ onPriceChange, className = '' }: PriceCalculatorProps) {
  const [serviceType, setServiceType] = useState('');
  const [propertySize, setPropertySize] = useState('');
  const [quote, setQuote] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const serviceOptions = [
    { value: 'residential-basic', label: 'Residential Basic', description: 'Roofline and basic decorations' },
    { value: 'residential-premium', label: 'Residential Premium', description: 'Full house with trees and yard features' },
    { value: 'residential-deluxe', label: 'Residential Deluxe', description: 'Complete property transformation' },
    { value: 'commercial-basic', label: 'Commercial Basic', description: 'Storefront and entrance lighting' },
    { value: 'commercial-premium', label: 'Commercial Premium', description: 'Full building with signage' },
    { value: 'commercial-deluxe', label: 'Commercial Deluxe', description: 'Complete commercial property' },
    { value: 'custom', label: 'Custom Project', description: 'Tailored to your specific needs' }
  ];

  const sizeOptions = [
    { value: 'small', label: 'Small', description: 'Up to 1,500 sq ft' },
    { value: 'medium', label: 'Medium', description: '1,500 - 3,000 sq ft' },
    { value: 'large', label: 'Large', description: '3,000 - 5,000 sq ft' },
    { value: 'extra-large', label: 'Extra Large', description: 'Over 5,000 sq ft' }
  ];

  useEffect(() => {
    if (serviceType && propertySize) {
      setIsLoading(true);
      
      apiRequest('POST', '/api/quote', {
        serviceType,
        propertySize
      })
      .then(response => response.json())
      .then(data => {
        setQuote(data);
        onPriceChange(data.estimatedPrice, serviceType, propertySize);
      })
      .catch(error => {
        console.error('Failed to get quote:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
  }, [serviceType, propertySize, onPriceChange]);

  return (
    <Card className={`card-professional ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="w-5 h-5 mr-2 text-blue-500" />
          Get Instant Quote
        </CardTitle>
        <p className="text-sm text-slate-600">
          Select your service and property size for automated pricing
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Service Type</label>
          <Select value={serviceType} onValueChange={setServiceType}>
            <SelectTrigger>
              <SelectValue placeholder="Choose your service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  <div>
                    <div className="font-medium">{option.label}</div>
                    <div className="text-xs text-slate-500">{option.description}</div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Property Size</label>
          <Select value={propertySize} onValueChange={setPropertySize}>
            <SelectTrigger>
              <SelectValue placeholder="Select property size" />
            </SelectTrigger>
            <SelectContent>
              {sizeOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  <div>
                    <div className="font-medium">{option.label}</div>
                    <div className="text-xs text-slate-500">{option.description}</div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full mr-2"></div>
            Calculating your quote...
          </div>
        )}

        {quote && !isLoading && (
          <div className="bg-blue-50 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-slate-800">Estimated Total</span>
              <span className="text-2xl font-bold text-blue-600">${quote.estimatedPrice} CAD</span>
            </div>
            
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Base Service:</span>
                <span>${quote.priceBreakdown.baseService}</span>
              </div>
              <div className="flex justify-between">
                <span>Installation:</span>
                <span>${quote.priceBreakdown.installation}</span>
              </div>
              <div className="flex justify-between">
                <span>Materials:</span>
                <span>${quote.priceBreakdown.materials}</span>
              </div>
            </div>

            <div className="flex items-start space-x-2 text-sm text-slate-600">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p>Professional installation in Quispamsis area</p>
                <p>Includes setup, take-down, and storage</p>
                <p>Fully insured service with warranty</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}