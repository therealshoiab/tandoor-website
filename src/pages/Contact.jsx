import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Phone, Compass, Mail, Clock, MessageSquare, Copy, Navigation, Send, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import SEOHead from '../components/SEOHead';
import restaurantData from '../data/restaurant-data.json';

const InstagramIcon = () => (
  <svg className="w-5 h-5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
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
    toast.success("Address copied to clipboard!");
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
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 text-gray-200 space-y-16">
      <SEOHead 
        title="Tandoor Srinagar | Contact Us" 
        description="Find our address, opening hours, WhatsApp chat link, and dial hotline. Get directions to Tandoor Restaurant in Lal Chowk."
      />

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[#f2b90f] text-xs font-bold tracking-widest uppercase font-mono">Reach Out</span>
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-white">Contact & Location</h1>
        <div className="h-0.5 w-16 bg-[#f2b90f] mx-auto mt-2"></div>
      </div>

      {/* Grid of details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        
        {/* Contact Cards & Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#111015]/60 border border-white/5 space-y-3">
              <Phone className="w-6 h-6 text-[#f2b90f]" />
              <h3 className="font-bold text-white text-sm">Direct Phone</h3>
              <p className="text-xs text-gray-400 font-mono">+91 96228 94984</p>
              <a href="tel:+919622894984" className="inline-block text-xs font-bold text-[#f2b90f] hover:underline">
                Call Now
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#111015]/60 border border-white/5 space-y-3">
              <MessageSquare className="w-6 h-6 text-[#f2b90f]" />
              <h3 className="font-bold text-white text-sm">WhatsApp Chat</h3>
              <p className="text-xs text-gray-400 font-mono">+91 77809 38743</p>
              <a href="https://wa.me/917780938743" target="_blank" rel="noreferrer" className="inline-block text-xs font-bold text-[#f2b90f] hover:underline">
                Open Chat
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="p-8 bg-[#111015]/60 border border-white/5 rounded-3xl space-y-4">
            <h3 className="text-lg font-bold text-white font-serif">Send a Message</h3>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Your Email (Optional)</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Your Email (Optional)"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Message details</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Write your message details..."
                  rows="3"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/5 focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-xs text-white focus:outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-3 bg-[#f2b90f] text-black font-bold rounded-xl text-xs uppercase"
              >
                Send via WhatsApp
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>
        </div>

        {/* Address and Opening Hours */}
        <div className="bg-[#111015]/60 border border-white/5 p-8 rounded-3xl flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            
            {/* Address with copy */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold font-serif text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#f2b90f]" /> Address
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{address}</p>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/5 hover:bg-white/10 rounded-xl text-xs font-semibold"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                  Copy Address
                </button>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#f2b90f] text-black font-bold rounded-xl text-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Hours table with dynamic highlight */}
            <div className="space-y-3 border-t border-white/5 pt-6">
              <h3 className="text-xl font-bold font-serif text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#f2b90f]" /> Operating Hours
              </h3>
              
              <div className="divide-y divide-white/5 text-xs">
                {Object.entries(hours).map(([day, timing]) => {
                  const isToday = day === todayName;

                  return (
                    <div
                      key={day}
                      className={`flex justify-between py-2 ${
                        isToday 
                          ? 'text-[#f2b90f] font-bold border-l-2 border-[#f2b90f] pl-2' 
                          : 'text-gray-400 font-light'
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
          <div className="border-t border-white/5 pt-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Ordering & Social Channels</h4>
            <div className="flex flex-wrap gap-2">
              <a href="https://www.instagram.com/tandoor.lalchowk" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-[11px] text-gray-300 hover:text-white transition-colors">
                <InstagramIcon /> Instagram
              </a>
              <a href="https://www.facebook.com/tandoor.lalchowk" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-[11px] text-gray-300 hover:text-white transition-colors">
                <FacebookIcon /> Facebook
              </a>
              <a href="https://www.zomato.com/srinagar/tandoor-lal-chowk/order" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-[11px] text-gray-300 hover:text-white transition-colors">
                Zomato
              </a>
              <a href="https://www.swiggy.com/city/srinagar/tandoor-lal-chowk-rest689874" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-[11px] text-gray-300 hover:text-white transition-colors">
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
        className="w-full h-96 rounded-3xl overflow-hidden border border-white/5"
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
