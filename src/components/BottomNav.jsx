import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Utensils, Calendar, Tag, Phone } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Menu', path: '/menu', icon: <Utensils className="w-5 h-5" /> },
    { name: 'Reserve', path: '/reservations', icon: <Calendar className="w-5 h-5" /> },
    { name: 'Offers', path: '/offers', icon: <Tag className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="w-5 h-5" /> }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0e0d11]/90 backdrop-blur-xl border-t border-white/5 shadow-[0_-8px_30px_rgb(0,0,0,0.5)] z-40 px-4 py-2">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.name}
              to={item.path}
              aria-label={`Go to ${item.name}`}
              className="flex flex-col items-center justify-center py-1 flex-1 relative group"
            >
              {/* Active Indicator Ring or Glow */}
              {active && (
                <span className="absolute -top-2 w-8 h-1 bg-gradient-to-r from-[#f2b90f] to-amber-600 rounded-full shadow-[0_0_8px_#f2b90f]"></span>
              )}
              
              <div className={`transition-all duration-300 ${
                active 
                  ? 'text-[#f2b90f] scale-110' 
                  : 'text-gray-400 group-hover:text-gray-200'
              }`}>
                {item.icon}
              </div>
              
              <span className={`text-[10px] mt-1 font-medium transition-all duration-300 ${
                active 
                  ? 'text-[#f2b90f] font-semibold' 
                  : 'text-gray-500 group-hover:text-gray-300'
              }`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
