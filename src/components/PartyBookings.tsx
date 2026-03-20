import React from 'react';
import { motion } from 'framer-motion';

const PartyBookings = () => {
  return (
    <section className="party-section">
      <div className="container party-content">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-white">Celebrate in Raipur's Favorite Lounge</h2>
            <div className="title-underline mx-auto" style={{ marginInline: 'auto', backgroundColor: 'var(--secondary)' }}></div>
            
            <p className="section-subtitle text-white mt-4" style={{ maxWidth: '600px', fontSize: '1.2rem' }}>
              The Living Room offers a vibrant space for gatherings. From <strong>indoor artsy vibes</strong> to <strong>magical garden parties</strong> with live music. Perfect for birthdays and kitty parties for up to <strong>30 people</strong>.
            </p>
            
            <a href="tel:+919285555002" className="btn-secondary" style={{ marginTop: '20px' }}>
              Book Your Party
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartyBookings;
