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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="trust-badges">
            <span className="badge"><Star className="icon badge-icon" size={16} fill="currentColor" /> 3.9 Rating</span>
            <span className="badge"><Paintbrush className="icon badge-icon" size={16} /> Artsy Decor</span>
            <span className="badge"><Trees className="icon badge-icon" size={16} /> Outdoor Garden</span>
          </div>
          
          <h1 className="hero-title">The Living Room<br/>Cafe & Lounge</h1>
          
          <p className="hero-subtitle">
            Arts, Coffee, and Comfort. Our cozy nook has been Raipur's favorite social spot since 2017.
          </p>
          
          <div className="hero-cta">
            <a href="#menu" className="btn-primary">View Menu</a>
            <a href="https://maps.google.com/?q=The+Living+Room+Cafe+Lounge+VIP+Road+Raipur" target="_blank" rel="noreferrer" className="btn-secondary">Get Directions</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
