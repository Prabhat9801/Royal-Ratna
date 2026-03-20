import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="img-wrapper">
             <img src="/images/Interior/the-living-room-cafe-raipur-ho-raipur-chhattisgarh-multicuisine-restaurants-tzeu0.avif" alt="The Living Room Interior" className="about-img-main" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }} />
             <div className="img-accent"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title text-left">Raipur's Social Sanctuary Since 2017</h2>
          <div className="title-underline"></div>
          
          <p className="about-text">
            <strong>The Living Room Cafe & Lounge</strong> is more than just a place to eat; it's an experience. Nestled in the heart of Raipur, we've created a cozy, artsy nook where creativity meets comfort. Known for our magical fairy lights, lush outdoor garden, and vibrant lounge atmosphere.
          </p>
          
          <p className="about-text">
            Whether you're looking for a quiet morning coffee, a creative work session, or a vibrant weekend hangout with live music, our indoor and outdoor seating offers the perfect backdrop. We take pride in our welcoming environment and our curation of diverse, flavorful menu items.
          </p>
          
          <div className="about-features">
            <div className="feature">
              <h3>2017</h3>
              <p>Established</p>
            </div>
            <div className="feature">
              <h3>Artsy</h3>
              <p>Ambiance</p>
            </div>
            <div className="feature">
              <h3>3.9⭐</h3>
              <p>Customer Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
