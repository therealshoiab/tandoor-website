import React from 'react';
import { motion } from 'framer-motion';

export default function WhatsAppFAB() {
  const message = encodeURIComponent("Hello Tandoor! I'm visiting your website and would like to order or make an enquiry.");
  const link = `https://wa.me/917780938743?text=${message}`;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Tandoor on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-20 lg:bottom-6 right-6 z-40 p-4 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer group"
    >
      {/* Pulsing halo ring */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30 -z-10 group-hover:animate-none"></span>
      
      {/* WhatsApp SVG Icon */}
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.802.001-2.618-1.01-5.079-2.852-6.924C16.383 1.936 13.918 1.9 12.01 1.9c-5.41 0-9.813 4.395-9.815 9.806-.001 1.523.407 3.013 1.182 4.3l-.994 3.633 3.674-.985z"/>
      </svg>
    </motion.a>
  );
}
