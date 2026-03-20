import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-cinematic" style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '100px 0', overflow: 'hidden' }}>
      {/* Immersive Background */}
      <div 
        className="parallax-bg" 
        style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '120%', 
          backgroundImage: "url('/images/Interior/awesome.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center', z_index: -1,
          transform: 'translateY(-10%)'
        }}
      ></div>
      <div className="hero-overlay" style={{ background: 'linear-gradient(to right, rgba(26, 18, 11, 0.9), rgba(26, 18, 11, 0.4))' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, filter: 'blur(10px)', x: -50 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="about-glass-card"
            style={{ 
              background: 'var(--glass-panel)', 
              backdropFilter: 'var(--glass-blur)', 
              padding: '60px', 
              borderRadius: 'var(--radius-lg)', 
              border: 'var(--glass-border)' 
            }}
          >
            <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '15px', fontSize: '0.9rem' }}>The Ambience</h4>
            <h2 className="section-title text-left" style={{ fontSize: '3.5rem', color: 'var(--text-white)', marginBottom: '30px' }}>Experience Raipur's Social Sanctuary</h2>
            
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '20px' }}>
              Step into a space where every corner tells a story. From magical fairy lights to lush outdoor greenery, we offer a cozy, artsy nook designed for inspiration and comfort.
            </p>
            
            <div className="about-stats" style={{ display: 'flex', gap: '40px', marginTop: '40px' }}>
              <div className="stat">
                <h3 style={{ color: 'var(--accent)', fontSize: '2.5rem' }}>Est. 2017</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Legacy of Taste</p>
              </div>
              <div className="stat">
                <h3 style={{ color: 'var(--accent)', fontSize: '2.5rem' }}>4.5/5</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Lounge Vibe</p>
              </div>
            </div>
          </motion.div>

          {/* This side left empty for cinematic atmospheric feel or a secondary image if needed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '100%', border: 'var(--glass-border)' }}
          >
             <img src="/images/Interior/the-living-room-cafe-raipur-ho-raipur-chhattisgarh-multicuisine-restaurants-tzeu0.avif" alt="Lounge Interior" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
