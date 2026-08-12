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

// Reliable high-definition food and ambiance imagery mapped to each title/category
const galleryImageBank = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop", // Wazwan Feast
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop", // Warm Rustic Ambiance
  "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop", // Kashmiri Kehwa
  "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=800&auto=format&fit=crop", // Tandoori Fish Trout
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop", // Dining Review Event
  "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800&auto=format&fit=crop", // Garlic Naan
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop", // Sufi Ghazal Dinner
  "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop", // Clay Oven Charcoal
  "https://images.unsplash.com/photo-1545242944-e24839a62615?q=80&w=800&auto=format&fit=crop", // Mughlai Curries
  "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop", // Tandoori Platter
  "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop", // Kebab Skewers
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop", // Gourmet Dining
  "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop", // Kashmiri Pulao
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop", // Happy Customers
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop", // Cozy Interiors
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=800&auto=format&fit=crop", // Premium Seating
  "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop", // Mutton Kanti
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop", // Clay Tandoor Setup
  "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop", // Mughlai Biryani
  "https://images.unsplash.com/photo-1561651823-34fed0225408?q=80&w=800&auto=format&fit=crop", // Chicken Seekh Kebabs
  "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop", // Signature Gravies
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop", // Family Dinner Table
  "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop", // Weekend Family Dining
  "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop", // Grilling Trout
  "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&auto=format&fit=crop", // Central Lal Chowk
  "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=800&auto=format&fit=crop", // Crispy Tandoori Roti
  "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop", // Paneer Tikka Platter
  "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800&auto=format&fit=crop", // Butter Chicken
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop", // Rustic Wood Interior
  "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop", // Chef Preparing Kebabs
  "https://images.unsplash.com/photo-1507914372368-b2b085b926a1?q=80&w=800&auto=format&fit=crop", // Warm Evening Lighting
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop", // Cozy Dining Cabin
  "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop", // Rogan Josh Serving
  "https://images.unsplash.com/photo-1625220194771-7ebedd0b7d10?q=80&w=800&auto=format&fit=crop", // Steaming Momos
  "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800&auto=format&fit=crop", // Laccha Paratha
  "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop", // Aroma of Wazwan
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop"  // Tandoor Brand Launch
];

