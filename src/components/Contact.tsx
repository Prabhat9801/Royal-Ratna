import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, UtensilsCrossed, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ background: 'var(--bg-main)', padding: '120px 0' }}>
      <div className="container">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '60px', alignItems: 'center' }}>
          <motion.div 
            className="location-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              backdropFilter: 'blur(10px)', 
              border: '1px solid rgba(200, 155, 60, 0.3)', 
              padding: '60px', 
              borderRadius: '24px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
            }}
          >
            <h2 className="section-title text-left" style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '30px' }}>Location</h2>
            
            <div className="details" style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <MapPin key="pin" style={{ color: 'var(--primary)' }} />
                <p style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>
                  VIP Road (Airport Road)<br/>Towards Phunder Chowk<br/>Raipur, Chhattisgarh 492001
                </p>
              </div>
              
              <div className="tags" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                {['Dine-in', 'Live Music', 'Garden Garden'].map(tag => (
                  <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 16px', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="contact-btns" style={{ display: 'flex', gap: '20px' }}>
              <a href="https://maps.google.com/?q=The+Living+Room+Cafe+Lounge+VIP+Road+Raipur" target="_blank" rel="noreferrer" className="btn-primary">
                Get Directions
              </a>
              <a href="tel:+919285555002" className="btn-secondary">
                Call Now
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-map-wrapper"
            style={{ 
              height: '550px', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              border: '1px solid rgba(255,255,255,0.1)',
              filter: 'grayscale(1) invert(0.9) contrast(1.2)'
            }}
          >
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.520421278166!2d81.7005406!3d21.218576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c313dfa74e5d%3A0xe7f920f666f44d!2sThe%20Living%20Room!5e0!3m2!1sen!2sin!4v1614234567890!5m2!1sen!2sin" 
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
