import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  // Stagger animation controller for text layers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 70, damping: 14 } 
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 pt-24 pb-16 flex items-center overflow-hidden">
      
      {/* Decorative Fluid Ambient Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full filter blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-indigo-100/40 rounded-full filter blur-[100px] pointer-events-none mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Clean Light Content Panel */}
        <motion.div 
          className="lg:col-span-7 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Creative Top Tag/Badge */}
          <motion.div variants={textVariants} className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full shadow-sm shadow-blue-500/5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">
              Explore Without Limits
            </span>
          </motion.div>

          {/* Premium Headline Typography */}
          <motion.h1 variants={textVariants} className="text-5xl sm:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
            Discover Places <br />
            That Make You <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
              Feel Alive.
            </span>
          </motion.h1>

          {/* Descriptive Context Text */}
          <motion.p variants={textVariants} className="text-slate-500 text-base sm:text-lg font-medium max-w-xl leading-relaxed">
            Unleash your wanderlust with beautifully tailored experiences. From serene tropical beaches to high-octane mountain peaks, your journey begins today.
          </motion.p>

          {/* Modern Interactive Search/CTA Dashboard */}
          <motion.div 
            variants={textVariants}
            className="p-3 bg-white border border-slate-100 shadow-2xl shadow-slate-200/80 rounded-2xl sm:rounded-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-2xl"
          >
            <div className="flex-1 flex items-center gap-3 px-4 py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-slate-100">
              <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
              </svg>
              <input 
                type="text" 
                placeholder="Where to next adventure?" 
                className="w-full text-slate-800 text-sm font-semibold placeholder-slate-400 bg-transparent outline-none"
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide px-8 py-4 rounded-xl sm:rounded-full shadow-lg shadow-blue-600/20 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              Book Your Trip
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Highly Aesthetic Mosaic Image Showcase */}
        <div className="lg:col-span-5 relative h-[500px] w-full hidden md:block">
          
          {/* Main Hero Card Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="absolute top-4 left-12 w-72 h-[420px] rounded-[32px] overflow-hidden shadow-2xl shadow-slate-300 border-4 border-white z-20 cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
              alt="Tropical Paradise Resort" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
            />
          </motion.div>

          {/* Secondary Layered Support Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 6 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ type: "spring", stiffness: 40, delay: 0.5 }}
            whileHover={{ rotate: 2, scale: 1.02 }}
            className="absolute top-20 right-4 w-56 h-72 rounded-[24px] overflow-hidden shadow-xl shadow-slate-300 border-4 border-white z-10 cursor-pointer"
          >
            <img 
              src="https://unsplash.com" 
              alt="Roadtrip Horizon Adventure" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
            />
          </motion.div>

          {/* Minimal Floating Metrics Graphic Component */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
            className="absolute bottom-6 right-20 bg-white border border-slate-100 p-4 rounded-2xl shadow-xl shadow-slate-200/80 z-30 flex items-center gap-3"
          >
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Happy Clients</p>
              <h4 className="text-base font-black text-slate-800">12k+ Active Explorers</h4>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Aesthetic Bottom Animated Scroll Pointer Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Scroll down</span>
        <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-blue-600 rounded-full" 
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;
