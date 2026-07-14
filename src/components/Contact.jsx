import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      
      {/* Soft Ambient Background Animations */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-12 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none"
      ></motion.div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            Let's Plan Your <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Next Adventure</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-md mx-auto font-medium text-sm md:text-base">
            Have questions about packages or destinations? Drop us a line and our travel experts will map it out for you.
          </p>
        </motion.div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Slides from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
            className="lg:col-span-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl shadow-blue-600/10 relative overflow-hidden group"
          >
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
            
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">Contact Information</h3>
              <p className="text-blue-100 text-sm font-medium leading-relaxed">Reach out directly if you prefer standard channels.</p>
              
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4 group/item cursor-pointer">
                  <div className="p-3 bg-white/10 rounded-xl group-hover/item:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <span className="text-sm font-medium text-blue-50">+1 (555) 019-2834</span>
                </div>
                
                <div className="flex items-center gap-4 group/item cursor-pointer">
                  <div className="p-3 bg-white/10 rounded-xl group-hover/item:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <span className="text-sm font-medium text-blue-50">hello@travelx.com</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 text-xs text-blue-200 font-medium tracking-wide">
              Response time: Under 2 hours
            </div>
          </motion.div>

          {/* Right Column Form: Slides from Right */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <form className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl p-8 md:p-10 flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    className="peer w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 pt-6 pb-2 text-slate-800 font-medium text-sm outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                  <label className="absolute left-5 top-4 text-xs font-semibold text-slate-400 pointer-events-none transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-semibold">
                    Your Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    required
                    placeholder=" "
                    className="peer w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 pt-6 pb-2 text-slate-800 font-medium text-sm outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                  <label className="absolute left-5 top-4 text-xs font-semibold text-slate-400 pointer-events-none transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-semibold">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  rows="4"
                  required
                  placeholder=" "
                  className="peer w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 pt-6 pb-2 text-slate-800 font-medium text-sm outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 resize-none"
                ></textarea>
                <label className="absolute left-5 top-4 text-xs font-semibold text-slate-400 pointer-events-none transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-semibold">
                  Your Message
                </label>
              </div>

              <div className="flex justify-end mt-2">
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </motion.button>
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;

