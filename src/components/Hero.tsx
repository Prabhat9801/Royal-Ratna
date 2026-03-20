import React from 'react';
import { motion } from 'framer-motion';
import { Star, Paintbrush, Trees } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="trust-badges">
            <motion.span 
              className="badge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Star className="icon badge-icon" size={16} fill="currentColor" /> 3.9 Rating
            </motion.span>
            <motion.span 
              className="badge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Paintbrush className="icon badge-icon" size={16} /> Artsy Decor
            </motion.span>
          </div>
          
          <h1 className="hero-title">The Living Room<br/>Cafe & Lounge</h1>
          
          <p className="hero-subtitle">
            Arts, Coffee & Comfort
          </p>
          
          <div className="hero-cta">
            <a href="#menu" className="btn-primary">View Menu</a>
            <a href="#contact" className="btn-secondary">Book Table</a>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Sparkles/Steam placeholder if needed via CSS later */}
    </section>
  );
};

export default Hero;
