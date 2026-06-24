import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Flame, Award, Leaf, ShoppingCart, Plus, Minus, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import SEOHead from '../components/SEOHead';
import restaurantData from '../data/restaurant-data.json';

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dietFilter, setDietFilter] = useState('All'); // 'All', 'Veg', 'Non-Veg'
  const [cart, setCart] = useState({}); // { [itemName]: qty }

  const menuData = restaurantData.restaurant.menu;

  // Extract unique categories
  const categories = useMemo(() => {
    return ['All', ...menuData.map(c => c.category)];
  }, [menuData]);

  // Flattened and filtered items list
  const filteredItems = useMemo(() => {
    let list = [];
    menuData.forEach(cat => {
      if (selectedCategory === 'All' || cat.category === selectedCategory) {
        cat.items.forEach(item => {
          list.push({ ...item, category: cat.category });
        });
      }
    });

    // Diet Filter
    if (dietFilter !== 'All') {
      list = list.filter(item => item.dietary_tag === dietFilter);
    }

    // Search Query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      list = list.filter(
        item =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }
    return list;
  }, [menuData, selectedCategory, dietFilter, searchQuery]);

  const addToCart = (name) => {
    setCart(prev => ({
      ...prev,
      [name]: (prev[name] || 0) + 1
    }));
    toast.success(`${name} added to WhatsApp order!`, {
      style: {
        background: '#111015',
        color: '#fff',
        border: '1px solid rgba(242, 185, 15, 0.2)'
      }
    });
  };

  const updateCartQty = (name, amount) => {
    setCart(prev => {
      const current = prev[name] || 0;
      const next = current + amount;
      const nextCart = { ...prev };
      if (next <= 0) {
        delete nextCart[name];
      } else {
        nextCart[name] = next;
      }
      return nextCart;
    });
  };

  const cartTotal = useMemo(() => {
    let total = 0;
    Object.entries(cart).forEach(([name, qty]) => {
      let price = 0;
      menuData.forEach(cat => {
        const match = cat.items.find(i => i.name === name);
        if (match) price = match.price;
      });
      total += price * qty;
    });
    return total;
  }, [cart, menuData]);

  const cartItemsCount = useMemo(() => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  }, [cart]);

  const handleCheckout = () => {
    if (cartItemsCount === 0) return;
    
    let message = "🍽️ *New Order from Website*\n\n*Items Ordered:*\n";
    Object.entries(cart).forEach(([name, qty]) => {
      let price = 0;
      menuData.forEach(cat => {
        const match = cat.items.find(i => i.name === name);
        if (match) price = match.price;
      });
      message += `- ${name} (x${qty}) - ₹${price * qty}\n`;
    });
    
    message += `\n*Total Amount:* ₹${cartTotal}\n\nPlease confirm this order. Thank you!`;
    window.open(`https://wa.me/917780938743?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 text-gray-200 relative">
      <SEOHead 
        title="Tandoor Srinagar | Menu" 
        description="Explore the complete menu of Tandoor, Lal Chowk, Srinagar. Check out prices, veg/non-veg tags, and order directly on WhatsApp!"
      />
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <span className="text-[#f2b90f] text-xs font-bold tracking-widest uppercase font-mono">Taste the Tradition</span>
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-white">Our Culinary Menu</h1>
        <div className="h-0.5 w-16 bg-[#f2b90f] mx-auto mt-2"></div>
        <p className="text-sm text-gray-400 leading-relaxed font-light">
          Browse through our extensive selection of authentic recipes cooked in the charcoal clay tandoor.
        </p>
      </div>

      {/* Search & Filters Container */}
      <div className="space-y-6 mb-12">
        {/* Search & Diet Toggle */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-2xl mx-auto">
          {/* Search Input */}
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              id="menu-search"
              name="menu-search"
              aria-label="Search the menu"
              placeholder="Search for Rogan Josh, Paneer, Momos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111015]/80 border border-white/5 focus:border-[#f2b90f]/50 rounded-full py-3.5 pl-12 pr-6 text-sm text-white focus:outline-none transition-all"
            />
          </div>
          
          {/* Diet Filter Switch */}
          <div className="flex bg-white/5 border border-white/5 p-1 rounded-full shrink-0">
            {['All', 'Veg', 'Non-Veg'].map(d => (
              <button
                key={d}
                onClick={() => setDietFilter(d)}
                aria-label={`Filter by ${d}`}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all min-h-[44px] ${
                  dietFilter === d 
                    ? 'bg-[#f2b90f] text-black font-bold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              aria-label={`Show category ${cat}`}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-300 min-h-[44px] ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#f2b90f] to-amber-600 text-black font-bold shadow-md shadow-amber-500/10'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Food Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => {
            const isVeg = item.dietary_tag === 'Veg' || item.dietary_tag === 'Vegan';
            const qty = cart[item.name] || 0;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.name}
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#111015]/60 border border-white/5 hover:border-[#f2b90f]/20 hover:bg-[#111015] transition-all duration-300 group"
              >
                <div className="space-y-3">
                  
                  {/* Indicators & Highlights */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center justify-center w-4 h-4 rounded border text-[9px] font-bold ${
                        isVeg
                          ? 'border-green-600/50 text-green-500 bg-green-500/10'
                          : 'border-red-600/50 text-red-500 bg-red-500/10'
                      }`}
                    >
                      ●
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono tracking-wider uppercase">
                      {item.dietary_tag}
                    </span>

                    {item.highlight_tag && item.highlight_tag !== 'Regular' && (
                      <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider bg-amber-500/10 text-[#f2b90f] border border-amber-500/20 px-2 py-0.5 rounded-full">
                        <Award className="w-2.5 h-2.5" />
                        {item.highlight_tag}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white font-serif tracking-wide">{item.name}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light line-clamp-3">
                      {item.description || "Freshly cooked to order using local charcoal grilling and secret blend of spices."}
                    </p>
                  </div>
                </div>

                {/* Price and Add button section */}
                <div className="flex items-center justify-between gap-3 pt-6 mt-4 border-t border-white/5">
                  <span className="text-lg font-bold text-[#f2b90f] font-mono">₹{item.price}</span>
                  
                  {qty > 0 ? (
                    <div className="flex items-center gap-3 bg-white/5 border border-[#f2b90f]/30 px-3 py-1.5 rounded-full">
                      <button onClick={() => updateCartQty(item.name, -1)} className="hover:text-[#f2b90f] transition-colors"><Minus className="w-3.5 h-3.5" /></button>
                      <span className="text-xs font-bold text-white font-mono">{qty}</span>
                      <button onClick={() => updateCartQty(item.name, 1)} className="hover:text-[#f2b90f] transition-colors"><Plus className="w-3.5 h-3.5" /></button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item.name)}
                      className="px-4 py-1.5 text-xs font-bold border border-[#f2b90f]/30 hover:border-[#f2b90f] text-[#f2b90f] hover:bg-[#f2b90f] hover:text-black rounded-full transition-all duration-300"
                    >
                      Add to WhatsApp
                    </button>
                  )}
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* No Items Found */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          <p className="text-sm">No dishes matched your filters or search query.</p>
        </div>
      )}

      {/* Floating WhatsApp Order Cart Panel */}
      <AnimatePresence>
        {cartItemsCount > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#111015] border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-6 shadow-2xl backdrop-blur-md w-[90%] max-w-md justify-between"
          >
            <div className="flex items-center gap-3 text-[#f2b90f]">
              <ShoppingCart className="w-5 h-5" />
              <div>
                <span className="block text-xs font-bold text-white">{cartItemsCount} Items Selected</span>
                <span className="text-xs font-mono font-bold text-[#f2b90f]">Total: ₹{cartTotal}</span>
              </div>
            </div>
            
            <button
              onClick={handleCheckout}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#f2b90f] to-amber-600 text-black font-bold rounded-xl shadow-lg shadow-amber-500/10 text-xs tracking-wider uppercase transition-all"
            >
              Order on WA
              <Send className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
