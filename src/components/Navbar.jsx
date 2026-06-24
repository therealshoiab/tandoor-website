import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Sun, Moon } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const location = useLocation();

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

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
        ? 'bg-app-navbar/95 border-b border-app-border backdrop-blur-md shadow-lg shadow-black/5' 
        : 'bg-app-navbar/30 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Tandoor Logo" className="h-10 w-auto rounded-md object-contain border border-app-border bg-[#0e0d11]/80 p-0.5" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#f2b90f] ${
                isActive(link.path) ? 'text-[#f2b90f]' : 'text-app-text'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Theme"
            className="p-2.5 bg-white/5 hover:bg-white/10 text-[#f2b90f] rounded-full border border-app-border transition-all duration-300 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-gray-700" />}
          </button>
          
          <Link
            to="/reservations"
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#f2b90f] to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-semibold rounded-full shadow-md shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            Reserve Table
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Theme"
            className="p-2 bg-white/5 text-[#f2b90f] rounded-full border border-app-border min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-gray-700" />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="text-app-text hover:text-white focus:outline-none p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-app-navbar border-b border-app-border shadow-2xl py-4 px-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold py-2 transition-colors border-b border-app-border last:border-0 ${
                  isActive(link.path) ? 'text-[#f2b90f]' : 'text-app-text'
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
