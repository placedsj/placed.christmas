# PLACED Transferable Design System

This design system contains all the standardized components, styling, and code needed to maintain consistent branding across all PLACED websites (Christmas lighting, roofing, electrical, handbook, etc.).

## Core Design Principles

- **Dark backgrounds** (navy blue) to eliminate white-on-white visibility issues
- **Vibrant colors**: red, green, blue gradients throughout
- **High contrast bright text** on dark backgrounds
- **ALL CAPS text** for headers, footers, buttons, headings, and subheadings
- **White/black fonts outlined with grey** for maximum visibility
- **Consistent navigation** with dropdown menus
- **24/7 EMERGENCY SERVICES** floating button on every page
- **Stripe payments and financing** mentioned in every footer

## 1. CSS Variables & Base Styling

Copy this CSS to your main stylesheet:

```css
/* PLACED Design System - Core Variables */
:root {
  /* Brand Colors */
  --primary-red: #dc2626;
  --primary-green: #16a34a;
  --primary-blue: #2563eb;
  --accent-yellow: #facc15;
  
  /* Background Colors */
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-card: #334155;
  
  /* Text Colors */
  --text-light: #f1f5f9;
  --text-outlined: #ffffff;
  
  /* Gradient Combinations */
  --gradient-festive: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-green) 50%, var(--primary-blue) 100%);
  --gradient-professional: linear-gradient(135deg, #1e40af 0%, #0891b2 50%, #059669 100%);
}

/* Base Body Styling */
body {
  background: var(--bg-primary);
  color: var(--text-light);
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
}

/* Text Outline Effect for Maximum Visibility */
.text-outlined {
  text-shadow: 
    -1px -1px 0 #666,
    1px -1px 0 #666,
    -1px 1px 0 #666,
    1px 1px 0 #666,
    0 0 3px rgba(0,0,0,0.8);
  font-weight: 700;
}

/* ALL CAPS Styling */
.caps-text {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
}

/* Card Styling */
.card-primary {
  background: var(--bg-card);
  border: 1px solid #475569;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

.card-professional {
  background: linear-gradient(135deg, #1e40af 0%, #0891b2 50%, #059669 100%);
  border: 2px solid #3b82f6;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
}

/* Button Styling */
.btn-primary {
  background: var(--gradient-festive);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 0 3px rgba(0,0,0,0.8);
}

.btn-outline {
  background: transparent;
  color: var(--text-light);
  padding: 1rem 2rem;
  border: 2px solid var(--accent-yellow);
  border-radius: 50px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 0 3px rgba(0,0,0,0.8);
}

.btn-outline:hover {
  background: var(--accent-yellow);
  color: var(--bg-primary);
  text-shadow: none;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(250, 204, 21, 0.3);
}

/* Navigation Styling */
.nav-link {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  text-shadow: 
    -1px -1px 0 #666,
    1px -1px 0 #666,
    -1px 1px 0 #666,
    1px 1px 0 #666;
}

.nav-link:hover {
  color: var(--accent-yellow);
  text-shadow: 0 0 8px rgba(250, 204, 21, 0.6);
}

/* Floating Emergency Button */
.emergency-float {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--gradient-festive);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  z-index: 1000;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
```

## 2. Standard Header Component

