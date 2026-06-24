import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Instagram = () => (
  <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
import SEOHead from '../components/SEOHead';

// Safe image loader component that swaps to Unsplash fallback on error (e.g. expired Instagram tokens)
function SafeImage({ src, fallback, alt, className }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isFallback, setIsFallback] = useState(false);

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (!isFallback) {
          setImgSrc(fallback);
          setIsFallback(true);
        }
      }}
      className={className}
    />
  );
}

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  // Extracted from Tandoor Lal Chowk Instagram Feed
  const galleryItems = [
    {
      src: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.82787-15/602462355_18063439517549794_713364526625917149_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=Mzc5Mzk1MzI1OTc4NjkwMDI2NjE4MDYzNDM5NTExNTQ5Nzk0.3-ccb7-5&ccb=7-5&_nc_sid=58cdad",
      fallback: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=600&auto=format&fit=crop",
      title: "Charcoal Grilled Tandoori Fish Trout Platter",
      category: "Food",
      instagramUrl: "https://www.instagram.com/tandoor.lalchowk/reel/DSm1GN4CJMq/",
      span: "row-span-2 col-span-1"
    },
    {
      src: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.71878-15/562436648_1482836069716093_6335728275997481200_n.jpg?stp=dst-jpegr_e15_tt6&_nc_cat=103&ig_cache_key=MzczOTU5ODgwOTQ1NDQ2MzA3Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad",
      fallback: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop",
      title: "Royal Kashmiri Mutton Pulao Feast",
      category: "Food",
      instagramUrl: "https://www.instagram.com/tandoor.lalchowk/reel/DPluU3QAchl/",
      span: "row-span-1 col-span-1 md:col-span-2"
    },
    {
      src: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.82787-15/653923348_18159004906430246_6945092700790328113_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MjY2MzM1NTY0NzI0NDIxMDQ0MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad",
      fallback: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
      title: "Cozy Wooden Dining Ambiance inside Lal Chowk",
      category: "Ambiance",
      instagramUrl: "https://www.instagram.com/tandoor.lalchowk/p/CT2I9qaBbtH/",
      span: "row-span-2 col-span-1"
    },
    {
      src: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.75761-15/475459277_18030797174549794_2374593825217094060_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzU2Njk0NjA1MDA2NzI1NzM4MDE4MDMwNzk3MTcxNTQ5Nzk0.3-ccb7-5&ccb=7-5&_nc_sid=58cdad",
      fallback: "https://images.unsplash.com/photo-1545242944-e24839a62615?q=80&w=600&auto=format&fit=crop",
      title: "Authentic Mughlai Curry Gravy Preparation",
      category: "Food",
      instagramUrl: "https://www.instagram.com/tandoor.lalchowk/reel/DGAVoi3Pdgk/",
      span: "row-span-1 col-span-1"
    },
    {
      src: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.75761-15/476464512_18029991056549794_3010619316638906560_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzU2MzM5MjM4MjQ3NDcxNDI1MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad",
      fallback: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600&auto=format&fit=crop",
      title: "Chef Special Karachi Chicken Tikka Skewer",
      category: "Food",
      instagramUrl: "https://www.instagram.com/tandoor.lalchowk/reel/DFztn4AvPyL/",
      span: "row-span-1 col-span-1"
    },
    {
      src: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.82787-15/619209085_18032035682572722_8547340339439939865_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MjU0NjQ0MTU0OTY5OTIyMjQ0MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad",
      fallback: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop",
      title: "Kashmiri Zafrani Kehwa Welcoming Drink",
      category: "Food",
      instagramUrl: "https://www.instagram.com/tandoor.lalchowk/p/CNWxxkLHguo/",
      span: "row-span-1 col-span-1"
    },
    {
      src: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.82787-15/625055928_18078129182035522_3252533958195698820_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MzY0NDQ1MzYwMDY1MTY5NTkwNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad",
      fallback: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop",
      title: "Book Launch & Sufi Ghazal Dinner Event",
      category: "Events",
      instagramUrl: "https://www.instagram.com/tandoor.lalchowk/p/DKTsz2bPNcj/",
      span: "row-span-1 col-span-1"
    },
    {
      src: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.82787-15/619838410_17913552585127028_6873500284380496790_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzY0MjU0MjMwNzM4MDM1NzIyMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad",
      fallback: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop",
      title: "Open Clay Oven Tandoor Charcoal Baking",
      category: "Ambiance",
      instagramUrl: "https://www.instagram.com/tandoor.lalchowk/p/DKM6O32vOhk/",
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
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 text-app-text">
      <SEOHead 
        title="Tandoor Srinagar | Gallery" 
        description="View our food and ambiance photo gallery at Tandoor, Lal Chowk, Srinagar. Check out our interior design and signature dishes."
      />

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <span className="text-[#f2b90f] text-xs font-bold tracking-widest uppercase font-mono">Visual Experience</span>
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-app-white">Vibe & Ambiance</h1>
        <div className="h-0.5 w-16 bg-[#f2b90f] mx-auto mt-2"></div>
        <p className="text-sm text-app-muted leading-relaxed font-light">
          Real live posts straight from our official Instagram feed. Experience our charcoal open tandoor kitchen and royal Mughlai fine dining setup.
        </p>
      </div>

      {/* Filter Tabs & Action */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12 border-b border-app-border pb-6">
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
                  : 'bg-white/5 hover:bg-white/10 text-app-muted hover:text-app-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Follow us Button */}
        <a
          href="https://www.instagram.com/tandoor.lalchowk"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow Tandoor on Instagram"
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#f2b90f] to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black text-xs font-bold rounded-full transition-all duration-300 shadow-md shadow-amber-500/10 cursor-pointer"
        >
          <Instagram className="w-4 h-4" />
          Follow @tandoor.lalchowk
        </a>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
        {filteredItems.map((item, idx) => {
          return (
            <motion.div
              layout
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setLightboxIdx(idx)}
              className={`relative overflow-hidden rounded-3xl border border-app-border group cursor-pointer ${item.span}`}
            >
              <SafeImage
                src={item.src}
                fallback={item.fallback}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs text-[#f2b90f] font-mono uppercase tracking-widest">{item.category}</span>
                <h3 className="text-base font-bold text-white font-serif mt-1">{item.title}</h3>
                <span className="text-[10px] text-gray-400 font-sans mt-2 flex items-center gap-1.5 hover:text-[#f2b90f]">
                  <Instagram className="w-3.5 h-3.5" /> View on Instagram
                </span>
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
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
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
              <SafeImage
                src={filteredItems[lightboxIdx].src}
                fallback={filteredItems[lightboxIdx].fallback}
                alt={filteredItems[lightboxIdx].title}
                className="max-w-full max-h-[70vh] rounded-3xl object-contain shadow-2xl border border-white/5"
              />
              
              <div className="text-center space-y-1">
                <span className="text-xs text-[#f2b90f] font-mono uppercase tracking-widest">
                  {filteredItems[lightboxIdx].category}
                </span>
                <h3 className="text-lg font-serif text-white font-semibold">
                  {filteredItems[lightboxIdx].title}
                </h3>
                <a
                  href={filteredItems[lightboxIdx].instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-1.5 bg-white/5 hover:bg-white/10 text-xs font-bold text-[#f2b90f] rounded-full border border-white/5 transition-all"
                >
                  <Instagram className="w-3.5 h-3.5" /> View Post on Instagram
                </a>
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
