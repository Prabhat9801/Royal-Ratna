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
    <section id="gallery" className="section-dark">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">The Lounge Experience</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>
            Captured moments of art, coffee, and comfort.
          </p>
        </div>
        
        <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
          {images.map((src, i) => (
            <motion.div 
              className="gallery-card" 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              style={{ 
                position: 'relative', 
                height: '400px', 
                borderRadius: '16px', 
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <img src={src} alt="Lounge" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div 
                className="gallery-overlay"
                style={{ 
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  display: 'flex', alignItems: 'flex-end', padding: '30px',
                  opacity: 0, transition: '0.3s'
                }}
              >
                <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>Lounge Moment</h3>
              </div>
              <style dangerouslySetInnerHTML={{ __html: `
                .gallery-card:hover .gallery-overlay { opacity: 1 !important; }
              `}} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
