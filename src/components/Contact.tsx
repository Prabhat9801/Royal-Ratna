import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, UtensilsCrossed, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-premium">
      <div className="container">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '60px', alignItems: 'center' }}>
          <motion.div 
            className="contact-info-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ 
              background: 'var(--glass-panel)', 
              backdropFilter: 'var(--glass-blur)', 
              border: 'var(--glass-border)', 
              padding: '60px', 
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-3d)'
            }}
          >
            <h2 className="section-title text-left" style={{ fontSize: '3rem', color: 'var(--accent)' }}>Visit the Lounge</h2>
            
            <div className="location-details" style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--accent)' }}>⭐ 3.9 Rating</span>
                <span style={{ height: '20px', width: '1px', background: 'var(--accent)', opacity: 0.3 }}></span>
                <span style={{ color: 'var(--accent-glow)' }}>Open until 12:30 AM</span>
              </div>
              
              <div className="contact-item" style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <MapPin className="contact-icon" style={{ color: 'var(--accent)' }} />
                <p style={{ color: 'var(--text-white)', fontSize: '1.1rem' }}>
                  VIP Road (Airport Road)<br/>Towards Phunder Chowk<br/>Raipur, Chhattisgarh 492001
                </p>
              </div>
              
              <div className="lounge-tags" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '40px' }}>
                {['Dine-in', 'Live Music', 'Outdoor Garden', 'Artsy Decor'].map(tag => (
                  <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-white)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="contact-btns" style={{ display: 'flex', gap: '20px' }}>
              <a href="https://maps.google.com/?q=The+Living+Room+Cafe+Lounge+VIP+Road+Raipur" target="_blank" rel="noreferrer" className="btn-primary shimmer">
                Get Directions
              </a>
              <a href="#booking" className="btn-secondary">
                Book a Table
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-map-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ 
              height: '600px', 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden', 
              border: 'var(--glass-border)',
              filter: 'grayscale(1) invert(0.9) contrast(1.2)' /* Dark theme filter */
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.520421278166!2d81.7005406!3d21.218576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c313dfa74e5d%3A0xe7f920f666f44d!2sThe%20Living%20Room!5e0!3m2!1sen!2sin!4v1614234567890!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Google Map Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
