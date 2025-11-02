import React from 'react';
import { Button } from '@/components/ui/button';
import { ChristmasLightsDivider, SnowfallAnimation } from '@/components/christmas-lights-divider';
import { Sparkles, Phone, Calendar, Star } from 'lucide-react';
import aerialStencilLogo from '@assets/generated_images/vibrant_spray_paint_stencil_2d9281e8.png';
import newLogo from '@assets/xmasplacedlogo2_1754752347620.png';

export function EnhancedHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-christmas-green to-slate-800 flex items-center overflow-hidden">
      {/* Subtle Snowfall Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              fontSize: `${Math.random() * 8 + 8}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="container-professional relative z-10">
        <div className="text-center">
          
          {/* Drone Aerial View Spray Paint Stencil Logo */}
          <div className="mb-8 animate-fade-in-up delay-300">
            <img
              src={aerialStencilLogo}
              alt="PLACED.ca spray paint stencil logo in snowy yard - aerial drone view of decorated Christmas house with your christmas ❄ our hands"
              className="w-full max-w-6xl mx-auto rounded-2xl shadow-2xl border-4 border-christmas-gold"
            />
          </div>
          
          {/* Minimal Call-to-Action - The truck contains all the info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-fade-in-up delay-700">
            <Button
              size="lg"
              className="bg-christmas-red hover:bg-red-600 text-white px-16 py-6 text-2xl font-bold uppercase rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse"
              onClick={() => window.location.href = '#booking'}
              data-testid="button-book-now-hero"
            >
              BOOK NOW
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-christmas-gold text-christmas-gold hover:bg-christmas-gold hover:text-slate-900 px-16 py-6 text-2xl font-bold uppercase rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '#gallery'}
              data-testid="button-view-gallery-hero"
            >
              VIEW GALLERY
            </Button>
          </div>

          {/* Clean tagline and contact */}
          <div className="text-center animate-fade-in-up delay-1000">
            <div className="text-christmas-cream text-3xl font-bold uppercase mb-4 flex items-center justify-center gap-3">
              YOUR CHRISTMAS <span className="text-4xl">❄</span> OUR HANDS
            </div>
            <div className="text-light text-xl">
              <span className="text-christmas-gold font-bold text-2xl">QUISPAMSIS AND SURROUNDING COMMUNITIES</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Light Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <ChristmasLightsDivider />
      </div>
    </section>
  );
}