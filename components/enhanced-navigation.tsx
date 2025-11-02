import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, Mail, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function EnhancedNavigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/package-builder', label: 'Package Builder' },
    { href: '/ask-a-pro', label: 'Ask a Pro' },
    { href: '/appointments', label: 'Appointments' },
    { href: '/trust', label: 'Why Choose Us' },
    { href: '/handbook', label: "Homeowner's Handbook" },
    { href: '/portal', label: 'Customer Portal' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-rich-burgundy to-deep-forest text-white py-2 hidden md:block">
        <div className="container-professional">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-warm-gold" />
                <a href="tel:5066502122" className="hover:text-yellow-300 transition-colors font-semibold">
                  (506) 650-2122
                </a>
                <span className="text-gray-300">or</span>
                <a href="tel:5067179627" className="hover:text-yellow-300 transition-colors font-semibold">
                  (506) 717-XMAS
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-warm-gold" />
                <a href="mailto:yourchristmas@placed.life" className="hover:text-yellow-300 transition-colors">
                  yourchristmas@placed.life
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-warm-gold" />
                <span className="text-yellow-300 font-semibold">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles className="h-4 w-4 text-warm-gold" />
                <span className="text-yellow-300 font-semibold">Local NB Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-deep-forest via-holiday-green to-deep-forest text-white shadow-2xl sticky top-0 z-50">
        <div className="container-professional">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="group flex items-center gap-3">
                <div className="relative">
                  <Star className="h-8 w-8 text-warm-gold animate-twinkle" />
                  <div className="absolute inset-0 animate-glow"></div>
                </div>
                <div>
                  <div className="font-festive text-2xl lg:text-3xl text-white drop-shadow-lg group-hover:text-yellow-300 transition-colors">
                    PLACED
                  </div>
                  <div className="font-festive text-sm lg:text-base text-yellow-300 -mt-1">
                    Santa's Helpers
                  </div>
                </div>
                <div className="relative">
                  <Star className="h-6 w-6 text-warm-gold animate-twinkle delay-500" />
                  <div className="absolute inset-0 animate-glow delay-500"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {navItems.slice(0, 8).map((item) => (
                <Link key={item.href} href={item.href}>
                  <div className={`px-3 py-2 rounded-lg font-sans font-semibold text-sm transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-yellow-300 ${
                    location === item.href ? 'bg-white bg-opacity-20 text-yellow-300' : 'text-white'
                  }`}>
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/booking">
                <Button className="btn-primary px-6 py-2 text-sm font-bold animate-glow">
                  🎄 Book Now
                </Button>
              </Link>
              <a href="tel:5066502122">
                <Button className="btn-secondary px-6 py-2 text-sm font-bold border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-deep-forest">
                  📞 Call Now
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <Button
                onClick={toggleMenu}
                className="p-2 text-white hover:text-yellow-300 transition-colors"
                variant="ghost"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden bg-gradient-to-b from-deep-forest to-rich-burgundy border-t border-gray-600">
            <div className="container-professional py-6">
              {/* Mobile Contact Info */}
              <div className="mb-6 pb-6 border-b border-gray-600">
                <div className="space-y-3 text-center">
                  <div className="flex justify-center items-center gap-2">
                    <Phone className="h-5 w-5 text-warm-gold" />
                    <a href="tel:5066502122" className="text-yellow-300 font-bold text-lg">
                      (506) 650-2122
                    </a>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Phone className="h-5 w-5 text-warm-gold" />
                    <a href="tel:5067179627" className="text-yellow-300 font-bold text-lg">
                      (506) 717-XMAS
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2 mb-6">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                    <div className={`block px-4 py-3 rounded-lg font-sans font-semibold transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-yellow-300 ${
                      location === item.href ? 'bg-white bg-opacity-20 text-yellow-300' : 'text-white'
                    }`}>
                      {item.label}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="space-y-3">
                <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full btn-primary py-3 text-lg font-bold animate-glow">
                    🎄 Book Your Service Now 🎅
                  </Button>
                </Link>
                <a href="tel:5066502122">
                  <Button className="w-full btn-secondary py-3 text-lg font-bold border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-deep-forest">
                    📞 Call Santa's Helpers
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}