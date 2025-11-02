import { Link } from "wouter";
import { MapPin, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-festive min-h-screen">
      <div className="content-container w-full max-w-7xl mx-auto p-6 md:p-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-center w-full mb-12">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider">PLACED.ca</h1>
            <p className="text-white text-lg mt-1 tracking-wide">your christmas our hands</p>
          </div>

          {/* Navigation - All buttons on right side */}
          <nav>
            <div className="flex flex-col gap-3">
              {/* Top row */}
              <ul className="flex flex-wrap justify-center gap-3 md:gap-4">
                <li>
                  <Link href="/" className="nav-button text-sm md:text-base font-medium py-2 px-5 rounded-full inline-block">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="nav-button text-sm md:text-base font-medium py-2 px-5 rounded-full inline-block">
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="nav-button text-sm md:text-base font-medium py-2 px-5 rounded-full inline-block">
                    GALLERY
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="nav-button text-sm md:text-base font-medium py-2 px-5 rounded-full inline-block">
                    REVIEWS
                  </Link>
                </li>
              </ul>
              {/* Bottom row - staggered */}
              <ul className="flex flex-wrap justify-center gap-3 md:gap-4 ml-6">
                <li>
                  <a href="tel:(506)717-9627" className="nav-button text-sm md:text-base font-medium py-2 px-5 rounded-full inline-block">
                    CALL NOW
                  </a>
                </li>
                <li>
                  <Link href="/booking" className="nav-button text-sm md:text-base font-medium py-2 px-5 rounded-full inline-block">
                    BOOK NOW
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="nav-button text-sm md:text-base font-medium py-2 px-5 rounded-full inline-block">
                    OUR FAMILY
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://hhplaced.replit.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="nav-button text-sm md:text-base font-medium py-2 px-5 rounded-full inline-block"
                  >
                    BLOG
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="flex flex-col items-center">
          {/* Christmas Lights Divider */}
          <div className="lights-container w-full px-4">
            <div className="light-rope"></div>
            <div className="flex justify-around w-full max-w-3xl">
              <div className="light red"></div>
              <div className="light green"></div>
              <div className="light red"></div>
              <div className="light green"></div>
              <div className="light blue"></div>
              <div className="light red"></div>
              <div className="light green"></div>
              <div className="light yellow"></div>
              <div className="light red"></div>
            </div>
          </div>
        </main>

        {/* Mobile menu */}
        <div className="lg:hidden mt-4 fixed top-4 right-4 z-50">
          <button 
            className="nav-button px-3 py-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {mobileMenuOpen && (
            <div className="absolute top-full right-0 mt-2 bg-black/80 backdrop-blur-sm rounded-lg p-4 space-y-2 min-w-48">
              <Link href="/" className="block nav-button text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                HOME
              </Link>
              <Link href="/services" className="block nav-button text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                SERVICES
              </Link>
              <Link href="/gallery" className="block nav-button text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                GALLERY
              </Link>
              <Link href="/testimonials" className="block nav-button text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                REVIEWS
              </Link>
              <Link href="/booking" className="block nav-button text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                BOOK NOW
              </Link>
              <a 
                href="https://hhplaced.replit.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block nav-button text-center py-2"
              >
                BLOG
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}