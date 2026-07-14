import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Destinations', 'Services', 'Packages', 'Contact'];

  // Shrink navbar spacing dynamically as the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white/80 backdrop-blur-lg border-b ${
        isScrolled ? 'py-3 shadow-md shadow-slate-100/50 border-slate-100' : 'py-5 border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-8">
          
          {/* Logo with clean modern typography */}
          <div className="flex items-center gap-1.5 cursor-pointer group">
            <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
              Travel<span className="text-blue-600">X</span>
            </span>
          </div>

          {/* Desktop Navigation Links with Framer Motion Underlines */}
          <ul className="hidden md:flex items-center gap-8 text-[14px] font-bold tracking-wide text-slate-600">
            {navItems.map((item) => (
              <li key={item} className="relative group/link">
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="py-2 text-slate-600 hover:text-blue-600 transition-colors duration-200 block"
                >
                  {item}
                </a>
                {/* Elegant hover line transition slide */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover/link:w-full" />
              </li>
            ))}
          </ul>

          {/* Action Trigger Group (CTA + Responsive Menu Toggle) */}
          <div className="flex items-center gap-4">
            
            {/* Desktop CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-flex bg-blue-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-lg shadow-blue-600/10 hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-200"
            >
              Book Now
            </motion.button>

            {/* Mobile Hamburger Menu Toggle Trigger Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden flex-col justify-center items-center w-9 h-9 space-y-1.5 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-colors z-50 relative"
              aria-label="Toggle Menu"
            >
              <span className={`block w-5 h-0.5 bg-slate-800 transition-transform duration-300 rounded-full ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-slate-800 transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-5'}`} />
              <span className={`block w-5 h-0.5 bg-slate-800 transition-transform duration-300 rounded-full ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

          </div>

        </div>
      </nav>

      {/* Full-Screen Drawer Menu Panel for Mobile Screens */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-0 left-0 w-full bg-white z-40 md:hidden pt-28 px-8 flex flex-col justify-between pb-12 shadow-2xl"
          >
            <ul className="flex flex-col gap-6 text-2xl font-black text-slate-900 tracking-tight">
              {navItems.map((item, idx) => (
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item}
                >
                  <a 
                    onClick={() => setIsMobileMenuOpen(false)}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-600 transition-colors block py-2"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Mobile View CTA Prompt Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full space-y-4"
            >
              <div className="h-[1px] bg-slate-100 w-full" />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-blue-600 text-white font-bold text-sm tracking-wide py-4 rounded-2xl shadow-xl shadow-blue-600/10 active:scale-[0.99] transition-all"
              >
                Book Your Trip Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
