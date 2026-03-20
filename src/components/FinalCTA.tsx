import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="cta-overlay"></div>
      <div className="container text-center cta-content">
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="cta-title">Ready for Raipur's Best Lounge Vibe?</h2>
          <p className="cta-subtitle">
            Experience art, comfort, and amazing food. Visit The Living Room today for a cozy catch-up!
          </p>
          <div className="cta-btns">
             <a href="#menu" className="btn-primary" style={{ padding: '14px 34px' }}>View Full Menu</a>
             <a href="https://maps.google.com/?q=The+Living+Room+Cafe+Lounge+VIP+Road+Raipur" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '14px 34px' }}>
                Get Directions
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