```tsx
import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export function StandardHeader({ businessName, logoUrl, primaryColor = "#dc2626" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav-container">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              {logoUrl && (
                <img src={logoUrl} alt="Logo" className="h-12 w-auto" />
              )}
              <div className="text-center">
                <h1 className="text-2xl font-bold text-outlined caps-text">
                  {businessName}
                </h1>
                <p className="text-sm text-yellow-300 caps-text">
                  YOUR HOME OUR HANDS™
                </p>
              </div>
            </Link>

            {/* Desktop Navigation - Dropdown Menus */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Home Dropdown */}
              <div className="relative group">
                <Link href="/" className="nav-link text-outlined flex items-center space-x-1">
                  <span>HOME</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 border border-slate-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-4 space-y-2">
                    <Link href="/" className="block nav-link text-outlined hover:text-yellow-300">LANDING PAGE</Link>
                    <Link href="/booking" className="block nav-link text-outlined hover:text-yellow-300">BOOK NOW</Link>
                    <Link href="/contact" className="block nav-link text-outlined hover:text-yellow-300">CONTACT US</Link>
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <Link href="/services" className="nav-link text-outlined flex items-center space-x-1">
                  <span>SERVICES</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 border border-slate-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-4 space-y-2">
                    <Link href="/services" className="block nav-link text-outlined hover:text-yellow-300">ALL SERVICES</Link>
                    <Link href="/testimonials" className="block nav-link text-outlined hover:text-yellow-300">TESTIMONIALS</Link>
                    <hr className="border-slate-600 my-3" />
                    <a href="https://hhplaced.replit.app" target="_blank" rel="noopener noreferrer" className="block nav-link text-outlined hover:text-yellow-300">HOMEOWNER'S HANDBOOK</a>
                  </div>
                </div>
              </div>

              {/* Ask Your Neighbours Dropdown */}
              <div className="relative group">
                <Link href="/ask-your-neighbours" className="nav-link text-outlined flex items-center space-x-1">
                  <span>ASK YOUR NEIGHBOURS</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 border border-slate-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-4 space-y-2">
                    <Link href="/gallery" className="block nav-link text-outlined hover:text-yellow-300">GALLERY</Link>
                    <Link href="/testimonials" className="block nav-link text-outlined hover:text-yellow-300">CUSTOMER REVIEWS</Link>
                    <Link href="/about" className="block nav-link text-outlined hover:text-yellow-300">ABOUT US</Link>
                    <hr className="border-slate-600 my-3" />
                    <div className="text-yellow-300 font-bold text-sm mb-2">OUR FRIENDS:</div>
                    <a href="https://sherwoodselectrical.replit.app" target="_blank" rel="noopener noreferrer" className="block nav-link text-outlined hover:text-yellow-300 text-sm">SHERWOOD'S ELECTRICAL</a>
                    <a href="https://paulsroofing.replit.app" target="_blank" rel="noopener noreferrer" className="block nav-link text-outlined hover:text-yellow-300 text-sm">PAUL'S ROOFING</a>
                  </div>
                </div>
              </div>

              {/* Contractor Hub Dropdown */}
              <div className="relative group">
                <Link href="/contractor-hub" className="nav-link text-outlined flex items-center space-x-1">
                  <span>CONTRACTOR HUB</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 border border-slate-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-4 space-y-2">
                    <div className="text-yellow-300 font-bold text-sm mb-2">ALL OUR WEBSITES:</div>
                    <a href="https://placedyourhomeourhands.replit.app" target="_blank" rel="noopener noreferrer" className="block nav-link text-outlined hover:text-yellow-300 text-sm">PLACED YOUR HOME OUR HANDS</a>
                    <a href="https://placedchristmas.replit.app" target="_blank" rel="noopener noreferrer" className="block nav-link text-outlined hover:text-yellow-300 text-sm">PLACED SANTA'S HELPERS</a>
                    <a href="https://hhplaced.replit.app" target="_blank" rel="noopener noreferrer" className="block nav-link text-outlined hover:text-yellow-300 text-sm">HOMEOWNER'S HANDBOOK</a>
                    <a href="https://sherwoodselectrical.replit.app" target="_blank" rel="noopener noreferrer" className="block nav-link text-outlined hover:text-yellow-300 text-sm">SHERWOOD'S ELECTRICAL</a>
                    <a href="https://paulsroofing.replit.app" target="_blank" rel="noopener noreferrer" className="block nav-link text-outlined hover:text-yellow-300 text-sm">PAUL'S ROOFING</a>
                    <hr className="border-slate-600 my-3" />
                    <Link href="/admin" className="block nav-link text-outlined hover:text-yellow-300">ADMIN PORTAL</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="p-4 space-y-3">
              <Link href="/booking" className="btn-outline w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Emergency Button */}
      <a 
        href="https://hhplaced.replit.app" 
        target="_blank"
        rel="noopener noreferrer"
        className="emergency-float"
      >
        24/7 EMERGENCY
      </a>
    </>
  );
}
```

