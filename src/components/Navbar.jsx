import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'About', path: '/about' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 px-4 md:px-8 py-3 ${
      isScrolled 
        ? 'bg-[#0e0d11]/95 border-b border-white/5 backdrop-blur-md shadow-lg shadow-black/20' 
        : 'bg-[#0e0d11]/30 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Tandoor Logo" className="h-10 w-auto rounded-md object-contain border border-white/5" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#f2b90f] ${
                isActive(link.path) ? 'text-[#f2b90f]' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Book Table Button (Desktop) */}
        <div className="hidden lg:block">
          <Link
            to="/reservations"
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#f2b90f] to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-semibold rounded-full shadow-md shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            Reserve Table
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0e0d11]/98 border-b border-white/5 shadow-2xl py-4 px-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold py-2 transition-colors border-b border-white/5 last:border-0 ${
                  isActive(link.path) ? 'text-[#f2b90f]' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservations"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 mt-2 w-full py-3 bg-gradient-to-r from-[#f2b90f] to-amber-600 text-black font-bold rounded-full shadow-lg shadow-amber-500/20"
            >
              <Calendar className="w-5 h-5" />
              Reserve Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
