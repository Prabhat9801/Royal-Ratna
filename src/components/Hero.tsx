import React from 'react';
import { motion } from 'framer-motion';
import { Star, LeafyGreen, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="trust-badges">
            <span className="badge"><Star className="icon badge-icon" size={16} fill="currentColor" /> 4.9 Rating</span>
            <span className="badge"><LeafyGreen className="icon badge-icon" size={16} /> Pure Vegetarian</span>
            <span className="badge"><ShieldCheck className="icon badge-icon" size={16} /> Women Owned</span>
          </div>
          
          <h1 className="hero-title">Royal Ratna<br/>A Gem of Taste</h1>
          
          <p className="hero-subtitle">
            Premium Vegetarian Food at Everyday Prices
          </p>
          
          <div className="hero-cta">
            <a href="#menu" className="btn-primary">View Menu</a>
            <a href="https://maps.google.com/?q=Royal+Ratna+Premium+Veg+Restaurant+Raipur" target="_blank" rel="noreferrer" className="btn-secondary">Get Directions</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
