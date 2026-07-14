import React from 'react';
import { motion } from 'framer-motion';

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      // Smooth fade and slide up layout as it enters the viewport
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 60, damping: 15 }}
      
      // Elevating hover effect that slightly rises, intensifies shadows, and swaps bg shades
      whileHover={{ 
        y: -10, 
        boxShadow: "0 25px 50px -12px rgb(15 23 42 / 0.08), 0 12px 20px -8px rgb(59 130 246 / 0.15)"
      }}
      className="group relative bg-white border border-slate-100 p-8 rounded-3xl transition-all duration-300 text-center flex flex-col items-center justify-between h-full overflow-hidden cursor-pointer shadow-xl shadow-slate-100"
    >
      {/* Creative Background Accent - Appears smoothly on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-indigo-50/30 rounded-bl-full transition-transform duration-500 group-hover:scale-120 pointer-events-none" />

      <div className="flex flex-col items-center z-10">
        
        {/* Aesthetic Animated Icon Container */}
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="text-4xl w-16 h-16 mb-6 flex items-center justify-center bg-slate-50 text-blue-600 rounded-2xl border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors duration-300 shadow-sm"
        >
          {icon}
        </motion.div>

        {/* Card Title with Color Swap Micro-interaction */}
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>

        {/* Refined Description text styling */}
        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
          {description}
        </p>

      </div>

      {/* Modern Text Anchor Link */}
      <div className="mt-6 flex items-center gap-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
        Learn More
        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </div>

    </motion.div>
  );
}

export default ServiceCard;
