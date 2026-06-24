import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Compass, Mail } from 'lucide-react';
import RatingBadge from './RatingBadge';
import logo from '../assets/logo.png';

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-app-section border-t border-app-border text-app-muted py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <Link to="/">
            <img src={logo} alt="Tandoor Logo" className="h-10 w-auto object-contain rounded-md bg-[#0c0b0f] p-0.5" />
          </Link>
          <p className="text-sm text-app-muted leading-relaxed">
            Experience the true soul of fine-dining with our authentic clay-oven tandoor recipes, served fresh in the heart of Lal Chowk, Srinagar.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <RatingBadge platform="google" rating={4.6} count="1,350+ reviews" />
            <RatingBadge platform="swiggy" rating={4.6} count="1,000+ ratings" />
          </div>
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://www.instagram.com/tandoor.lalchowk" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Follow Tandoor on Instagram" 
              className="text-white hover:scale-110 transition-transform duration-300 w-9 h-9 rounded-xl flex items-center justify-center shadow-md cursor-pointer"
              style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeB 90%)' }}
            >
              <InstagramIcon />
            </a>
            <a 
              href="https://www.facebook.com/tandoor.lalchowk" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Follow Tandoor on Facebook" 
              className="text-white hover:scale-110 transition-transform duration-300 w-9 h-9 rounded-xl flex items-center justify-center bg-[#1877F2] shadow-md cursor-pointer"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-app-white font-semibold mb-4 tracking-wider uppercase text-xs">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-[#f2b90f] transition-colors">Home</Link></li>
            <li><Link to="/menu" className="hover:text-[#f2b90f] transition-colors">Our Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-[#f2b90f] transition-colors">Vibe Gallery</Link></li>
            <li><Link to="/reservations" className="hover:text-[#f2b90f] transition-colors">Table Booking</Link></li>
            <li><Link to="/about" className="hover:text-[#f2b90f] transition-colors">About Us</Link></li>
            <li><Link to="/offers" className="hover:text-[#f2b90f] transition-colors">Offers & Catering</Link></li>
            <li><Link to="/contact" className="hover:text-[#f2b90f] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div>
          <h3 className="text-app-white font-semibold mb-4 tracking-wider uppercase text-xs">Hours of Operation</h3>
          <ul className="space-y-2.5 text-sm text-app-muted">
            <li className="flex justify-between"><span>Mon - Sun:</span> <span className="text-app-white font-medium">12:00 PM – 10:30 PM</span></li>
            <li className="flex justify-between"><span>Kitchen Closes:</span> <span className="text-app-white">10:15 PM</span></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-app-white font-semibold mb-4 tracking-wider uppercase text-xs">Find Us</h3>
          <div className="flex gap-3 text-sm leading-relaxed">
            <Compass className="w-5 h-5 text-[#f2b90f] shrink-0" />
            <span>Near Old Palladium Cinema, Lal Chowk, Srinagar, J&K, 190001</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-5 h-5 text-[#f2b90f] shrink-0" />
            <a href="tel:+919622894984" className="hover:text-app-white transition-colors">+91 9622894984</a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-5 h-5 text-[#f2b90f] shrink-0" />
            <a href="mailto:info@tandoorsrinagar.com" className="hover:text-app-white transition-colors">info@tandoorsrinagar.com</a>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-app-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-app-muted gap-4">
        <p>© {new Date().getFullYear()} Tandoor Restaurant Srinagar. All rights reserved.</p>
        <p>Crafted for premium culinary experiences.</p>
      </div>
    </footer>
  );
}
