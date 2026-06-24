import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loaded page components for bundle size optimization
const Home = React.lazy(() => import('./pages/Home'));
const Menu = React.lazy(() => import('./pages/Menu'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Reservations = React.lazy(() => import('./pages/Reservations'));
const About = React.lazy(() => import('./pages/About'));
const Offers = React.lazy(() => import('./pages/Offers'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Global/Helper Components
import LoadingScreen from './components/LoadingScreen';
import WhatsAppFAB from './components/WhatsAppFAB';
import BackToTop from './components/BackToTop';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0e0d11] text-gray-100 flex flex-col font-sans select-none relative overflow-x-hidden pb-16 lg:pb-0">
        
        {/* Global Loading Overlay */}
        <LoadingScreen />

        {/* Floating Utilities */}
        <WhatsAppFAB />
        <BackToTop />
        <BottomNav />

        {/* Toast Notification Container */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#111015',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }
          }}
        />

        {/* Navigation Shell */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 w-full relative">
          <React.Suspense fallback={
            <div className="min-h-[50vh] flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-white/5 border-t-[#f2b90f] rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/about" element={<About />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </React.Suspense>
        </main>

        {/* Footer Shell */}
        <Footer />
        
      </div>
    </Router>
  );
}
