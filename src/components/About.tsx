import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-accent" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Different background from hero */}
      <div 
        className="parallax-bg" 
        style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundImage: "url('/images/Interior/awesome (1).jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3
        }}
      ></div>
      {/* Radial gradient overlay - visually distinct from hero */}
      <div style={{ 
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
        background: 'radial-gradient(ellipse at 30% 50%, rgba(26, 18, 11, 0.85) 0%, rgba(15, 11, 8, 0.98) 70%)',
        zIndex: 1
      }}></div>

      {/* Decorative floating accent */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px', width: '350px', height: '350px',
        borderRadius: '50%', border: '1px solid rgba(200, 155, 60, 0.08)',
        zIndex: 1
      }}></div>
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px', width: '250px', height: '250px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(200, 155, 60, 0.06) 0%, transparent 70%)',
        zIndex: 1
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ 
              display: 'inline-block', color: 'var(--primary)', textTransform: 'uppercase', 
              letterSpacing: '4px', marginBottom: '15px', fontSize: '0.85rem', fontWeight: 600,
              borderBottom: '2px solid var(--primary)', paddingBottom: '8px'
            }}>The Ambience</span>
            
            <h2 className="section-title text-left" style={{ marginTop: '15px' }}>Raipur's Social Sanctuary</h2>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', marginBottom: '35px', lineHeight: '1.8' }}>
              Step into a space where every corner tells a story. From magical fairy lights to lush outdoor greenery, we offer a cozy, artsy nook designed for inspiration and comfort. Whether it's a quiet coffee or a lively catch-up, The Living Room is where Raipur comes alive.
            </p>
            
            <div className="about-stats" style={{ display: 'flex', gap: '20px', marginBottom: '35px', flexWrap: 'wrap' }}>
              <div className="stat" style={{ 
                background: 'rgba(255,255,255,0.04)', padding: 'clamp(16px, 3vw, 24px)', 
                borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)',
                textAlign: 'center', flex: '1 1 100px'
              }}>
                <Clock size={22} style={{ color: 'var(--primary)', marginBottom: '8px', display: 'inline-block' }} />
                <h3 style={{ color: 'var(--primary)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 900, lineHeight: 1 }}>2017</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '2px', marginTop: '6px' }}>Since</p>
              </div>
              <div className="stat" style={{ 
                background: 'rgba(255,255,255,0.04)', padding: 'clamp(16px, 3vw, 24px)', 
                borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)',
                textAlign: 'center', flex: '1 1 100px'
              }}>
                <Star size={22} style={{ color: 'var(--primary)', marginBottom: '8px', display: 'inline-block' }} />
                <h3 style={{ color: 'var(--primary)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 900, lineHeight: 1 }}>4.5</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '2px', marginTop: '6px' }}>Rating</p>
              </div>
              <div className="stat" style={{ 
                background: 'rgba(255,255,255,0.04)', padding: 'clamp(16px, 3vw, 24px)', 
                borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)',
                textAlign: 'center', flex: '1 1 100px'
              }}>
                <Users size={22} style={{ color: 'var(--primary)', marginBottom: '8px', display: 'inline-block' }} />
                <h3 style={{ color: 'var(--primary)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 900, lineHeight: 1 }}>30+</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '2px', marginTop: '6px' }}>Capacity</p>
              </div>
            </div>

            <a href="tel:+919285555002" className="btn-primary" style={{ padding: '14px 36px' }}>Book a Table</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="about-image-wrapper"
            style={{ 
              borderRadius: '24px', overflow: 'hidden', 
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)', 
              border: '1px solid rgba(255,255,255,0.1)',
              position: 'relative'
            }}
          >
            {/* Gold top accent bar */}
            <div style={{ 
              position: 'absolute', top: 0, left: '10%', right: '10%', height: '3px', 
              background: 'var(--gold-gradient)', borderRadius: '0 0 4px 4px', zIndex: 2 
            }}></div>
             <img 
               src="/images/Interior/the-living-room-cafe-raipur-ho-raipur-chhattisgarh-multicuisine-restaurants-tzeu0.avif" 
               alt="Lounge Interior" 
               style={{ width: '100%', height: 'auto', maxHeight: '550px', objectFit: 'cover', display: 'block' }} 
             />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
