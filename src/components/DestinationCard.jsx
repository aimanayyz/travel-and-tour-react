import React from 'react';
import { motion } from 'framer-motion';

function DestinationCard({ image, title, country, price, rating }) {
  // Motion settings for individual card nodes
  const cardItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 14 } 
    }
  };

  return (
    <motion.div
      variants={cardItemVariants}
      whileHover={{ y: -12 }}
      className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-xl shadow-slate-100 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      {/* Upper Aspect Wrapper: Handles Image Layout Overflow & Absolutes */}
      <div className="relative aspect-[4/3] overflow-hidden w-full bg-slate-100">
        <img 
          src={image} 
          alt={`${title}, ${country}`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        
        {/* Floating Absolute Premium Price Floating Pill Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/40 shadow-lg shadow-black/5">
          <span className="text-xs font-black text-slate-900 tracking-tight">
            {price}<span className="text-[10px] text-slate-500 font-medium"> / person</span>
          </span>
        </div>

        {/* Floating Absolute Rating Tag Panel */}
        <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs font-bold text-white tracking-wide">{rating || "4.8"}</span>
        </div>
      </div>

      {/* Card Metadata Box Panel */}
      <div className="p-6 md:p-7 flex flex-col justify-between flex-1">
        <div>
          {/* Decorative Vector Country Layout String */}
          <div className="flex items-center gap-1 text-slate-400 mb-1.5">
            <svg className="w-3.5 h-3.5 text-blue-500/80 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest">{country}</span>
          </div>

          <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
        </div>

        {/* Underlined Interactive CTA Anchor Line */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-500 transition-colors">
            Available Slots: 5
          </span>
          <div className="flex items-center gap-1 text-xs font-bold tracking-wider text-blue-600 uppercase">
            Explore Package
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </div>
      </div>

    </motion.div>
  );
}

export default DestinationCard;
