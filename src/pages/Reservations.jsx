import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Users, Clock, Phone, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import SEOHead from '../components/SEOHead';
import ambiance from '../assets/restaurant_ambiance.png';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: 2,
    occasion: 'Just Dining',
    requests: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", 
    "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", 
    "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
  ];

  const todayStr = useMemo(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }, []);

  const maxDateStr = useMemo(() => {
    const today = new Date();
    today.setDate(today.getDate() + 30);
    return today.toISOString().split('T')[0];
  }, []);

  const handleStepper = (amount) => {
    setFormData(prev => {
      const next = prev.guests + amount;
      if (next < 1 || next > 20) return prev;
      return { ...prev, guests: next };
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const message = `🍽️ *Table Reservation — Tandoor Srinagar*
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}  
📅 *Date:* ${formData.date}
⏰ *Time:* ${formData.time}
👥 *Guests:* ${formData.guests}
🎉 *Occasion:* ${formData.occasion}
📝 *Special Request:* ${formData.requests || 'None'}

Booked via website ✅`;

    const encoded = encodeURIComponent(message);
    const waLink = `https://wa.me/917780938743?text=${encoded}`;
    
    window.open(waLink, '_blank');
    setIsSuccess(true);
    toast.success("Reservation request created!");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 text-app-text">
      <SEOHead 
        title="Tandoor Srinagar | Book Table" 
        description="Book your table online at Tandoor, Lal Chowk, Srinagar. Fill out our reservation form and confirm instantly via WhatsApp."
      />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        
        {/* Left Side: Booking Panel */}
        <div className="bg-app-card border border-app-border p-8 rounded-3xl flex flex-col justify-center min-h-[500px]">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-12"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-app-white">Request Sent Successfully!</h2>
                <p className="text-sm text-app-muted font-light max-w-sm mx-auto leading-relaxed">
                  Reservation request sent! We will review and confirm your table assignment via WhatsApp/Call within 30 minutes. 🎉
                </p>
              </div>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#f2b90f] to-amber-600 text-black font-bold rounded-full text-xs uppercase cursor-pointer"
              >
                Book Another Table
              </button>
            </motion.div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <span className="text-[#f2b90f] text-xs font-bold tracking-widest uppercase font-mono">Table Reservation</span>
                <h1 className="text-2xl md:text-3xl font-bold font-serif text-app-white mt-1">Book Your Table</h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="reserve-name" className="text-xs text-app-muted font-medium">Full Name *</label>
                  <input
                    type="text"
                    id="reserve-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full bg-app-input border border-app-border focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-sm text-app-white focus:outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="reserve-phone" className="text-xs text-app-muted font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    id="reserve-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 96228 94984"
                    className="w-full bg-app-input border border-app-border focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-sm text-app-white focus:outline-none"
                  />
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="reserve-date" className="text-xs text-app-muted font-medium">Date *</label>
                    <input
                      type="date"
                      id="reserve-date"
                      name="date"
                      required
                      min={todayStr}
                      max={maxDateStr}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-app-input border border-app-border focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-sm text-app-white focus:outline-none [color-scheme:dark] dark:[color-scheme:dark] light:[color-scheme:light]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="reserve-time" className="text-xs text-app-muted font-medium">Time Slot *</label>
                    <select
                      id="reserve-time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-app-input border border-app-border focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-sm text-app-white focus:outline-none"
                    >
                      {timeSlots.map(t => (
                        <option key={t} value={t} className="bg-app-bg text-app-white">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guests Stepper & Occasion */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div className="space-y-1.5">
                    <span className="text-xs text-app-muted font-medium block">Guests *</span>
                    <div className="flex items-center gap-3 bg-app-input border border-app-border p-1 rounded-xl w-fit">
                      <button
                        type="button"
                        onClick={() => handleStepper(-1)}
                        aria-label="Decrease guest count"
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 hover:text-[#f2b90f] text-app-text cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-app-white font-mono">{formData.guests}</span>
                      <button
                        type="button"
                        onClick={() => handleStepper(1)}
                        aria-label="Increase guest count"
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 hover:text-[#f2b90f] text-app-text cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="reserve-occasion" className="text-xs text-app-muted font-medium">Occasion</label>
                    <select
                      id="reserve-occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full bg-app-input border border-app-border focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-sm text-app-white focus:outline-none"
                    >
                      <option value="Just Dining" className="bg-app-bg text-app-white">Just Dining</option>
                      <option value="Birthday" className="bg-app-bg text-app-white">Birthday</option>
                      <option value="Anniversary" className="bg-app-bg text-app-white">Anniversary</option>
                      <option value="Business Lunch" className="bg-app-bg text-app-white">Business Lunch</option>
                      <option value="Date Night" className="bg-app-bg text-app-white">Date Night</option>
                      <option value="Family Gathering" className="bg-app-bg text-app-white">Family Gathering</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-1.5">
                  <label htmlFor="reserve-requests" className="text-xs text-app-muted font-medium">Special Request / Notes</label>
                  <textarea
                    id="reserve-requests"
                    name="requests"
                    rows="2"
                    value={formData.requests}
                    onChange={handleChange}
                    placeholder="e.g. Need high chair for child, window seat if possible..."
                    className="w-full bg-app-input border border-app-border focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-sm text-app-white focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#f2b90f] to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-bold rounded-xl shadow-lg shadow-amber-500/10 text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Send Booking Request
                </button>

              </form>
            </div>
          )}
        </div>

        {/* Right Side: Informational Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-app-card border border-app-border rounded-3xl p-8 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="relative h-48 rounded-2xl overflow-hidden border border-app-border">
              <img src={ambiance} alt="Tandoor dining area" loading="lazy" className="w-full h-full object-cover" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-bold font-serif text-app-white">Fine Dining Etiquette</h3>
              <p className="text-xs text-app-muted font-light leading-relaxed">
                We maintain a comfortable family atmosphere. Tables are held for a maximum of 15 minutes past the reserved slot time. If running late, please dial our direct line immediately.
              </p>
            </div>

            <div className="space-y-3 border-t border-app-border pt-4">
              <h4 className="font-bold text-app-white text-xs uppercase tracking-wider font-mono">Operating Hours</h4>
              <ul className="text-xs text-app-muted space-y-1.5 font-light">
                <li className="flex justify-between"><span>Mon - Sun:</span> <span className="font-semibold text-app-white">12:00 PM – 10:30 PM</span></li>
                <li className="flex justify-between"><span>Last Seating:</span> <span className="text-app-white">10:00 PM</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-app-border pt-6 mt-6">
            <a
              href="tel:+919622894984"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-white/5 hover:bg-white/10 text-app-text font-semibold rounded-xl border border-app-border text-xs transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#f2b90f]" />
              Call to Confirm (+91 96228 94984)
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
