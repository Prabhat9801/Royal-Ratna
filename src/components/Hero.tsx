import React from 'react';
import { motion } from 'framer-motion';
import { Star, Paintbrush, Trees } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section-hero" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', padding: 0 }}>
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
          background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.2))' 
        }}
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid" style={{ alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 15px', borderRadius: '50px', fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>⭐ 3.9 Rating</span>
              <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px' }}>VIBE OF RAIPUR 🔥</span>
            </div>
            
            <h1 style={{ lineHeight: '1', marginBottom: '30px', fontWeight: 900, color: 'white' }}>
              The Living Room<br/><span style={{ color: 'var(--primary)' }}>Cafe & Lounge</span>
            </h1>
            
            <p className="section-subtitle" style={{ marginBottom: '45px', color: 'white' }}>
              Beyond a Cafe. An Experience in Arts, Coffee & Premium Comfort. Discover the cozy soul of Raipur.
            </p>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#menu" className="btn-primary">Explore Menu</a>
              <a href="#contact" className="btn-secondary">Get Directions</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ position: 'relative' }}
          >
             <div style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '100%', border: '1px solid rgba(255,255,255,0.1)' }}>
               <img src="/images/Food/photo.avif" alt="Special Shake" style={{ width: '100%', borderRadius: '100%', boxShadow: '0 30px 60px rgba(0,0,0,0.6)', filter: 'brightness(1.1)' }} />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