## 3. Standard Footer Component

```tsx
export function StandardFooter({ businessName, serviceArea = "Quispamsis and Surrounding Communities" }) {
  return (
    <footer className="footer-container">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-yellow-300 mb-4 caps-text">
              {businessName}
            </h3>
            <p className="text-light caps-text mb-4">
              SERVING {serviceArea.toUpperCase()}
            </p>
            <div className="space-y-2">
              <p className="text-light caps-text">📞 (506) 650-2122</p>
              <p className="text-light caps-text">📞 (506) 717-XMAS (9627)</p>
              <p className="text-light caps-text">✉️ CONTACT@PLACED.LIFE</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-300 mb-4 caps-text">
              QUICK LINKS
            </h4>
            <div className="space-y-2">
              <a href="/services" className="block text-light hover:text-yellow-300 caps-text">
                SERVICES
              </a>
              <a href="/booking" className="block text-light hover:text-yellow-300 caps-text">
                BOOK NOW
              </a>
              <a href="/testimonials" className="block text-light hover:text-yellow-300 caps-text">
                TESTIMONIALS
              </a>
              <a href="/contact" className="block text-light hover:text-yellow-300 caps-text">
                CONTACT
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-300 mb-4 caps-text">
              OUR FRIENDS
            </h4>
            <div className="space-y-2">
              <a 
                href="https://sherwoodselectrical.replit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-light hover:text-yellow-300 caps-text"
              >
                SHERWOOD'S ELECTRICAL
              </a>
              <a 
                href="https://paulsroofing.replit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-light hover:text-yellow-300 caps-text"
              >
                PAUL'S ROOFING
              </a>
              <a 
                href="https://hhplaced.replit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-light hover:text-yellow-300 caps-text"
              >
                HOMEOWNER'S HANDBOOK
              </a>
            </div>
          </div>

          {/* Payment Info */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-300 mb-4 caps-text">
              PAYMENT OPTIONS
            </h4>
            <p className="text-light caps-text mb-4">
              WE ACCEPT ALL MAJOR CREDIT CARDS
            </p>
            <p className="text-light caps-text mb-4">
              STRIPE SECURE PAYMENTS
            </p>
            <p className="text-light caps-text">
              FINANCING AVAILABLE
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-600 mt-8 pt-8 text-center">
          <p className="text-light caps-text">
            BROUGHT TO YOU BY YOUR FRIENDS AT PLACED YOUR HOME OUR HANDS™
          </p>
          <p className="text-sm text-gray-400 mt-2">
            © 2024 PLACED. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

## 4. How to Use This System

### For New Websites:

1. **Copy the CSS variables** to your main stylesheet
2. **Import the header and footer components** 
3. **Customize the business-specific content**:
   - Change `businessName` prop
   - Update service-specific dropdown items
   - Modify contact information
   - Add business-specific colors in CSS variables

### Example Implementation:

```tsx
// For Christmas Lighting Site
<StandardHeader 
  businessName="PLACED SANTA'S HELPERS" 
  logoUrl="/logo-christmas.png"
  primaryColor="#dc2626"
/>

// For Roofing Site
<StandardHeader 
  businessName="PAUL'S ROOFING" 
  logoUrl="/logo-roofing.png"
  primaryColor="#0891b2"
/>

// For Electrical Site
<StandardHeader 
  businessName="SHERWOOD'S ELECTRICAL" 
  logoUrl="/logo-electrical.png"
  primaryColor="#16a34a"
/>
```

## 5. Consistent Form Styling

```css
/* Form Input Styling */
.form-input {
  background: var(--bg-secondary);
  border: 2px solid #475569;
  border-radius: 8px;
  padding: 1rem;
  color: var(--text-light);
  font-weight: 600;
  text-transform: uppercase;
}

.form-input:focus {
  border-color: var(--accent-yellow);
  outline: none;
  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.1);
}

.form-label {
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  color: var(--text-light);
}
```

This complete design system ensures every PLACED website maintains your exact preferred styling and branding!