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

      {/* Hero Section with Rich Food Photography Backdrop & Dish Showcase */}
      <section className="relative min-h-[92vh] flex items-center px-6 max-w-7xl mx-auto py-16">
        
        {/* Atmospheric Food Hero Background Image with Dark Vignette Gradient */}
        <div className="absolute inset-0 -z-20 overflow-hidden rounded-3xl my-4">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop" 
            alt="Sizzling Charcoal Tandoor Grill Backdrop" 
            className="w-full h-full object-cover opacity-25 scale-105 filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-app-bg via-app-bg/90 to-app-bg/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-app-bg via-transparent to-app-bg/80"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          
          {/* Left Column: Brand & Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="flex flex-wrap items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img src={logo} alt="Tandoor Brand Logo" className="h-14 md:h-16 w-auto object-contain border border-app-border p-2 bg-[#0e0d11]/90 rounded-2xl backdrop-blur-md shadow-xl" />
              </motion.div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-[#f2b90f] font-semibold tracking-widest uppercase text-xs flex items-center gap-2 px-3 py-1.5 bg-[#f2b90f]/10 border border-[#f2b90f]/20 rounded-full font-mono"
              >
                <Flame className="w-4 h-4 fill-[#f2b90f] text-[#f2b90f] animate-pulse" /> Estd. in Srinagar
              </motion.span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight text-app-white font-serif leading-[1.1]"
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
              className="text-app-muted text-base md:text-lg max-w-xl leading-relaxed font-light"
            >
              Indulge in authentic North Indian, Mughlai & Kashmiri fine-dining. Roasted over traditional clay ovens fired with wood charcoal for distinct smoky perfection.
            </motion.p>

            {/* Rating Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-3 pt-2"
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
              className="flex flex-wrap gap-4 pt-4"
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
                className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-app-white font-semibold rounded-full border border-app-border transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md"
              >
                Explore Our Menu
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Interactive Sizzling Dish Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative w-full max-w-md"
            >
              {/* Glowing aura */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-red-600/20 rounded-3xl blur-2xl -z-10 animate-pulse"></div>

              {/* Main Showcase Hero Card */}
              <div className="bg-app-card border border-app-border rounded-3xl p-5 shadow-2xl backdrop-blur-xl space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img 
                    src={chickenTikka} 
                    alt="Special Tandoori Karachi Tikka" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Non-Veg Special
                  </span>

                  <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-[#f2b90f] text-xs font-bold font-mono px-3 py-1 rounded-full border border-[#f2b90f]/30">
                    ₹360
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <h3 className="text-lg font-bold font-serif">Special Tandoori Tikka</h3>
                      <p className="text-[11px] text-gray-300">Roasted in wood charcoal clay tandoor</p>
                    </div>
                    <div className="flex text-[#f2b90f]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-white/5 border border-app-border rounded-xl p-3 flex items-center gap-2.5">
                    <Flame className="w-4 h-4 text-[#f2b90f] shrink-0" />
                    <div className="text-left">
                      <p className="text-[10px] text-app-muted uppercase font-mono font-semibold">Cooking</p>
                      <p className="text-xs font-bold text-app-white">Charcoal Fired</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-app-border rounded-xl p-3 flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#f2b90f] shrink-0" />
                    <div className="text-left">
                      <p className="text-[10px] text-app-muted uppercase font-mono font-semibold">Rating</p>
                      <p className="text-xs font-bold text-app-white">4.9/5 Signature</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-[#111015] border border-[#f2b90f]/30 text-app-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold backdrop-blur-md"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                Fresh Charcoal Baking
              </motion.div>

              {/* Floating Mini Badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-[#111015] border border-app-border text-app-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold backdrop-blur-md"
              >
                <Compass className="w-4 h-4 text-[#f2b90f]" />
                Central Lal Chowk
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center text-gray-500 hidden md:flex"
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

      {/* Clean Custom Instagram Video Reels Showcase (No Cluttered Instagram UI Chrome) */}
      <section className="bg-app-section py-20 px-6 border-t border-app-border transition-colors duration-300">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[#f2b90f] text-xs font-bold tracking-widest uppercase font-mono">Live Reels Feed</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-app-white">Follow Us on Instagram</h2>
            <a href="https://www.instagram.com/tandoor.lalchowk" target="_blank" rel="noreferrer" className="text-xs text-[#f2b90f] font-mono tracking-widest hover:underline inline-block pt-1">
              @tandoor.lalchowk
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Kashmiri Wazwan Feast",
                category: "Wazwan Special",
                image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
                video: "https://player.vimeo.com/external/434045526.sd.mp4?s=c1b3f9ff47372d627c28d71221b65e90d1bf47ff&profile_id=165&oauth2_token_id=57447761",
                link: "https://www.instagram.com/tandoor.lalchowk/reel/CnKHUthIBpt/"
              },
              {
                title: "Warm Rustic Wooden Ambiance",
                category: "Lal Chowk Vibe",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
                video: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0220a208c1d58309ec9b092ff5e28a5&profile_id=139&oauth2_token_id=57447761",
                link: "https://www.instagram.com/tandoor.lalchowk/p/CT2I9qaBbtH/"
              },
              {
                title: "Zafrani Kashmiri Kehwa Ceremony",
                category: "Hot Beverage",
                image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop",
                video: "https://player.vimeo.com/external/538569502.sd.mp4?s=d00cf2b694be812d6a5d4615a1e741e06fa91df1&profile_id=165&oauth2_token_id=57447761",
                link: "https://www.instagram.com/tandoor.lalchowk/p/CNWxxkLHguo/"
              },
              {
                title: "Sizzling Tandoori Fish Trout",
                category: "Clay Oven Roast",
                image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=800&auto=format&fit=crop",
                video: "https://player.vimeo.com/external/435674703.sd.mp4?s=7f26a113a30c5e7b51b72e5c6bb05c7553b6fa0f&profile_id=165&oauth2_token_id=57447761",
                link: "https://www.instagram.com/tandoor.lalchowk/reel/DSm1GN4CJMq/"
              },
              {
                title: "Dining Review by Syed Tauqir",
                category: "Vlogger Experience",
                image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
                video: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0220a208c1d58309ec9b092ff5e28a5&profile_id=139&oauth2_token_id=57447761",
                link: "https://www.instagram.com/syedtauqvlogs/reel/DPluU3QAchl/"
              },
              {
                title: "Fresh Wood-Fired Garlic Naan",
                category: "Tandoor Kitchen",
                image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800&auto=format&fit=crop",
                video: "https://player.vimeo.com/external/434045526.sd.mp4?s=c1b3f9ff47372d627c28d71221b65e90d1bf47ff&profile_id=165&oauth2_token_id=57447761",
                link: "https://www.instagram.com/tandoor.lalchowk/reel/DKfV5sTTNKB/"
              }
            ].map((reel, idx) => (
              <a
                key={idx}
                href={reel.link}
                target="_blank"
                rel="noreferrer"
                className="group relative bg-app-card border border-app-border rounded-3xl overflow-hidden shadow-2xl block aspect-[4/5] hover:border-[#f2b90f]/40 transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Background Video Stream / Photo */}
                <video
                  src={reel.video}
                  poster={reel.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-between">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <span className="bg-[#f2b90f] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full font-mono shadow-md">
                      {reel.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:text-[#f2b90f] transition-colors">
                      ▶
                    </span>
                  </div>

                  {/* Bottom Information */}
                  <div className="space-y-2 text-left">
                    <h3 className="text-lg font-serif font-bold text-white leading-snug group-hover:text-[#f2b90f] transition-colors">
                      {reel.title}
                    </h3>
                    <p className="text-[11px] text-gray-300 font-mono flex items-center gap-1.5">
                      <span>View on Instagram</span> →
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
