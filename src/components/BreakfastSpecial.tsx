import React from 'react';
import { motion } from 'framer-motion';

const breakfastItems = [
  {
    title: 'Chocolate Brownie Sundae',
    price: '₹249',
    desc: 'Warm brownie topped with artisanal vanilla bean ice cream and molten rich fudge.',
    img: '/images/Food/1563871793_1563871769777.jpg.webp',
    chefRecommended: false
  },
  {
    title: 'Chicken Keema Pav',
    price: '₹350',
    desc: 'Slow-cooked minced chicken with secret hand-ground spices and toasted buttered pav.',
    img: '/images/Food/listicle_1730891901578_1cu9n_4235x2000.jpg',
    chefRecommended: true
  },
  {
    title: 'Chocolate Freak Shake',
    price: '₹289',
    desc: 'A decadent masterpiece of premium cocoa, brownie crumbs, and velvet whipped cream.',
    img: '/images/Food/photo.avif',
    chefRecommended: false
  }
];

const BreakfastSpecial = () => {
  return (
    <section id="all-day-breakfast" className="breakfast-premium">
      <div className="container">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="section-title"
          >
            Signature Masterpieces
          </motion.h2>
          <div className="title-underline mx-auto" style={{ marginInline: 'auto' }}></div>
          <p className="section-subtitle">
            Indulge in our most loved flavors, crafted with passion and premium ingredients.
          </p>
        </div>
        
        <div className="breakfast-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', perspective: '1200px' }}>
          {breakfastItems.map((item, index) => (
            <motion.div 
              className="breakfast-card active-3d shimmer" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 6, 
                rotateY: 6,
                z: 50
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ 
                position: 'relative', 
                background: 'var(--glass-panel)', 
                backdropFilter: 'var(--glass-blur)', 
                border: 'var(--glass-border)', 
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                textAlign: 'left'
              }}
            >
              {item.chefRecommended && (
                <div className="chef-badge" style={{ position: 'absolute', top: '-15px', right: '15px', background: 'var(--gold-gradient)', color: 'var(--primary-base)', padding: '6px 16px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                  CHEF RECOMMENDED
                </div>
              )}
              <div className="floating-img-wrapper" style={{ overflow: 'hidden', borderRadius: '16px', height: '260px', marginBottom: '20px' }}>
                 <img src={item.img} alt={item.title} className="floating" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="card-info">
                <h3 className="breakfast-title" style={{ fontSize: '1.6rem', color: 'var(--accent)', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '20px', color: 'var(--text-white)', opacity: 0.8 }}>{item.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <span className="price-tag" style={{ background: 'rgba(200, 155, 60, 0.15)', border: '1px solid var(--accent)', padding: '6px 16px', borderRadius: '50px', color: 'var(--accent-glow)', fontWeight: 'bold' }}>{item.price}</span>
                   <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>Reserve Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreakfastSpecial;
