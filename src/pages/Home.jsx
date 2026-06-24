import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, Flame, Compass, Phone, Star, ShoppingBag, Clock, Award, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import RatingBadge from '../components/RatingBadge';
import logo from '../assets/logo.png';
import chickenTikka from '../assets/chicken_tikka.png';
import roganJosh from '../assets/rogan_josh.png';
import ambiance from '../assets/restaurant_ambiance.png';

export default function Home() {
  const featured = [
    {
      name: "Mutton Rogan Josh",
      price: "390",
      image: roganJosh,
      dietary: "Non-Veg",
      desc: "Classic Kashmiri mutton curry cooked with aromatic spices, fennel, and naturally colored with ratanjot."
    },
    {
      name: "Special Tandoori Karachi Tikka",
      price: "360",
      image: chickenTikka,
      dietary: "Non-Veg",
      desc: "Mouthwatering cheese-loaded tikka finished in a pan with butter and three types of cheese."
    },
    {
      name: "Kashmiri Mutton Pulao",
      price: "460",
      image: roganJosh,
      dietary: "Non-Veg",
      desc: "Saffron-infused rice loaded with dry fruits, nuts, and tender mutton cooked in pure ghee."
    }
  ];

  const reviewQuotes = [
    { text: "They serve amazing quality food at low price. The wide range of veg and non-veg options has something for everyone.", author: "Arshid A." },
    { text: "Great place, awesome food. Kashmiri Pulao and Mughlai Chicken was authentic and too much for our taste buds.", author: "Pooja K." },
    { text: "It was an awesome experience here. The food was really nice including the nature of the staff.", author: "Sameer W." },
    { text: "Great place to have a delicious Wazwan and North Indian food. Located in center of happenings, ideal for family.", author: "Tariq M." },
    { text: "Fantastic place, nice ambience, plenty of seating. The service is equally good, highly recommended.", author: "Rahul S." },
    { text: "Excellent veg selection too. We tried the paneer tikka masala, tawa veg, tadka daal, and laccha parantha.", author: "Vikram N." }
  ];

  const instagramVideos = [
    {
      url: "https://www.instagram.com/tandoor.lalchowk/reel/DSm1GN4CJMq/",
      videoSrc: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0220a208c1d58309ec9b092ff5e28a5&profile_id=139&oauth2_token_id=57447761",
      poster: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.82787-15/602462355_18063439517549794_713364526625917149_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=Mzc5Mzk1MzI1OTc4NjkwMDI2NjE4MDYzNDM5NTExNTQ5Nzk0.3-ccb7-5&ccb=7-5&_nc_sid=58cdad"
    },
    {
      url: "https://www.instagram.com/tandoor.lalchowk/reel/DPluU3QAchl/",
      videoSrc: "https://player.vimeo.com/external/434045526.sd.mp4?s=c1b3f9ff47372d627c28d71221b65e90d1bf47ff&profile_id=165&oauth2_token_id=57447761",
      poster: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.71878-15/562436648_1482836069716093_6335728275997481200_n.jpg?stp=dst-jpegr_e15_tt6&_nc_cat=103&ig_cache_key=MzczOTU5ODgwOTQ1NDQ2MzA3Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad"
    },
    {
      url: "https://www.instagram.com/tandoor.lalchowk/reel/DKfV5sTTNKB/",
      videoSrc: "https://player.vimeo.com/external/538569502.sd.mp4?s=d00cf2b694be812d6a5d4615a1e741e06fa91df1&profile_id=165&oauth2_token_id=57447761",
      poster: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.71878-15/503979336_24003530139281868_4966200284949950296_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzY0NzczMDU0Njc0ODc0MDIyNTczNzMzNjg5MjMxMDU4Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad"
    },
    {
      url: "https://www.instagram.com/tandoor.lalchowk/reel/DGAVoi3Pdgk/",
      videoSrc: "https://player.vimeo.com/external/435674703.sd.mp4?s=7f26a113a30c5e7b51b72e5c6bb05c7553b6fa0f&profile_id=165&oauth2_token_id=57447761",
      poster: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.75761-15/475459277_18030797174549794_2374593825217094060_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzU2Njk0NjA1MDA2NzI1NzM4MDE4MDMwNzk3MTcxNTQ5Nzk0.3-ccb7-5&ccb=7-5&_nc_sid=58cdad"
    },
    {
      url: "https://www.instagram.com/tandoor.lalchowk/reel/DFztn4AvPyL/",
      videoSrc: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0220a208c1d58309ec9b092ff5e28a5&profile_id=139&oauth2_token_id=57447761",
      poster: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.75761-15/476464512_18029991056549794_3010619316638906560_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzU2MzM5MjM4MjQ3NDcxNDI1MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad"
    },
    {
      url: "https://www.instagram.com/tandoor.lalchowk/reel/CnKHUthIBpt/",
      videoSrc: "https://player.vimeo.com/external/434045526.sd.mp4?s=c1b3f9ff47372d627c28d71221b65e90d1bf47ff&profile_id=165&oauth2_token_id=57447761",
      poster: "https://instagram.fixj2-1.fna.fbcdn.net/v/t51.71878-15/497076784_1770424023510246_2132457448986677592_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=MzAxMTI1MTUxMDQzOTg0NDQ2MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad"
    }
  ];

  const handleOrderWhatsApp = (dishName) => {
    const text = encodeURIComponent(`Hello Tandoor! I would like to order: ${dishName}`);
    window.open(`https://wa.me/917780938743?text=${text}`, '_blank');
  };

  return (
    <div className="relative text-app-text overflow-hidden font-sans">
      <SEOHead 
        title="Tandoor Srinagar | Home" 
        description="Experience premium Mughlai & North Indian cuisines at Tandoor, Srinagar in Lal Chowk. Order online on Zomato & Swiggy or Reserve a table today!"
      />

      {/* Background Gradient Orbs */}
      <div className="absolute top-24 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#4a0404]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 text-center max-w-6xl mx-auto py-16">
        <div className="space-y-8 max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img src={logo} alt="Tandoor Brand Logo" className="h-16 md:h-20 w-auto object-contain border border-app-border p-2 bg-[#0e0d11]/80 rounded-2xl" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#f2b90f] font-semibold tracking-widest uppercase text-xs flex items-center justify-center gap-2"
          >
            <Flame className="w-4 h-4 fill-[#f2b90f] text-[#f2b90f]" /> Estd. in Srinagar
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold tracking-tight text-app-white font-serif leading-tight"
          >
            Where Tradition Meets <br />
            <span className="bg-gradient-to-r from-[#f2b90f] via-amber-500 to-red-600 bg-clip-text text-transparent">
              Modern Gastronomy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-app-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light"
          >
            Indulge in authentic North Indian, Mughlai & Kashmiri fine-dining. Roasted over traditional clay ovens fired with wood charcoal for distinct smoky perfection.
          </motion.p>

          {/* Rating Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-4 pt-2"
          >
            <RatingBadge platform="google" rating="4.6" count="1,350+ reviews" />
            <RatingBadge platform="zomato" rating="4.2" count="5,800+ ratings" />
            <RatingBadge platform="swiggy" rating="4.6" count="1,000+ ratings" />
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link
              to="/reservations"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f2b90f] to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-bold rounded-full shadow-lg shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Reserve a Table
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/menu"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-app-white font-semibold rounded-full border border-app-border transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Our Menu
            </Link>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 flex justify-center text-gray-500"
        >
          <ArrowDown className="w-5 h-5 text-[#f2b90f]" />
        </motion.div>
      </section>

      {/* QuickInfo Strip */}
      <section className="bg-app-section border-y border-app-border py-8 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-app-border">
          <div className="py-4 md:py-0 space-y-1.5">
            <Clock className="w-5 h-5 text-[#f2b90f] mx-auto" />
            <p className="text-app-white font-bold text-sm tracking-wider uppercase font-sans">Opening Hours</p>
            <p className="text-xs text-app-muted font-light">Mon - Sun: 12:00 PM – 10:30 PM</p>
          </div>
          <div className="py-4 md:py-0 space-y-1.5 col-span-1">
            <Compass className="w-5 h-5 text-[#f2b90f] mx-auto" />
            <p className="text-app-white font-bold text-sm tracking-wider uppercase font-sans">Location</p>
            <p className="text-xs text-app-muted font-light">Near Old Palladium Cinema, Lal Chowk</p>
          </div>
          <div className="py-4 md:py-0 space-y-1.5">
            <Phone className="w-5 h-5 text-[#f2b90f] mx-auto" />
            <p className="text-app-white font-bold text-sm tracking-wider uppercase font-sans">Direct Hotline</p>
            <a href="tel:+919622894984" className="block text-xs text-app-muted hover:text-app-white transition-colors">+91 96228 94984</a>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-lg mx-auto space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-app-white">Chef's Signature</h2>
          <div className="h-0.5 w-16 bg-[#f2b90f] mx-auto"></div>
          <p className="text-sm text-app-muted font-light">Our hand-curated selections cooked in wood charcoal tandoors.</p>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-6 scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent">
          {featured.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[280px] md:min-w-0 bg-app-card border border-app-border p-6 rounded-3xl flex flex-col justify-between hover:border-[#f2b90f]/20 hover:bg-app-card-hover transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
                  <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-red-600/90 text-white font-semibold text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {item.dietary}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold text-app-white font-serif">{item.name}</h3>
                  <span className="text-base font-bold text-[#f2b90f] font-mono">₹{item.price}</span>
                </div>
                <p className="text-xs text-app-muted font-light leading-relaxed">{item.desc}</p>
              </div>
              <button
                onClick={() => handleOrderWhatsApp(item.name)}
                className="mt-6 w-full py-3 bg-white/5 hover:bg-[#f2b90f] text-app-text hover:text-black border border-app-border hover:border-[#f2b90f] text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                Order on WhatsApp
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-app-section py-20 px-6 border-y border-app-border transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-xs text-[#f2b90f] font-bold uppercase tracking-widest font-mono">Our Heritage</span>
            <h2 className="text-4xl font-bold font-serif text-app-white leading-tight">Authentic Charcoal Clay Ovens</h2>
            <p className="text-app-muted font-light leading-relaxed">
              Located near the historic Palladium Cinema in Lal Chowk, Tandoor brings the rich legacies of Mughlai and North Indian cuisines straight to Srinagar. Our dining philosophy focuses on heavy wood charcoal firing and authentic regional spice balances.
            </p>
            <p className="text-sm text-app-muted font-light leading-relaxed">
              Enjoy an outstanding family meal inside our comfortable casual dining area, or order directly to your hotel or home for authentic packaging that locks in the hot clay-oven smoky freshness.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-xs text-[#f2b90f] font-bold hover:underline">
              Read Our Full Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-app-card border border-app-border space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-app-white font-bold text-xs uppercase tracking-wider font-mono">Average Cost</h3>
              <p className="text-2xl font-bold text-[#f2b90f] font-serif">₹1,050 <span className="text-xs text-app-muted italic">for two people</span></p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-app-white font-bold text-xs uppercase tracking-wider font-mono">Cuisines</h3>
              <div className="flex flex-wrap gap-2">
                {["Mughlai", "North Indian", "Biryani", "Chinese", "Kashmiri Pulao"].map(c => (
                  <span key={c} className="text-[10px] bg-white/5 text-app-text px-3 py-1 rounded-full border border-app-border">{c}</span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-app-white font-bold text-xs uppercase tracking-wider font-mono">Dining Amenities</h3>
              <div className="grid grid-cols-2 gap-3 text-xs text-app-muted font-light">
                <div>✓ Air Conditioning (AC)</div>
                <div>✓ Takeaway & Delivery</div>
                <div>✓ Premium Seating</div>
                <div>✓ Digital Payments</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Auto-scrolling Reviews Strip */}
      <section className="py-16 bg-app-section overflow-hidden border-b border-app-border transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-app-white">What Our Guests Say</h2>
        </div>
        
        {/* Infinite scroll track - animated marquee */}
        <div className="flex gap-6 w-[200%] animate-marquee">
          <div className="flex gap-6 justify-around w-full">
            {reviewQuotes.map((r, idx) => (
              <div key={idx} className="w-[300px] shrink-0 bg-app-card border border-app-border p-6 rounded-2xl space-y-3 text-left">
                <div className="flex text-[#f2b90f]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-[#f2b90f]" />)}
                </div>
                <p className="text-xs text-app-text font-light leading-relaxed italic">"{r.text}"</p>
                <p className="text-[10px] text-app-muted font-bold uppercase tracking-wider">- {r.author}</p>
              </div>
            ))}
          </div>
          {/* Duplicate track for seamless infinite scroll */}
          <div className="flex gap-6 justify-around w-full">
            {reviewQuotes.map((r, idx) => (
              <div key={`dup-${idx}`} className="w-[300px] shrink-0 bg-app-card border border-app-border p-6 rounded-2xl space-y-3 text-left">
                <div className="flex text-[#f2b90f]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-[#f2b90f]" />)}
                </div>
                <p className="text-xs text-app-text font-light leading-relaxed italic">"{r.text}"</p>
                <p className="text-[10px] text-app-muted font-bold uppercase tracking-wider">- {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Online platforms */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-lg mx-auto space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-app-white">Order Online</h2>
          <div className="h-0.5 w-16 bg-[#f2b90f] mx-auto"></div>
          <p className="text-sm text-app-muted font-light">Get tandoor freshness delivered straight to your location.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Zomato */}
          <div className="bg-app-card border border-app-border p-8 rounded-3xl text-center space-y-4 hover:border-red-500/20 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-app-white font-serif">Zomato</h3>
              <p className="text-xs text-app-muted font-light">Enjoy our high-rated delivery experience on Zomato platform.</p>
            </div>
            <a
              href="https://www.zomato.com/srinagar/tandoor-lal-chowk/order"
              target="_blank"
              rel="noreferrer"
              className="block w-full py-3 bg-[#cb202d] hover:scale-[1.02] text-white font-bold rounded-xl text-xs transition-all shadow-md"
            >
              Order on Zomato
            </a>
          </div>

          {/* Swiggy */}
          <div className="bg-app-card border border-app-border p-8 rounded-3xl text-center space-y-4 hover:border-orange-500/20 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-app-white font-serif">Swiggy</h3>
              <p className="text-xs text-app-muted font-light">Quick delivery slots and special Swiggy user ratings (4.6★).</p>
            </div>
            <a
              href="https://www.swiggy.com/city/srinagar/tandoor-lal-chowk-rest689874"
              target="_blank"
              rel="noreferrer"
              className="block w-full py-3 bg-[#fc8019] hover:scale-[1.02] text-white font-bold rounded-xl text-xs transition-all shadow-md"
            >
              Order on Swiggy
            </a>
          </div>

          {/* WhatsApp Direct */}
          <div className="bg-app-card border border-app-border p-8 rounded-3xl text-center space-y-4 hover:border-green-500/20 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-app-white font-serif">WhatsApp</h3>
              <p className="text-xs text-app-muted font-light">Order directly with our staff. Perfect for customized bulk/catering orders.</p>
            </div>
            <button
              onClick={() => handleOrderWhatsApp('Custom Order')}
              className="block w-full py-3 bg-[#25D366] hover:scale-[1.02] text-white font-bold rounded-xl text-xs transition-all shadow-md cursor-pointer border-0"
            >
              WhatsApp Direct Order
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Videos Reel Strip */}
      <section className="bg-app-section py-20 px-6 border-t border-app-border transition-colors duration-300">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold font-serif text-app-white">Follow Us on Instagram</h2>
            <a href="https://www.instagram.com/tandoor.lalchowk" target="_blank" rel="noreferrer" className="text-xs text-[#f2b90f] font-mono tracking-widest hover:underline block">
              @tandoor.lalchowk
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {instagramVideos.map((v, idx) => (
              <a
                href={v.url}
                target="_blank"
                rel="noreferrer"
                key={idx}
                aria-label={`View Instagram Reel ${idx + 1}`}
                className="relative h-44 rounded-2xl overflow-hidden border border-app-border group block bg-[#0c0b0f]"
              >
                <video
                  src={v.videoSrc}
                  poster={v.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold text-[#f2b90f] gap-1">
                  <span>Play Reel</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
