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
            <h2 className="section-title text-white">Host Your Small Celebrations With Us</h2>
            <div className="title-underline mx-auto" style={{ marginInline: 'auto', backgroundColor: 'var(--secondary)' }}></div>
            
            <p className="section-subtitle text-white mt-4" style={{ maxWidth: '600px', fontSize: '1.2rem' }}>
              Royal Ratna offers a warm, inviting space for small gatherings including <strong>Kitty Parties</strong> and <strong>Birthday Parties</strong> for up to <strong>25 people</strong>. Let us make your special occasion delicious and memorable!
            </p>
            
            <a href="tel:+910000000000" className="btn-secondary" style={{ marginTop: '20px' }}>
              Book Your Party
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartyBookings;
