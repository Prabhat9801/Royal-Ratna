import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/Interior/awesome.jpg',
  '/images/Food/listicle_1730891901578_1cu9n_4235x2000.jpg',
  '/images/Interior/awesome (1).jpg',
  '/images/Food/1563871793_1563871769777.jpg.webp',
  '/images/Interior/the-living-room-cafe-raipur-ho-raipur-chhattisgarh-multicuisine-restaurants-tzeu0.avif',
  '/images/Food/photo.avif',
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">The Lounge Experience</h2>
          <div className="title-underline mx-auto" style={{ marginInline: 'auto' }}></div>
          <p className="section-subtitle">A glimpse into our artsy decor, magical garden, and vibrant atmosphere.</p>
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
              <img src={src} alt="The Living Room Experience" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
