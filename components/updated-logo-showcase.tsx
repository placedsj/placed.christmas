import React from 'react';
import placedLogo1 from '@assets/xmasplacedlogo2_1754752347620.png';
import placedLogo2 from '@assets/placedchristmas2_1754703231547.png';
import placedLogo3 from '@assets/placedchristmas3_1754703231548.png';

export function UpdatedLogoShowcase() {
  const logos = [
    {
      id: 'primary-logo',
      src: placedLogo1,
      title: 'PLACED.ca - Your Christmas Our Hands',
      description: 'Beautiful new primary logo with hands holding Christmas village scene and professional PLACED.ca branding'
    },
    {
      id: 'gingerbread-house',
      src: placedLogo2,
      title: 'PLACED Santa\'s Helpers - Gingerbread House',
      description: 'Alternative logo with gingerbread house theme and "Your Lights - Our Hands"'
    },
    {
      id: 'christmas-house',
      src: placedLogo3,
      title: 'PLACED Santa\'s Helpers - Christmas House',
      description: 'Festive house logo with Christmas lights and holiday decorations'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-red-50 to-green-50 dark:from-red-950/20 dark:to-green-950/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Updated PLACED.ca Logo Collection
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our latest logo designs showcase the perfect blend of professionalism and holiday spirit
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              data-testid={`logo-card-${logo.id}`}
            >
              <div className="aspect-square bg-gray-50 dark:bg-gray-700 flex items-center justify-center p-8">
                <img 
                  src={logo.src} 
                  alt={logo.title}
                  className="max-w-full max-h-full object-contain"
                  data-testid={`img-logo-${logo.id}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2" data-testid={`text-title-${logo.id}`}>
                  {logo.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300" data-testid={`text-description-${logo.id}`}>
                  {logo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}