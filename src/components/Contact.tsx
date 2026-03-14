import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, UtensilsCrossed, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-left">Location & Contact</h2>
            <div className="title-underline mb-4"></div>
            
            <p className="contact-desc">
              Come and experience Raipur's favorite vegetarian dining. We are centrally located and easy to find!
            </p>
            
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div>
                <h5>Address</h5>
                <p>280/6 Mahadev Ghat Road<br/>Opposite Punjab National Bank<br/>Sunder Nagar, Raipur<br/>Chhattisgarh 492013</p>
              </div>
            </div>
            
            <div className="dining-options">
               <div className="option"><CheckCircle2 size={18} color="var(--primary)" /> Dine-In</div>
               <div className="option"><CheckCircle2 size={18} color="var(--primary)" /> Drive-Through</div>
               <div className="option"><CheckCircle2 size={18} color="var(--primary)" /> Delivery</div>
            </div>
            
            <div className="contact-btns">
              <a href="https://maps.google.com/?q=Royal+Ratna+Premium+Veg+Restaurant+Raipur" target="_blank" rel="noreferrer" className="btn-primary" style={{ width: '100%', marginBottom: '10px' }}>
                Get Directions
              </a>
              <a href="tel:+910000000000" className="btn-outline-primary" style={{ width: '100%' }}>
                Call Now
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-map"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="map-embed-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.520421278166!2d81.6065406!3d21.2335198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE0JzAwLjciTiA4McKwMzYnMjMuNiJF!5e0!3m2!1sen!2sin!4v1614234567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Google Map Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
