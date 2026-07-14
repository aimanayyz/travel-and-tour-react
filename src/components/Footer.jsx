import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook />, href: "#", color: "hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/30" },
    { icon: <FaInstagram />, href: "#", color: "hover:text-pink-500 hover:bg-pink-500/10 hover:border-pink-500/30" },
    { icon: <FaTwitter />, href: "#", color: "hover:text-sky-400 hover:bg-sky-400/10 hover:border-sky-400/30" }
  ];

  const quickLinks = ["Home", "Destinations", "Services", "Packages", "Contact"];

  return (
    <footer className="relative bg-slate-990 border-t border-slate-900 bg-black text-white pt-16 pb-12 overflow-hidden">
      
      {/* Subtle Ambient Radial Backlight glow effect */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Upper Column Section Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900 items-start">
          
          {/* Left Column Brand Presentation Block */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-3xl font-black tracking-tight text-white">
              Travel<span className="text-blue-500">X</span>
            </h2>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm">
              Crafting unforgettable expeditions and premium tailored journeys to the world's most spectacular horizons.
            </p>
          </div>

          {/* Right Column Quick Site Links Layout Mapping */}
          <div className="md:col-span-7 flex flex-wrap md:justify-end gap-x-10 gap-y-4 items-center">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold tracking-wide text-slate-400">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors duration-200 block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Lower Alignment Section Row */}
        <div className="pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          
          {/* Trademark Copyright Label Block */}
          <p className="text-xs font-semibold text-slate-500 tracking-wide text-center md:text-left">
            &copy; {currentYear} TravelX. All Rights Reserved. Crafted for dreamers.
          </p>

          {/* Micro-Animated Premium Social Icon Ring Array */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl text-slate-400 transition-all duration-300 ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
