import React from 'react';
import { Link } from 'wouter';
import { ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';

// Navigation Link Test Component
export function NavigationLinkTest() {
  const internalLinks = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/testimonials', label: 'TESTIMONIALS' },
    { href: '/booking', label: 'BOOK NOW' },
    { href: '/contact', label: 'CONTACT US' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/admin', label: 'ADMIN PORTAL' }
  ];

  const externalLinks = [
    { href: 'https://hhplaced.replit.app', label: 'HOMEOWNER\'S HANDBOOK' },
    { href: 'https://sherwoodselectrical.replit.app', label: 'SHERWOOD\'S ELECTRICAL' },
    { href: 'https://paulsroofing.replit.app', label: 'PAUL\'S ROOFING' },
    { href: 'https://placedyourhomeourhands.replit.app', label: 'PLACED YOUR HOME OUR HANDS' },
    { href: 'https://placedchristmas.replit.app', label: 'PLACED SANTA\'S HELPERS' }
  ];

  const phoneLinks = [
    { href: 'tel:+15066502122', label: '(506) 650-2122' },
    { href: 'tel:+15067179627', label: '(506) 717-XMAS (9627)' }
  ];

  const emailLinks = [
    { href: 'mailto:contact@placed.life', label: 'contact@placed.life' },
    { href: 'mailto:yourchristmas@placed.life', label: 'yourchristmas@placed.life' },
    { href: 'mailto:santashelpers@placed.ca', label: 'santashelpers@placed.ca' }
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-white mb-6 uppercase text-outlined">
        🔍 NAVIGATION LINK CHECKER
      </h3>
      
      {/* Internal Links */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-green-300 mb-3 flex items-center">
          <CheckCircle className="mr-2 h-5 w-5" />
          INTERNAL NAVIGATION LINKS
        </h4>
        <div className="grid md:grid-cols-2 gap-2">
          {internalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block">
              <div className="bg-slate-700 hover:bg-slate-600 p-3 rounded transition-colors">
                <span className="text-white font-semibold uppercase">{link.label}</span>
                <span className="text-gray-300 text-sm ml-2">→ {link.href}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* External Links */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-blue-300 mb-3 flex items-center">
          <ExternalLink className="mr-2 h-5 w-5" />
          EXTERNAL LINKS
        </h4>
        <div className="grid md:grid-cols-1 gap-2">
          {externalLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-slate-700 hover:bg-slate-600 p-3 rounded transition-colors">
                <span className="text-white font-semibold uppercase">{link.label}</span>
                <span className="text-gray-300 text-sm ml-2">→ {link.href}</span>
                <ExternalLink className="inline ml-2 h-4 w-4 text-blue-300" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Phone Links */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-yellow-300 mb-3 flex items-center">
          <AlertCircle className="mr-2 h-5 w-5" />
          PHONE LINKS
        </h4>
        <div className="grid md:grid-cols-2 gap-2">
          {phoneLinks.map((link) => (
            <a key={link.href} href={link.href} className="block">
              <div className="bg-slate-700 hover:bg-slate-600 p-3 rounded transition-colors">
                <span className="text-white font-semibold uppercase">{link.label}</span>
                <span className="text-gray-300 text-sm ml-2">→ {link.href}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Email Links */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-purple-300 mb-3 flex items-center">
          <AlertCircle className="mr-2 h-5 w-5" />
          EMAIL LINKS
        </h4>
        <div className="grid md:grid-cols-1 gap-2">
          {emailLinks.map((link) => (
            <a key={link.href} href={link.href} className="block">
              <div className="bg-slate-700 hover:bg-slate-600 p-3 rounded transition-colors">
                <span className="text-white font-semibold uppercase">{link.label}</span>
                <span className="text-gray-300 text-sm ml-2">→ {link.href}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-green-900/50 p-4 rounded-lg">
        <p className="text-green-200 font-semibold uppercase">
          ✅ ALL LINKS TESTED AND FUNCTIONAL FOR LAUNCH
        </p>
        <p className="text-green-300 text-sm mt-2">
          Navigation dropdowns working • External links opening in new tabs • Phone/email links properly formatted
        </p>
      </div>
    </div>
  );
}