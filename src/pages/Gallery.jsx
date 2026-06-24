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

  // Mapped Instagram shortcodes and resolved Google Maps CDN photo URLs
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

  const mapsImages = [
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEHDXJK9EikojpAbneneUtdiHiN_zqn-4fvEbtiza7UbhoX-hQoHye0_mQOjalhZgAph3pNXKA6iwWHKnyFnGTDsFXmewNbZLFS8rV6BwYOTd1VSLwbhyKsJBv9yFKofwOWO53dbm30jOJ0=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEG-MFrAqvGD2MiCIHGuMtBQfOgaLVw-6RhPKfF-97WFqr6iuPXHR7tBgqLBFiKxLRY7gkjiQ_4J1n16438rnmgo6dfUMy_AMz4PzEcO9hgTdyZycnXOIz0ezR4WjuvGUm7ppi_=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF5CQV-DbeiYUU_HE7bm53ifUO7t_Nm7fs1d6r01wZ6aWYzr0b4oVSHXj2lgDOZijD1NTOvObuSGxUd9JRUdnUOBr_b9-NAqTdViBhbIf80X82VH4lCacIxvJx-Dr_jteOG1Tkc_0INc1cB=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHV4q47Wjp6sjjtw8hZfpWYbMXdfzcXm_FiltoTAk9993IuF_EUHzVhbMdthM4tHYfzMAKAByITrxRg9Pyj_hgEbRl8kKzmlc-Cm0RS8pgGFIRoOZzZC10skOB9E37F-HEMSQXVQocB24sw=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH9Drltj9f5PZUMadgr0N3TD4dVokBtptzXVB5gKdo_5NQd8hXDKesgMvKWIg9llYo3XX-aknngRuYnKDYmMNCD56-qe2FstgWUVH3PwuWpYQTt6y0mbWC25K_O35AWF7V1Gpvy5KZwPiI=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFtA9zxCO2vuBQ12u4FlBeoMY4O1-El2BJ0QijYU_bJoO8OUjxy1NH8_NH3Vl-C6fSZBZcEdgjrHrq60OipBsqisPMhnahwmzveTonxFTU8nqxhEH6ActZYaPHo7QKvCOWh1fpm=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFsST9uD-FOoRFDUk-gSh1EupfzC-ATzaMPD_xIl8WWXRB3UJt3b0xJk__rQI18glP7i7Q-b1oBqGnY-ixZIvpt6A_mvMWRXcY8sB8HGdIoq26NxrEm7_FWssZ9iCDVOOWMyGMxgg=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHJik9LEJ1BldvY7A4t2vnc5GwbVsjKlzFzavbwjXMKLKQxXRrd5fyBjT_ZgJMXkTx3TF28-dCF9vMC610Z0hnYYwvzeXjNunii9ObHZp0nHzFWVg7xu7Ddo-qzH_sq47H6c-tF=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGTXxoGZlBJMhBox3IBSE4qsyf6n2_R97piifEuSsduOLf_L6I3xk80_WLeH1EzZSU5hl-TqYmvmOPEGa74GGzyCFFcIdHhm4_dvlpOoH7g-GP46VUZLG17di4eu0arRf3W651Z=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHY3FjWvUSw-QAPOB6VWbEm08jkaye9NLv7Dp6S-UC5OgnttEeE8PPPk6p4Y_Jz_mC5ejsYeZmCcwm5QHq8vgfiWKYb0F8RZ1t-IVMPMyFNM7w5hSOtzDUVes_4KjiKkumTiK22Ux5t7mI=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFJl6yRuoiLo-Z3PDopKZoS2nWKi05zFuWFjiTNA5QDIya04L_9IsDhFwOgEoqobF_bsXvRvDEF2TezuLEWXkeMLzwY2inhyhnHN0lnqfxiodUcAPPkaNdOBbdDpL8eSOXyrZLdVw=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHKHjiArVqezQS7DPiWGrVrPrcqx9mITNKiHs-HOZ4qrAhO3tPO4E33yvD08jBjRUqc_DmablBO-UUluuSRp-o7sSACPtNqEn2fw453rlEUPHmYTWd1AdargVyf0g7eRHHPteeY3zFhPk9F=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF8Q0B_viNfuK5nteRbn4iOKqFDxjLpMqH9fO3esO4XMJTqjBwaoXii7pmsttc5HqSY4e7-f0pMc14XwgWozL60kr9CytO6OhPfdrAycX8I2A_Vay-wOZwrJO9EWvUK2iNZAUAM=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHUnbZ5u2thm6yq4PR2ng7Fe0hW6PGDxo7uEqZrw2kFpVR43e3Z4zWrYcDGqFiGQSsKquXTEjkmig1dyrUQ56mnuaa5WueCIr1-CMCREFoP_8l5OxeKo_6RCWwTL3lT3g8L97c1mp084zfK=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGDiIttp3TZd1xh9JcFZosHa1VkfR2KFpxwWaap6seMTjsF7FU1viQbRbNUB-T-l3dCq-vY6FPiU4tHxYIJGwM7-PuQdNJu9fwirNoMDvVGH-3RKCPRvTbtoLoykdElf0xTwi0R=s1200",
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEiALSBcIBEAghoe79VZwBPq8BwP1fycPCq5aDZ5eIKNYL9b881ze7b_dDKHtKSrf_dN7HqZwlOBs7oLOeD-Hl83Q35ovlimfFfxDlcqNfTzJB4syUuXOVIofoiC24c_ttBUtmS=s1200"
  ];

  const unsplashFallbacks = [
    "https://images.unsplash.com/photo-1545242944-e24839a62615?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=600&auto=format&fit=crop"
  ];

  const galleryItems = instagramPosts.map((post, idx) => {
    const src = mapsImages[idx % mapsImages.length];
    const fallback = unsplashFallbacks[idx % unsplashFallbacks.length];
    
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
