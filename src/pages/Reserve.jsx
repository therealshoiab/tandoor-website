import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Users, Clock, Award, Star } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Reserve() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast.error('Please fill in all required fields.', {
        style: {
          background: '#111015',
          color: '#fff',
          border: '1px solid rgba(239, 68, 68, 0.2)'
        }
      });
      return;
    }

    // Success Toast
    toast.success(`Table reserved successfully for ${formData.name}!`, {
      icon: '🎉',
      style: {
        background: '#111015',
        color: '#fff',
        border: '1px solid rgba(242, 185, 15, 0.2)'
      }
    });

    // Reset Form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2'
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-200">
      
      {/* Informational Column */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="space-y-3">
          <span className="text-[#f2b90f] text-xs font-bold tracking-widest uppercase font-mono">Fine Dining Table Booking</span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white leading-tight">Secure Your Feast</h1>
          <div className="h-0.5 w-16 bg-[#f2b90f]"></div>
          <p className="text-sm text-gray-400 leading-relaxed font-light">
            Due to our high dining rating and central Lal Chowk location, we highly recommend reserving your table in advance, especially for weekend dinner slots.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
            <Award className="w-8 h-8 text-[#f2b90f] shrink-0" />
            <div>
              <h4 className="font-bold text-white text-sm">Priority Seating</h4>
              <p className="text-xs text-gray-400 font-light mt-1">Reserved guests get preferred seating closer to the central open kitchen / fireplace.</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
            <Users className="w-8 h-8 text-[#f2b90f] shrink-0" />
            <div>
              <h4 className="font-bold text-white text-sm">Group & Event Bookings</h4>
              <p className="text-xs text-gray-400 font-light mt-1">Hosting a family get-together or corporate lunch? Mention it in notes or call us directly.</p>
            </div>
          </div>
        </div>

        {/* Rating Quote */}
        <div className="p-6 rounded-2xl bg-[#f2b90f]/5 border border-[#f2b90f]/15 relative italic text-sm text-gray-300 font-light">
          "From the entry to the exit, everything was soothing for us. The clay-oven food items are an absolute delight!"
          <div className="flex items-center gap-1.5 mt-3 not-italic">
            <Star className="w-3.5 h-3.5 text-[#f2b90f] fill-[#f2b90f]" />
            <span className="text-xs text-white font-bold">5.0 Rating</span>
            <span className="text-xs text-gray-500">- Google Reviewer</span>
          </div>
        </div>
      </motion.div>

      {/* Reservation Form Column */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#111015]/60 border border-white/5 p-8 rounded-3xl space-y-6"
      >
        <h3 className="text-2xl font-bold text-white font-serif text-center">Reservation Form</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs text-gray-400 font-medium">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full bg-white/5 border border-white/5 focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 font-medium">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 96228 94984"
                className="w-full bg-white/5 border border-white/5 focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
              />
            </div>
            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                className="w-full bg-white/5 border border-white/5 focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Date */}
            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 font-medium">Date *</label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/5 focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Time Slot */}
            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 font-medium">Time Slot *</label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/5 focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none [color-scheme:dark]"
              />
            </div>

            {/* Guest Count */}
            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 font-medium">Guests *</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/5 focus:border-[#f2b90f]/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none [color-scheme:dark]"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6+ Guests</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#f2b90f] to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-bold rounded-xl shadow-lg shadow-amber-500/10 transition-all duration-300 mt-4"
          >
            Confirm Reservation
          </button>

        </form>
      </motion.div>

    </div>
  );
}
