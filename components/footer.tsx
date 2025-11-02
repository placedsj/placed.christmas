import { Link } from "wouter";
import { Phone, Mail, MapPin, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://i.ibb.co/dwbSrTvX/placedchristmas1logo.png" 
                alt="PLACED Christmas Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="footer-brand heading-section">PLACED SANTA'S HELPERS</h3>
                <p className="text-green-200 font-semibold uppercase">YOUR CHRISTMAS, OUR HANDS</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 uppercase">
              PROFESSIONAL CHRISTMAS LIGHTING SERVICES FOR QUISPAMSIS AND SURROUNDING COMMUNITIES
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-4 w-4 text-yellow-300" />
              <span className="text-gray-300 uppercase">QUISPAMSIS, NEW BRUNSWICK</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-brand mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="footer-link">HOME</Link></li>
              <li><Link href="/services" className="footer-link">SERVICES</Link></li>
              <li><Link href="/ask-your-neighbours" className="footer-link">ASK YOUR NEIGHBOURS</Link></li>
              <li><Link href="/testimonials" className="footer-link">TESTIMONIALS</Link></li>
              <li><Link href="/about" className="footer-link">ABOUT US</Link></li>
              <li>
                <a 
                  href="https://hhplaced.replit.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  BLOG
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-brand mb-4">CONTACT US</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-300" />
                <a href="tel:+15066502122" className="footer-link">(506) 650-2122</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-300" />
                <a href="tel:+15067179627" className="footer-link">(506) 717-XMAS</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-300" />
                <a href="mailto:contact@placed.life" className="footer-link">CONTACT@PLACED.LIFE</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-300" />
                <a href="mailto:yourchristmas@placed.life" className="footer-link">YOURCHRISTMAS@PLACED.LIFE</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-300" />
                <a href="mailto:santashelpers@placed.ca" className="footer-link">SANTASHELPERS@PLACED.CA</a>
              </li>
            </ul>
          </div>

          {/* Payment & Admin */}
          <div>
            <h4 className="footer-brand mb-4">SERVICES</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-300" />
                <span className="footer-required-text">STRIPE PAYMENTS AVAILABLE</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-300" />
                <span className="footer-required-text">FINANCING AVAILABLE</span>
              </li>
              <li>
                <a 
                  href="https://hhplaced.replit.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  24/7 EMERGENCY SERVICES
                </a>
              </li>
              <li>
                <Link href="/contractor-hub" className="footer-link">
                  CONTRACTOR HUB
                </Link>
              </li>
              <li>
                <button className="btn-outline text-sm px-4 py-2">
                  LUNAI
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-copyright">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="footer-required-text text-center md:text-left">
              BROUGHT TO YOU BY YOUR FRIENDS AT PLACED YOUR HOME OUR HANDS™
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 PLACED SANTA'S HELPERS. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;