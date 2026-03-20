import React from 'react';
import { motion } from 'framer-motion';

const breakfastItems = [
  {
    title: 'Chocolate Brownie Sundae',
    price: '₹249',
    desc: 'Warm brownie with vanilla ice cream & chocolate drizzle.',
    img: '/images/Food/1563871793_1563871769777.jpg.webp',
    label: ''
  },
  {
    title: 'Chicken Keema Pav',
    price: '₹350',
    desc: 'Spicy minced chicken served with butter pav.',
    img: '/images/Food/listicle_1730891901578_1cu9n_4235x2000.jpg',
    label: 'popular'
  },
  {
    title: 'Chocolate Freak Shake',
    price: '₹289',
    desc: 'Loaded chocolate shake with toppings & cream.',
    img: '/images/Food/photo.avif',
    label: ''
  }
];

const BreakfastSpecial = () => {
  return (
    <section id="all-day-breakfast" className="section-brown">
      <div className="container">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
            style={{ color: 'var(--primary)', fontSize: '3.5rem', marginBottom: '10px' }}
          >
            Signature Dishes
          </motion.h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)', marginBottom: '60px' }}>
            Handpicked favorites from our curated kitchen.
          </p>
        </div>
        
        <div className="breakfast-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {breakfastItems.map((item, index) => (
            <motion.div 
              className="food-card-premium" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ 
                background: 'var(--bg-card)', 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden',
                border: '1px solid rgba(200, 155, 60, 0.1)'
              }}
            >
              <div className="img-holder" style={{ height: '280px', position: 'relative' }}>
                 <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 {item.label && (
                   <span style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--accent)', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>
                     {item.label.toUpperCase()}
                   </span>
                 )}
              </div>
              <div className="card-body" style={{ padding: '30px' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '25px' }}>{item.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <span style={{ fontSize: '1.3rem', color: 'white', fontWeight: 'bold' }}>{item.price}</span>
                   <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.75rem' }}>Order Now</button>
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
