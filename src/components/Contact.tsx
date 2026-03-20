import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, UtensilsCrossed, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-accent">
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info-card"
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              backdropFilter: 'blur(10px)', 
              padding: 'clamp(30px, 5vw, 60px)', 
              borderRadius: '24px', 
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}
          >
            <h4 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '15px', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)' }}>Visit the lounge</h4>
            <h2 className="section-title text-left">Where Raipur Meets Comfort</h2>
            
            <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <MapPin className="text-secondary" size={24} style={{ flexShrink: 0 }} />
                <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
                  VIP Road (Airport Road), Towards Phunder Chowk,<br/>Raipur, Chhattisgarh 492001
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-map-wrapper"
            style={{ 
              height: 'clamp(300px, 50vw, 550px)', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              border: '1px solid rgba(255,255,255,0.1)',
              filter: 'grayscale(1) invert(0.9) contrast(1.2)'
            }}
          >
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1409410401498!2d81.68370407526204!3d21.226258980472927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd2bdabe3d3b%3A0xc25e0f5f4ce3f19c!2sThe%20Living%20Room%20Cafe%20%26%20Lounge!5e0!3m2!1sen!2sin!4v1774023124704!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Google Map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
