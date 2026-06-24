import React from 'react';
import { motion } from 'framer-motion';
import { Percent, Sparkles, MessageSquare, Award } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function Offers() {
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
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 text-app-text space-y-16">
      <SEOHead 
        title="Tandoor Srinagar | Offers" 
        description="Check out special discounts, Happy Hours, weekend platter deals, and bulk catering packages at Tandoor Restaurant, Srinagar."
      />

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[#f2b90f] text-xs font-bold tracking-widest uppercase font-mono">Special Treat</span>
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-app-white">Deals & Catering</h1>
        <div className="h-0.5 w-16 bg-[#f2b90f] mx-auto mt-2"></div>
        <p className="text-sm text-app-muted leading-relaxed font-light">
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
            className="p-8 rounded-2xl bg-app-card border border-app-border hover:border-[#f2b90f]/20 hover:bg-app-card-hover transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-full w-fit">{deal.icon}</div>
              <h3 className="text-lg font-bold text-app-white font-serif">{deal.title}</h3>
              <span className="block text-xs font-semibold text-[#f2b90f] font-mono tracking-wide">{deal.timing}</span>
              <p className="text-xs text-app-muted font-light leading-relaxed">{deal.desc}</p>
            </div>
            <div className="pt-6">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-mono">Dine-in / Takeaway Only</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Catering & Bulk Orders */}
      <section className="bg-app-section border border-app-border rounded-3xl p-8 md:p-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-[#f2b90f] text-xs font-bold uppercase tracking-widest font-mono">Catering Services</span>
          <h2 className="text-3xl font-bold font-serif text-app-white leading-tight">Host Your Next Event With Us</h2>
          <p className="text-xs text-app-muted font-light leading-relaxed">
            From family celebrations and weddings to corporate parties, we provide customized bulk menus of our signature Kebabs and Biryani platters. We manage setup and serve it hot.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <button
            onClick={handleCateringCta}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f2b90f] to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-bold rounded-xl shadow-lg shadow-amber-500/10 text-xs uppercase transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Catering Enquiry
          </button>
        </div>
      </section>

    </div>
  );
}
