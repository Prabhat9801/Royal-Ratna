import React from 'react';
import { motion } from 'framer-motion';
import { Star, Paintbrush, Trees } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', alignItems: 'center', gap: '40px' }}>
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="trust-badges" style={{ marginBottom: '30px' }}>
            <motion.span 
              className="badge shimmer"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Star className="icon badge-icon" size={16} fill="currentColor" /> 3.9 Rating
            </motion.span>
            <motion.span className="badge">
              <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>TRENDING TODAY 🔥</span>
            </motion.span>
          </div>
          
          <h1 className="hero-title" style={{ fontSize: '5rem', marginBottom: '20px' }}>
            The Living Room<br/><span style={{ color: 'var(--accent)' }}>Cafe & Lounge</span>
          </h1>
          
          <p className="hero-subtitle" style={{ fontSize: '1.4rem', opacity: 0.9, marginBottom: '40px' }}>
            Beyond a Cafe. An Experience in Arts, Coffee & Premium Comfort.
          </p>
          
          <div className="hero-cta" style={{ display: 'flex', gap: '20px' }}>
            <a href="#menu" className="btn-primary shimmer">Explore Our Menu</a>
            <a href="#contact" className="btn-secondary">Book a Table</a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-floating-elements"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Main Floating Dish */}
          <motion.div
            className="floating"
            style={{ 
              width: '100%', 
              maxWidth: '450px',
              filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))'
            }}
          >
            <img 
              src="/images/Food/photo.avif" 
              alt="Floating Special" 
              style={{ width: '100%', height: 'auto', borderRadius: '50%', border: '8px solid var(--glass-panel)' }} 
            />
          </motion.div>
          
          {/* Accent Element (Coffee) */}
          <motion.div 
            className="floating"
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            style={{ 
              position: 'absolute', 
              bottom: '0', 
              left: '-20px', 
              width: '150px',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))'
            }}
          >
             <img src="/images/Food/1563871793_1563871769777.jpg.webp" alt="Accent" style={{ width: '100%', borderRadius: '50%' }} />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Sparkles/Steam placeholder if needed via CSS later */}
    </section>
  );
};

export default Hero;
