import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only show on first load of the session
    const hasLoaded = sessionStorage.getItem('firstLoadDone');
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('firstLoadDone', 'true');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0e0d11] z-50 flex flex-col items-center justify-center space-y-4"
        >
          {/* Logo container or spinner */}
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="w-16 h-16 border-2 border-white/5 border-t-[#f2b90f] rounded-full"
            ></motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Utensils className="w-6 h-6 text-[#f2b90f]" />
            </div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#f2b90f] text-xs font-mono tracking-widest uppercase"
          >
            Tandoor Srinagar
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
