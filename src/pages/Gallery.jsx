import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import chickenTikka from '../assets/chicken_tikka.png';
import roganJosh from '../assets/rogan_josh.png';
import ambiance from '../assets/restaurant_ambiance.png';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const galleryItems = [
    {
      src: chickenTikka,
      title: "Charcoal Grilled Chicken Tikka",
      category: "Food",
      span: "row-span-2 col-span-1"
    },
    {
      src: roganJosh,
      title: "Kashmiri Mutton Rogan Josh",
      category: "Food",
      span: "row-span-1 col-span-1 md:col-span-2"
    },
    {
      src: ambiance,
      title: "Clay Oven Tandoor Open Kitchen",
      category: "Ambiance",
      span: "row-span-2 col-span-1"
    },
    {
      // CSS gradient placeholder for event
      src: "gradient-event",
      title: "Private Sufi Music Night Gathering",
      category: "Events",
      span: "row-span-1 col-span-1",
      gradient: "from-amber-900 to-[#121212]"
    },
    {
      // CSS gradient placeholder for food
      src: "gradient-food",
      title: "Authentic Zafrani Kehwa",
      category: "Food",
      span: "row-span-1 col-span-1",
      gradient: "from-red-950 to-amber-900"
    },
    {
      src: ambiance,
      title: "Cozy Ambient Dinner Seating",
      category: "Ambiance",
      span: "row-span-1 col-span-1"
    }
  ];

  const filteredItems = useMemo(() => {
    if (selectedFilter === 'All') return galleryItems;
    return galleryItems.filter(item => item.category === selectedFilter);
  }, [selectedFilter]);

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIdx(prev => (prev + 1) % filteredItems.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIdx(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 text-gray-200">
      <SEOHead 
        title="Tandoor Srinagar | Gallery" 
        description="View our food and ambiance photo gallery at Tandoor, Lal Chowk, Srinagar. Check out our interior design and signature dishes."
      />

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <span className="text-[#f2b90f] text-xs font-bold tracking-widest uppercase font-mono">Visual Experience</span>
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-white">Vibe & Ambiance</h1>
        <div className="h-0.5 w-16 bg-[#f2b90f] mx-auto mt-2"></div>
        <p className="text-sm text-gray-400 leading-relaxed font-light">
          A glimpse into the warmth of our charcoal clay oven kitchen, cozy seating areas, and signature delicacies in Lal Chowk.
        </p>
      </div>

      {/* Filter Tabs & Action */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12 border-b border-white/5 pb-6">
        {/* Category Tabs */}
        <div className="flex gap-2">
          {['All', 'Food', 'Ambiance', 'Events'].map(filter => (
            <button
              key={filter}
              onClick={() => {
                setSelectedFilter(filter);
                setLightboxIdx(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-[#f2b90f] text-black font-bold'
                  : 'bg-white/5 hover:bg-white/10 text-gray-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Submit Photo Button */}
        <a
          href="https://www.instagram.com/tandoor.lalchowk"
          target="_blank"
          rel="noreferrer"
          aria-label="Submit your photo via Instagram"
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#f2b90f] to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black text-xs font-bold rounded-full transition-all duration-300 shadow-md shadow-amber-500/10"
        >
          <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
          </svg>
          Submit Your Photo
        </a>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
        {filteredItems.map((item, idx) => {
          const isGradient = item.src.startsWith('gradient-');

          return (
            <motion.div
              layout
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setLightboxIdx(idx)}
              className={`relative overflow-hidden rounded-3xl border border-white/5 group cursor-pointer ${item.span}`}
            >
              {isGradient ? (
                <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center p-6 text-center border border-white/5`}>
                  <Camera className="w-8 h-8 text-[#f2b90f]/30 absolute top-6 left-6" />
                  <span className="text-sm font-serif text-gray-300 font-bold">{item.title}</span>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs text-[#f2b90f] font-mono uppercase tracking-widest">{item.category}</span>
                <h3 className="text-base font-bold text-white font-serif mt-1">{item.title}</h3>
              </div>

              {/* Mobile details bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:hidden">
                <span className="text-[10px] text-[#f2b90f] font-mono uppercase">{item.category}</span>
                <h3 className="text-xs font-bold text-white font-serif">{item.title}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
            className="fixed inset-0 bg-[#0e0d11]/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIdx(null)}
              aria-label="Close lightbox"
              className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left navigation */}
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-6 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white cursor-pointer hidden md:block"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Content Card */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full flex flex-col items-center gap-4"
            >
              {filteredItems[lightboxIdx].src.startsWith('gradient-') ? (
                <div className={`w-full max-h-[70vh] aspect-video rounded-3xl bg-gradient-to-br ${filteredItems[lightboxIdx].gradient} flex items-center justify-center p-8 text-center border border-white/5`}>
                  <span className="text-xl font-serif text-white font-bold">{filteredItems[lightboxIdx].title}</span>
                </div>
              ) : (
                <img
                  src={filteredItems[lightboxIdx].src}
                  alt={filteredItems[lightboxIdx].title}
                  className="max-w-full max-h-[70vh] rounded-3xl object-contain shadow-2xl border border-white/5"
                />
              )}
              
              <div className="text-center space-y-1">
                <span className="text-xs text-[#f2b90f] font-mono uppercase tracking-widest">
                  {filteredItems[lightboxIdx].category}
                </span>
                <h3 className="text-lg font-serif text-white font-semibold">
                  {filteredItems[lightboxIdx].title}
                </h3>
              </div>
            </motion.div>

            {/* Right navigation */}
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-6 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white cursor-pointer hidden md:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
