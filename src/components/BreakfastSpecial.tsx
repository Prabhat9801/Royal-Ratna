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
    <section id="all-day-breakfast" className="section-light">
      <div className="container">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            The Signature Brunch
          </motion.h2>
          <p className="section-subtitle">Hand-picked favorites from our curated kitchen.</p>
        </div>
        
        <div className="breakfast-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {breakfastItems.map((item, index) => (
            <motion.div 
              className="food-card-white" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ 
                background: 'white', 
                borderRadius: '20px', 
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.03)'
              }}
            >
              <div className="img-holder" style={{ position: 'relative' }}>
                 <img src={item.img} alt={item.title} className="card-img-premium" />
                 {item.label && (
                   <span style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>
                     {item.label.toUpperCase()}
                   </span>
                 )}
              </div>
              <div className="card-body" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#1A1A1A', fontWeight: 'bold' }}>{item.title}</h3>
                  <span style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 'bold' }}>{item.price}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '25px', lineHeight: '1.6' }}>{item.desc}</p>
                <button className="btn-primary" style={{ width: '100%', padding: '12px' }}>Order Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreakfastSpecial;
