import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DestinationCard from "./DestinationCard";
import paris from "../assets/paris.png";
import dubai from "../assets/dubai.png";
import istanbul from "../assets/intanbul.png";
import maldives from "../assets/maldives.png";
import bali from "../assets/bali.png";
import hunza from "../assets/hunza.png";

function Destinations() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = ["All", "Trending", "Popular", "Budget"];

  const destinations = [
    { id: 1, title: "Paris", country: "France", price: "$1200", image: paris, rating: "4.9" },
    { id: 2, title: "Dubai", country: "UAE", price: "$900", image: dubai, rating: "4.8" },
    { id: 3, title: "Hunza", country: "Pakistan", price: "$350", image: hunza, rating: "4.9" },
    { id: 4, title: "Bali", country: "Indonesia", price: "$1500", image: bali, rating: "4.7" },
    { id: 5, title: "Istanbul", country: "Turkey", price: "$1100", image: istanbul, rating: "4.8" },
    { id: 6, title: "Maldives", country: "Maldives", price: "$1800", image: maldives, rating: "5.0" }
  ];

  // Framer Motion layout variants
  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section id="destinations" className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Aesthetic Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full">
            Dream Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            Popular <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Destinations</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-md mx-auto text-sm md:text-base font-medium">
            Explore our handcrafted itineraries curated for ultimate cultural immersion and adventure.
          </p>
        </motion.div>

        {/* Clean Filter Tabs Interaction Component */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-2 mb-16 bg-slate-100/80 p-1.5 rounded-full max-w-xs sm:max-w-md mx-auto border border-slate-200/50 backdrop-blur-sm"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`relative text-xs sm:text-sm font-bold tracking-wide px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeFilter === tab ? "text-white" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {activeFilter === tab && (
                <motion.div 
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-blue-600 rounded-full shadow-md shadow-blue-600/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </motion.div>

        {/* Interactive Staggered Grid Container Layout */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {destinations.map((place) => (
            <DestinationCard
              key={place.id}
              image={place.image}
              title={place.title}
              country={place.country}
              price={place.price}
              rating={place.rating}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Destinations;
