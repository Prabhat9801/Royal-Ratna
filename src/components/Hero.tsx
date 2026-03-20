import React from 'react';
import { motion } from 'framer-motion';
import { Star, Paintbrush, Trees } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', background: 'var(--bg-main)' }}>
      <div 
        className="hero-media"
        style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundImage: "url('/images/Interior/awesome.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center'
        }}
      ></div>
      <div 
        className="hero-overlay" 
        style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          background: 'linear-gradient(to right, rgba(15,11,8,0.9) 30%, rgba(15,11,8,0.6) 60%, rgba(15,11,8,0.3) 100%)' 
        }}
      ></div>

      <div className="container hero-content" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '800px' }}>
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ color: 'white' }}
          >
            <div className="trust-badges" style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
              <span style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 15px', borderRadius: '50px', fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.1)' }}>⭐ 3.9 Rating</span>
              <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '1px' }}>TRENDING TODAY 🔥</span>
            </div>
            
            <h1 style={{ fontSize: '5.5rem', lineHeight: '1', marginBottom: '20px', fontWeight: 900 }}>
              The Living Room<br/><span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Cafe & Lounge</span>
            </h1>
            
            <p style={{ fontSize: '1.4rem', opacity: 0.8, marginBottom: '40px', maxWidth: '600px' }}>
              Experience the perfect blend of arts, comfort, and premium coffee in the heart of Raipur.
            </p>
            
            <div className="hero-cta" style={{ display: 'flex', gap: '20px' }}>
              <a href="#menu" className="btn-primary">Explore Menu</a>
              <a href="#contact" className="btn-secondary">Book a Table</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
