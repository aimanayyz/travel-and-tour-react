import React from 'react';
import { motion } from 'framer-motion';

function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Ali Ahmed",
      role: "Verified Explorer",
      review: "Amazing trip! Everything was perfectly organized from flights to accommodations. Will definitely book again.",
      initials: "AA",
      rating: 5
    },
    {
      id: 2,
      name: "Sara Khan",
      role: "Solo Traveler",
      review: "Best travel experience I've ever had. The local insights shared by the team completely made the trip unforgettable.",
      initials: "SK",
      rating: 5
    },
    {
      id: 3,
      name: "John Smith",
      role: "Adventure Enthusiast",
      review: "Professional guides and excellent customer service. They handled a sudden schedule change seamlessly.",
      initials: "JS",
      rating: 5
    }
  ];

  // Animation variants for staggered scroll entry
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <section id="testimonials" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Animated Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full">
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            What Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Travelers Say</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-md mx-auto text-sm md:text-base font-medium">
            Real stories from real adventurers who explored the world with TravelX.
          </p>
        </motion.div>

        {/* Testimonials Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgb(226 232 240 / 0.8), 0 8px 10px -6px rgb(226 232 240 / 0.8)",
                backgroundColor: "#ffffff"
              }}
              className="group relative bg-slate-50/60 border border-slate-100 rounded-3xl p-8 transition-colors duration-300 flex flex-col justify-between h-full cursor-pointer"
            >
              <span className="absolute top-4 right-6 text-7xl font-serif text-blue-600/10 group-hover:text-blue-600/20 transition-colors pointer-events-none select-none">
                “
              </span>

              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-slate-600 text-[15px] leading-relaxed font-medium mb-6 italic">
                  "{review.review}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-blue-500/20"
                >
                  {review.initials}
                </motion.div>
                
                <div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {review.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mt-0.5">
                    {review.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;
