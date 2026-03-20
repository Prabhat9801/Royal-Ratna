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
    <section id="gallery" className="section-warm">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Lounge Experience</h2>
          <p className="section-subtitle">
            Captured moments of art, coffee, and comfort.
          </p>
        </div>
        
        <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '20px' }}>
          {images.map((src, i) => (
            <motion.div 
              className="gallery-card floating-card-premium" 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              style={{ cursor: 'pointer' }}
            >
              <img src={src} alt="Lounge" className="card-img-premium" />
              <div 
                className="gallery-overlay"
                style={{ 
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  display: 'flex', alignItems: 'flex-end', padding: '20px',
                  opacity: 0, transition: '0.3s'
                }}
              >
                <h3 style={{ color: 'var(--primary)', fontSize: '1rem' }}>Indoor Aesthetic</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
