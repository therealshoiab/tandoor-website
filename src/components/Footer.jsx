import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Compass, Mail } from 'lucide-react';
import RatingBadge from './RatingBadge';
import logo from '../assets/logo.png';

const InstagramIcon = () => (
  <svg className="w-5 h-5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0b0a0e] border-t border-white/5 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <Link to="/">
            <img src={logo} alt="Tandoor Logo" className="h-10 w-auto object-contain rounded-md" />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Experience the true soul of fine-dining with our authentic clay-oven tandoor recipes, served fresh in the heart of Lal Chowk, Srinagar.
          </p>
          <div className="pt-2">
            <RatingBadge platform="google" rating={4.6} count="1,350+ reviews" />
          </div>
          <div className="flex items-center gap-4 text-gray-300 pt-2">
            <a href="https://www.instagram.com/tandoor.lalchowk" target="_blank" rel="noreferrer" aria-label="Follow Tandoor on Instagram" className="hover:text-[#f2b90f] transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/tandoor.lalchowk" target="_blank" rel="noreferrer" aria-label="Follow Tandoor on Facebook" className="hover:text-[#f2b90f] transition-colors">
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-[#f2b90f] transition-colors">Home</Link></li>
            <li><Link to="/menu" className="hover:text-[#f2b90f] transition-colors">Our Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-[#f2b90f] transition-colors">Vibe Gallery</Link></li>
            <li><Link to="/reservations" className="hover:text-[#f2b90f] transition-colors">Table Booking</Link></li>
            <li><Link to="/about" className="hover:text-[#f2b90f] transition-colors">About Us</Link></li>
            <li><Link to="/offers" className="hover:text-[#f2b90f] transition-colors">Offers & catering</Link></li>
            <li><Link to="/contact" className="hover:text-[#f2b90f] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs">Hours of Operation</h3>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li className="flex justify-between"><span>Mon - Sun:</span> <span className="text-gray-300 font-medium">12:00 PM – 10:30 PM</span></li>
            <li className="flex justify-between"><span>Kitchen Closes:</span> <span className="text-gray-300">10:15 PM</span></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs">Find Us</h3>
          <div className="flex gap-3 text-sm leading-relaxed">
            <Compass className="w-5 h-5 text-[#f2b90f] shrink-0" />
            <span>Near Old Palladium Cinema, Lal Chowk, Srinagar, J&K, 190001</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-5 h-5 text-[#f2b90f] shrink-0" />
            <a href="tel:+919622894984" className="hover:text-white transition-colors">+91 9622894984</a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-5 h-5 text-[#f2b90f] shrink-0" />
            <a href="mailto:info@tandoorsrinagar.com" className="hover:text-white transition-colors">info@tandoorsrinagar.com</a>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>© {new Date().getFullYear()} Tandoor Restaurant Srinagar. All rights reserved.</p>
        <p>Crafted for premium culinary experiences.</p>
      </div>
    </footer>
  );
}
