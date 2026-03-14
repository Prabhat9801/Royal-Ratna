import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/veg_meal_1773510860161.png',
  '/images/pizza_dosa_1773510499796.png',
  '/images/paneer_sandwich_1773510535852.png',
  '/images/bun_makkhan_1773510607729.png',
  '/images/buttermilk_1773510831401.png',
  '/images/hero_bg_1773510457863.png',
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">A Look Inside</h2>
          <div className="title-underline mx-auto" style={{ marginInline: 'auto' }}></div>
          <p className="section-subtitle">Experience the ambiance of Royal Ratna and our freshly prepared meals.</p>
        </div>
        
        <div className="gallery-grid">
          {images.map((src, i) => (
            <motion.div 
              className="gallery-item" 
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <img src={src} alt={`Royal Ratna Gallery ${i+1}`} className="gallery-img" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
