import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-accent" style={{ position: 'relative', overflow: 'hidden' }}>
      <div 
        className="parallax-bg" 
        style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundImage: "url('/images/Interior/awesome.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4
        }}
      ></div>
      <div className="hero-overlay" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h4 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '15px', fontSize: '0.9rem' }}>The Ambience</h4>
            <h2 className="section-title text-left" style={{ fontSize: '3.5rem', color: 'white', marginBottom: '30px' }}>Raipur's Social Sanctuary</h2>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '30px', lineHeight: '1.6' }}>
              Step into a space where every corner tells a story. From magical fairy lights to lush outdoor greenery, we offer a cozy, artsy nook designed for inspiration and comfort.
            </p>
            
            <div className="about-stats" style={{ display: 'flex', gap: '50px' }}>
              <div className="stat">
                <h3 style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: 900 }}>2017</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px' }}>Legacy</p>
              </div>
              <div className="stat">
                <h3 style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: 900 }}>4.5</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px' }}>Rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
             <img src="/images/Interior/the-living-room-cafe-raipur-ho-raipur-chhattisgarh-multicuisine-restaurants-tzeu0.avif" alt="Lounge Interior" style={{ width: '100%', height: '550px', objectFit: 'cover' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
