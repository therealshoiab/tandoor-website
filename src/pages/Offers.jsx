import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Percent, Sparkles, MessageSquare, Mail, Award, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import SEOHead from '../components/SEOHead';

export default function Offers() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const isSub = localStorage.getItem('newsletterSubscribed');
    if (isSub) setSubscribed(true);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    localStorage.setItem('newsletterSubscribed', 'true');
    setSubscribed(true);
    setEmail('');
    toast.success("Subscribed successfully! Welcome to the Tandoor Club.");
  };

  const handleCateringCta = () => {
    const text = encodeURIComponent("Hello Tandoor! I would like to make an enquiry regarding bulk catering services for an event.");
    window.open(`https://wa.me/917780938743?text=${text}`, '_blank');
  };

  const deals = [
    {
      icon: <Percent className="w-8 h-8 text-[#f2b90f]" />,
      title: "Happy Hours Starter Discount",
      timing: "Mon - Fri: 4:00 PM – 7:00 PM",
      desc: "Get an exclusive 15% discount on all veg & non-veg starters ordered for dine-in or takeaway."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#f2b90f]" />,
      title: "Weekend Tandoor Platter Feast",
      timing: "Saturday & Sunday: All Day",
      desc: "Order any of our signature Platters (Biryani or Tandoor Platter) and get 2 free Lemon Mint Mojitos."
    },
    {
      icon: <Award className="w-8 h-8 text-[#f2b90f]" />,
      title: "Birthday & Anniversary Treats",
      timing: "Valid on your special day",
      desc: "Celebrate your day at Tandoor! Show your ID card and get a complimentary chef-special dessert or Zaffrani Kehwa pot."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 text-gray-200 space-y-16">
      <SEOHead 
        title="Tandoor Srinagar | Offers" 
        description="Check out special discounts, Happy Hours, weekend platter deals, and bulk catering packages at Tandoor Restaurant, Srinagar."
      />

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[#f2b90f] text-xs font-bold tracking-widest uppercase font-mono">Special Treat</span>
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-white">Deals & Catering</h1>
        <div className="h-0.5 w-16 bg-[#f2b90f] mx-auto mt-2"></div>
        <p className="text-sm text-gray-400 leading-relaxed font-light">
          Enjoy premium Mughlai cuisine with our exclusive dining values and corporate catering support.
        </p>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deals.map((deal, idx) => (
          <motion.div
            key={deal.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-[#111015]/60 border border-white/5 hover:border-[#f2b90f]/20 hover:bg-[#111015] transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-full w-fit">{deal.icon}</div>
              <h3 className="text-lg font-bold text-white font-serif">{deal.title}</h3>
              <span className="block text-xs font-semibold text-[#f2b90f] font-mono tracking-wide">{deal.timing}</span>
              <p className="text-xs text-gray-400 font-light leading-relaxed">{deal.desc}</p>
            </div>
            <div className="pt-6">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-mono">Dine-in / Takeaway Only</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Catering & Bulk Orders */}
      <section className="bg-[#0b0a0e]/60 border border-white/5 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-[#f2b90f] text-xs font-bold uppercase tracking-widest font-mono">Catering Services</span>
          <h2 className="text-3xl font-bold font-serif text-white leading-tight">Host Your Next Event With Us</h2>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            From family celebrations and weddings to corporate parties, we provide customized bulk menus of our signature Kebabs and Biryani platters. We manage setup and serve it hot.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <button
            onClick={handleCateringCta}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f2b90f] to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-bold rounded-xl shadow-lg shadow-amber-500/10 text-xs uppercase transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Catering Enquiry
          </button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#111015]/60 border border-white/5 p-8 rounded-3xl max-w-xl mx-auto space-y-6 text-center">
        <div className="space-y-2">
          <Mail className="w-10 h-10 text-[#f2b90f] mx-auto" />
          <h3 className="text-xl font-bold font-serif text-white">Join the Tandoor Club</h3>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            Subscribe to our newsletter to receive notification on newly added dishes, special holiday events, and club-only coupons.
          </p>
        </div>

        {subscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 text-xs font-bold text-green-500 bg-green-500/10 border border-green-500/20 py-3 rounded-xl"
          >
            <Check className="w-4 h-4" />
            You're Subscribed! Enjoy the deals.
          </motion.div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Enter your email</label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border border-white/5 focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#f2b90f] hover:bg-amber-500 text-black font-bold rounded-xl text-xs uppercase transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </section>

    </div>
  );
}