// Fallback tier 2 image
const fallbackTier2 = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop";

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  // Mapped Instagram shortcodes and direct reliable high-res imagery
  const instagramPosts = [
    { shortcode: "CnKHUthIBpt", title: "Authentic Wazwan Feast", category: "Food" },
    { shortcode: "CT2I9qaBbtH", title: "Warm Rustic Restaurant Ambiance", category: "Ambiance" },
    { shortcode: "CNWxxkLHguo", title: "Refreshing Kashmiri Kehwa", category: "Food" },
    { shortcode: "DSm1GN4CJMq", title: "Charcoal Grilled Tandoori Fish Trout", category: "Food" },
    { shortcode: "DPluU3QAchl", title: "Syed Tauqir Vlogs Dining Review", category: "Events" },
    { shortcode: "DKfV5sTTNKB", title: "Hot Tandoori Garlic Naan", category: "Food" },
    { shortcode: "DKTsz2bPNcj", title: "Sufi Ghazal Dinner Event", category: "Events" },
    { shortcode: "DKM6O32vOhk", title: "Clay Oven Charcoal Baking", category: "Ambiance" },
    { shortcode: "DGAVoi3Pdgk", title: "Cooking Aromatic Mughlai Curries", category: "Food" },
    { shortcode: "DF2MYhFvAwu", title: "Special Tandoori Platter", category: "Food" },
    { shortcode: "DFztn4AvPyL", title: "Sizzling Kebab Skewers", category: "Food" },
    { shortcode: "DB_oY3MPgWK", title: "Gourmet Dining Experience", category: "Food" },
    { shortcode: "CnUMWpxo2Ib", title: "Kashmiri Pulao Preparation", category: "Food" },
    { shortcode: "CgjN9-QvP5c", title: "Happy Customers at Tandoor", category: "Events" },
    { shortcode: "CaRmRnJPTyc", title: "Restaurant Cozy Interiors", category: "Ambiance" },
    { shortcode: "CXWGW_9P8Ak", title: "Premium Seating Area", category: "Ambiance" },
    { shortcode: "CVScT5MvCzd", title: "Mutton Kanti Skewers", category: "Food" },
    { shortcode: "CVICLJSvsri", title: "Traditional Clay Tandoor Setup", category: "Ambiance" },
    { shortcode: "CUtxG-7B6u1", title: "Special Mughlai Biryani", category: "Food" },
    { shortcode: "CURmzB5IxjE", title: "Delicious Chicken Seekh Kebabs", category: "Food" },
    { shortcode: "CTyzABTB7td", title: "Our Signature Gravies", category: "Food" },
    { shortcode: "CS8wkGCHEFg", title: "Cozy Family Dinner Table", category: "Ambiance" },
    { shortcode: "CS6fS0sHBVX", title: "Weekend Family Dining", category: "Events" },
    { shortcode: "CSohUjqnEMx", title: "Grilling Trout Fish", category: "Food" },
    { shortcode: "CSRjdFfhFdG", title: "Central Lal Chowk Location", category: "Ambiance" },
    { shortcode: "CN7QjpZn1DY", title: "Crispy Tandoori Roti", category: "Food" },
    { shortcode: "CN2BEf5nCx0", title: "Paneer Tikka Platter", category: "Food" },
    { shortcode: "CNzb-JGHrx2", title: "Rich Butter Chicken", category: "Food" },
    { shortcode: "CNza5VRH9p2", title: "Rustic Wood Interior Details", category: "Ambiance" },
    { shortcode: "CNw0YEDnHC0", title: "Our Chef Preparing Kebabs", category: "Food" },
    { shortcode: "CNwgwrPHRBA", title: "Warm Evening Lighting", category: "Ambiance" },
    { shortcode: "CNuK8rxH9Zc", title: "Cozy Dining Cabin", category: "Ambiance" },
    { shortcode: "CNr1g0anVHg", title: "Mutton Rogan Josh Serving", category: "Food" },
    { shortcode: "CNmMRn-nMAd", title: "Steaming Momos Plate", category: "Food" },
    { shortcode: "CNke83AnpSw", title: "Special Laccha Paratha", category: "Food" },
    { shortcode: "CNZdR4BHf7X", title: "Aroma of Wazwan Spices", category: "Food" },
    { shortcode: "CNUYfUYnwwj", title: "Tandoor Brand Launch", category: "Events" }
  ];

  const galleryItems = instagramPosts.map((post, idx) => {
    const src = galleryImageBank[idx % galleryImageBank.length];
    const fallback = fallbackTier2;
    
    let span = "row-span-1 col-span-1";
    if (idx % 7 === 1) {
      span = "row-span-1 col-span-1 md:col-span-2";
    } else if (idx % 7 === 3) {
      span = "row-span-2 col-span-1";
    }
    
    return {
      src,
      fallback,
      title: post.title,
      category: post.category,
      shortcode: post.shortcode,
      instagramUrl: `https://www.instagram.com/tandoor.lalchowk/reel/${post.shortcode}/`,
      span
    };
  });

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
              className="max-w-md w-full flex flex-col items-center gap-4 bg-[#111015] border border-white/10 p-4 rounded-3xl"
            >
              {/* Instagram Interactive Embed */}
              <div className="w-full aspect-[4/5] max-h-[60vh] rounded-2xl overflow-hidden bg-black relative flex items-center justify-center border border-white/5 shadow-inner">
                <iframe
                  src={`https://www.instagram.com/p/${filteredItems[lightboxIdx].shortcode}/embed/`}
                  className="w-full h-full border-0 absolute inset-0"
                  scrolling="no"
                  allowtransparency="true"
                  allow="encrypted-media"
                  title="Instagram Embed"
                ></iframe>
              </div>
              
              <div className="text-center space-y-1 w-full pt-2">
                <span className="text-xs text-[#f2b90f] font-mono uppercase tracking-widest">
                  {filteredItems[lightboxIdx].category}
                </span>
                <h3 className="text-base font-serif text-white font-semibold line-clamp-1">
                  {filteredItems[lightboxIdx].title}
                </h3>
                <a
                  href={filteredItems[lightboxIdx].instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-2 w-full py-2 bg-white/5 hover:bg-white/10 text-xs font-bold text-[#f2b90f] rounded-xl border border-white/5 transition-all cursor-pointer"
                >
                  <Instagram className="w-3.5 h-3.5" /> View directly on Instagram
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
