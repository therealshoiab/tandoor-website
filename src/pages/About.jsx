import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, Heart, Compass, ShieldCheck, Flame, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ambiance from '../assets/restaurant_ambiance.png';

export default function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-[#f2b90f]" />,
      title: "Generational Quality",
      desc: "Our recipes use secret spices passed down through generations, prepared with utmost care and absolute freshness."
    },
    {
      icon: <Flame className="w-8 h-8 text-[#f2b90f]" />,
      title: "Charcoal Oven Fire",
      desc: "We stay true to the tandoor tradition by roasting at 900°F with local sustainable wood charcoal for signature smokiness."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#f2b90f]" />,
      title: "Kashmiri Hospitality",
      desc: "Dine with us and experience standard Kashmiri warmth, care, and family-focused seating comfort."
    }
  ];

  return (
    <div className="relative text-gray-200 overflow-hidden font-sans">
      <SEOHead 
        title="Tandoor Srinagar | About Us" 
        description="Learn about the legacy, dining philosophy, and authentic clay oven grilling traditions of Tandoor, Lal Chowk, Srinagar."
      />

      {/* Hero Banner */}
      <section className="relative px-6 py-20 bg-gradient-to-b from-[#0b0a0e]/40 to-[#0e0d11] border-b border-white/5 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[#f2b90f] text-xs font-bold tracking-widest uppercase font-mono">Our Narrative</span>
          <h1 className="text-4xl md:text-7xl font-bold font-serif text-white">The Legacy of Tandoor</h1>
          <div className="h-0.5 w-16 bg-[#f2b90f] mx-auto mt-2"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">Crafting Smoky Delicacies in Lal Chowk</h2>
          <p className="text-gray-400 font-light leading-relaxed">
            Established in Srinagar near the historic Palladium Cinema, Tandoor was created to fill a specific gap: providing true, authentic Mughlai curries and wood-charcoal roasted tandoori starters with outstanding dining and delivery convenience.
          </p>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Our chefs blend traditional spices (like Kashmiri saffron, cockscomb ratanjot, dried ginger, and fennel seeds) to perfect recipes like our flagship Mutton Rogan Josh and Special Tandoori Karachi Tikka. Everything is roasted to order inside clay pots to lock in the flavor.
          </p>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Whether you dine in with family or order delivery to your home, we bring a royal feast experience straight to your plate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[350px] rounded-3xl overflow-hidden border border-white/5"
        >
          <img src={ambiance} alt="Tandoor clay oven kitchen" loading="lazy" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Values Strip */}
      <section className="bg-[#0b0a0e]/60 py-20 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-lg mx-auto space-y-2">
            <h2 className="text-3xl font-bold font-serif text-white">Our Core Values</h2>
            <p className="text-xs text-[#f2b90f] uppercase tracking-widest font-mono">Dine with trust</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-[#111015]/60 border border-white/5 space-y-4"
              >
                <div className="p-3 bg-white/5 rounded-full w-fit">{item.icon}</div>
                <h3 className="text-lg font-bold text-white font-serif">{item.title}</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Team Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold font-serif text-white">The Culinary Masters</h2>
          <p className="text-xs text-gray-500 uppercase">Expert Tandoor Roasters</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { role: "Executive Head Chef", name: "Chef Abdul Rahman" },
            { role: "Master Tandoor Roaster", name: "Chef Gulzar Ahmed" },
            { role: "Pastry & Beverages Lead", name: "Chef Tariq Shah" }
          ].map((member, idx) => (
            <div key={idx} className="bg-[#111015]/60 border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-24 h-24 bg-white/5 border border-white/5 rounded-full mx-auto flex items-center justify-center">
                <Users className="w-8 h-8 text-[#f2b90f]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base font-serif">{member.name}</h4>
                <p className="text-xs text-gray-500 font-light mt-0.5">{member.role}</p>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Decades of expertise handling intense wood tandoor temperatures and spice tempering.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="bg-[#0b0a0e] py-16 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <h4 className="font-bold text-white text-sm">Full AC</h4>
            <p className="text-xs text-gray-500 font-light">Climate-controlled indoor seating area.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <h4 className="font-bold text-white text-sm">Takeaway & Delivery</h4>
            <p className="text-xs text-gray-500 font-light">Packaged hot in premium leakproof containers.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <h4 className="font-bold text-white text-sm">Digital Payments</h4>
            <p className="text-xs text-gray-500 font-light">Cards, UPI, and major digital wallets accepted.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <h4 className="font-bold text-white text-sm">Family Seating</h4>
            <p className="text-xs text-gray-500 font-light">Dedicated spaces for group bookings.</p>
          </div>
        </div>
      </section>

      {/* Visit CTA Banner */}
      <section className="bg-gradient-to-r from-amber-600 to-[#4a0404] py-16 px-6 text-center text-black">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white">Experience Srinagar's Best</h2>
          <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed">
            Reserve your table or order directly on WhatsApp to taste Srinagar's favorite Mughlai curries.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/reservations"
              className="px-8 py-3.5 bg-black hover:bg-[#111015] text-white font-bold rounded-full text-xs uppercase transition-colors"
            >
              Reserve Table
            </Link>
            <Link
              to="/menu"
              className="px-8 py-3.5 bg-white hover:bg-gray-100 text-black font-bold rounded-full text-xs uppercase transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
