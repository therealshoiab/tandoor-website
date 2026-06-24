import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Phone, Compass, Mail, Clock, MessageSquare, Copy, Navigation, Send, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import SEOHead from '../components/SEOHead';
import restaurantData from '../data/restaurant-data.json';

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.92-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const address = "Near Old Palladium Cinema, Lal Chowk, Srinagar, J&K, 190001";
  const mapsLink = "https://www.google.com/maps/dir/?api=1&destination=34.0707505,74.8091399";

  const hours = restaurantData.restaurant.opening_hours;

  const todayName = useMemo(() => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[new Date().getDay()];
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    toast.success("Address copied to clipboard!", {
      style: {
        background: 'var(--bg-color)',
        color: 'var(--text-white)',
        border: '1px solid var(--border-color)'
      }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error("Please enter a name and message.");
      return;
    }
    const text = encodeURIComponent(`Hello Tandoor! Message from ${form.name}: ${form.message}`);
    window.open(`https://wa.me/917780938743?text=${text}`, '_blank');
    setForm({ name: '', email: '', message: '' });
    toast.success("Message drafted to WhatsApp!");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 text-app-text space-y-16">
      <SEOHead 
        title="Tandoor Srinagar | Contact Us" 
        description="Find our address, opening hours, WhatsApp chat link, and dial hotline. Get directions to Tandoor Restaurant in Lal Chowk."
      />

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[#f2b90f] text-xs font-bold tracking-widest uppercase font-mono">Reach Out</span>
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-app-white">Contact & Location</h1>
        <div className="h-0.5 w-16 bg-[#f2b90f] mx-auto mt-2"></div>
      </div>

      {/* Grid of details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        
        {/* Contact Cards & Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-app-card border border-app-border space-y-3">
              <Phone className="w-6 h-6 text-[#f2b90f]" />
              <h3 className="font-bold text-app-white text-sm">Direct Phone</h3>
              <p className="text-xs text-app-muted font-mono">+91 96228 94984</p>
              <a href="tel:+919622894984" className="inline-block text-xs font-bold text-[#f2b90f] hover:underline cursor-pointer">
                Call Now
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-app-card border border-app-border space-y-3">
              <MessageSquare className="w-6 h-6 text-[#f2b90f]" />
              <h3 className="font-bold text-app-white text-sm">WhatsApp Chat</h3>
              <p className="text-xs text-app-muted font-mono">+91 77809 38743</p>
              <a href="https://wa.me/917780938743" target="_blank" rel="noreferrer" className="inline-block text-xs font-bold text-[#f2b90f] hover:underline cursor-pointer">
                Open Chat
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="p-8 bg-app-card border border-app-border rounded-3xl space-y-4">
            <h3 className="text-lg font-bold text-app-white font-serif">Send a Message</h3>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-app-muted mb-1 font-semibold">Your Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-app-input border border-app-border focus:border-[#f2b90f]/50 rounded-xl px-4 py-2.5 text-xs text-app-white focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs text-app-muted mb-1 font-semibold">Your Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-app-input border border-app-border focus:border-[#f2b90f]/50 rounded-xl px-4 py-2.5 text-xs text-app-white focus:outline-none"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs text-app-muted mb-1 font-semibold">Your Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-app-input border border-app-border focus:border-[#f2b90f]/50 rounded-xl px-4 py-2.5 text-xs text-app-white focus:outline-none resize-none"
                  placeholder="How can we help you? Describe order or booking..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#f2b90f] to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                Submit via WhatsApp
              </button>
            </form>
          </div>

        </div>

        {/* Location Info & Hours */}
        <div className="p-8 bg-app-card border border-app-border rounded-3xl flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold font-serif text-app-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#f2b90f]" /> Lal Chowk Srinagar
              </h3>
              <p className="text-xs text-app-muted leading-relaxed font-light">
                {address}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-app-border rounded-xl text-[11px] text-app-text hover:text-[#f2b90f] transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                  Copy Address
                </button>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-app-border rounded-xl text-[11px] text-app-text hover:text-[#f2b90f] transition-all cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Hours table with dynamic highlight */}
            <div className="space-y-3 border-t border-app-border pt-6">
              <h3 className="text-xl font-bold font-serif text-app-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#f2b90f]" /> Operating Hours
              </h3>
              
              <div className="divide-y divide-app-border text-xs">
                {Object.entries(hours).map(([day, timing]) => {
                  const isToday = day === todayName;

                  return (
                    <div
                      key={day}
                      className={`flex justify-between py-2 ${
                        isToday 
                          ? 'text-[#f2b90f] font-bold border-l-2 border-[#f2b90f] pl-2' 
                          : 'text-app-muted font-light'
                      }`}
                    >
                      <span>{day} {isToday && '(Today)'}:</span>
                      <span>{timing}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Social icons */}
          <div className="border-t border-app-border pt-6">
            <h4 className="text-app-white font-bold text-xs uppercase tracking-wider mb-3">Ordering & Social Channels</h4>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.instagram.com/tandoor.lalchowk" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[11px] text-white hover:scale-105 transition-all shadow-md font-semibold cursor-pointer"
                style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeB 90%)' }}
              >
                <InstagramIcon /> Instagram
              </a>
              <a 
                href="https://www.facebook.com/tandoor.lalchowk" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[11px] text-white hover:scale-105 transition-all bg-[#1877F2] shadow-md font-semibold cursor-pointer"
              >
                <FacebookIcon /> Facebook
              </a>
              <a 
                href="https://www.zomato.com/srinagar/tandoor-lal-chowk/order" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[11px] text-white hover:scale-105 transition-all bg-[#cb202d] shadow-md font-semibold cursor-pointer"
              >
                Zomato
              </a>
              <a 
                href="https://www.swiggy.com/city/srinagar/tandoor-lal-chowk-rest689874" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[11px] text-white hover:scale-105 transition-all bg-[#fc8019] shadow-md font-semibold cursor-pointer"
              >
                Swiggy
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Map Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full h-96 rounded-3xl overflow-hidden border border-app-border"
      >
        <iframe
          title="Tandoor Srinagar Map View"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1653.250567789456!2d74.8091399!3d34.0707505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18ff804889ab7%3A0x20496d42a4804ea4!2sTandoor!5e0!3m2!1sen!2sin!4v1719213192000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="filter invert grayscale brightness-90 contrast-125"
        ></iframe>
      </motion.div>

    </div>
  );
}
