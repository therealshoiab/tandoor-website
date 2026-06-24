import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Flame, Award, Leaf, ShoppingCart, Plus, Minus, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import SEOHead from '../components/SEOHead';
import restaurantData from '../data/restaurant-data.json';

// Deterministic dynamic food image mapping using high-quality Unsplash food photos
const getFoodImage = (name, category) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash);

  const biryanis = [
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop'
  ];
  const tandooris = [
    'https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600&auto=format&fit=crop'
  ];
  const curries = [
    'https://images.unsplash.com/photo-1545242944-e24839a62615?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop'
  ];
  const kebabs = [
    'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1561651823-34fed0225408?q=80&w=600&auto=format&fit=crop'
  ];
  const momos = [
    'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1625220194771-7ebedd0b7d10?q=80&w=600&auto=format&fit=crop'
  ];
  const soups = [
    'https://images.unsplash.com/photo-1547592165-e1d17f57655c?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=600&auto=format&fit=crop'
  ];
  const breads = [
    'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop'
  ];
  const drinks = [
    'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=600&auto=format&fit=crop'
  ];
  const general = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop'
  ];

  const norm = name.toLowerCase();
  if (norm.includes('biryani') || norm.includes('pulao')) return biryanis[index % biryanis.length];
  if (norm.includes('tikka') || norm.includes('tandoori chicken') || norm.includes('afghani')) return tandooris[index % tandooris.length];
  if (norm.includes('kebab') || norm.includes('kanti')) return kebabs[index % kebabs.length];
  if (norm.includes('momo')) return momos[index % momos.length];
  if (norm.includes('soup') || norm.includes('shorba')) return soups[index % soups.length];
  if (norm.includes('naan') || norm.includes('roti')) return breads[index % breads.length];
  if (norm.includes('kehwa') || norm.includes('tea') || norm.includes('coffee') || norm.includes('shake') || norm.includes('mojito')) return drinks[index % drinks.length];
  if (norm.includes('paneer') || norm.includes('dal') || norm.includes('korma') || norm.includes('curry') || norm.includes('josh')) return curries[index % curries.length];

  if (category === 'Soups') return soups[index % soups.length];
  if (category === 'Breads') return breads[index % breads.length];
  if (category === 'Rice And Biryani') return biryanis[index % biryanis.length];
  if (category === 'Momos') return momos[index % momos.length];
  if (category === 'Desserts & Beverages') return drinks[index % drinks.length];
  if (category === 'Starters') return tandooris[index % tandooris.length];
  if (category === 'Main Course') return curries[index % curries.length];

  return general[index % general.length];
};

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dietFilter, setDietFilter] = useState('All'); 
  const [cart, setCart] = useState({}); 

  const menuData = restaurantData.restaurant.menu;

  const categories = useMemo(() => {
    return ['All', ...menuData.map(c => c.category)];
  }, [menuData]);

  const filteredItems = useMemo(() => {
    let list = [];
    menuData.forEach(cat => {
      if (selectedCategory === 'All' || cat.category === selectedCategory) {
        cat.items.forEach(item => {
          list.push({ ...item, category: cat.category });
        });
      }
    });

    if (dietFilter !== 'All') {
      list = list.filter(item => item.dietary_tag === dietFilter);
    }

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
        background: 'var(--bg-color)',
        color: 'var(--text-white)',
        border: '1px solid var(--border-color)'
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
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 text-app-text relative">
      <SEOHead 
        title="Tandoor Srinagar | Menu" 
        description="Explore the complete menu of Tandoor, Lal Chowk, Srinagar. Check out prices, veg/non-veg tags, and order directly on WhatsApp!"
      />
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <span className="text-[#f2b90f] text-xs font-bold tracking-widest uppercase font-mono">Taste the Tradition</span>
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-app-white">Our Culinary Menu</h1>
        <div className="h-0.5 w-16 bg-[#f2b90f] mx-auto mt-2"></div>
        <p className="text-sm text-app-muted leading-relaxed font-light">
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
              className="w-full bg-app-input border border-app-border focus:border-[#f2b90f]/50 rounded-full py-3.5 pl-12 pr-6 text-sm text-app-white focus:outline-none transition-all"
            />
          </div>
          
          {/* Diet Filter Switch */}
          <div className="flex bg-white/5 border border-app-border p-1 rounded-full shrink-0">
            {['All', 'Veg', 'Non-Veg'].map(d => (
              <button
                key={d}
                onClick={() => setDietFilter(d)}
                aria-label={`Filter by ${d}`}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all min-h-[44px] ${
                  dietFilter === d 
                    ? 'bg-[#f2b90f] text-black font-bold' 
                    : 'text-app-muted hover:text-app-white'
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
                  : 'bg-app-card hover:bg-white/10 text-app-text hover:text-app-white border border-app-border'
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
                className="flex flex-col justify-between p-5 rounded-3xl bg-app-card border border-app-border hover:border-[#f2b90f]/20 hover:bg-app-card-hover transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Food Image */}
                  <div className="relative h-44 rounded-2xl overflow-hidden bg-app-bg border border-app-border">
                    <img 
                      src={getFoodImage(item.name, item.category)} 
                      alt={item.name} 
                      loading="lazy" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {item.highlight_tag && item.highlight_tag !== 'Regular' && (
                      <span className="absolute top-3 right-3 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider bg-[#f2b90f] text-black px-2 py-0.5 rounded-full shadow-md">
                        <Award className="w-2.5 h-2.5" />
                        {item.highlight_tag}
                      </span>
                    )}
                  </div>

                  {/* Indicators & Dietary Info */}
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
                    <span className="text-[10px] text-app-muted font-mono tracking-wider uppercase">
                      {item.dietary_tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-app-white font-serif tracking-wide">{item.name}</h3>
                    <p className="text-xs text-app-muted leading-relaxed font-light line-clamp-3">
                      {item.description || "Freshly cooked to order using local charcoal grilling and secret blend of spices."}
                    </p>
                  </div>
                </div>

                {/* Price and Add button section */}
                <div className="flex items-center justify-between gap-3 pt-4 mt-4 border-t border-app-border">
                  <span className="text-lg font-bold text-[#f2b90f] font-mono">₹{item.price}</span>
                  
                  {qty > 0 ? (
                    <div className="flex items-center gap-3 bg-white/5 border border-[#f2b90f]/30 px-3 py-1.5 rounded-full">
                      <button onClick={() => updateCartQty(item.name, -1)} className="hover:text-[#f2b90f] transition-colors"><Minus className="w-3.5 h-3.5 text-app-text" /></button>
                      <span className="text-xs font-bold text-app-white font-mono">{qty}</span>
                      <button onClick={() => updateCartQty(item.name, 1)} className="hover:text-[#f2b90f] transition-colors"><Plus className="w-3.5 h-3.5 text-app-text" /></button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item.name)}
                      className="px-4 py-1.5 text-xs font-bold border border-[#f2b90f]/30 hover:border-[#f2b90f] text-[#f2b90f] hover:bg-[#f2b90f] hover:text-black rounded-full transition-all duration-300 cursor-pointer"
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
        <div className="text-center py-16 text-app-muted">
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
