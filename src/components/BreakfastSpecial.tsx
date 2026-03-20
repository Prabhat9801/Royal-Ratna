import React from 'react';
import { motion } from 'framer-motion';

const breakfastItems = [
  {
    title: 'Cheese Omelette',
    img: '/images/Food/1563871793_1563871769777.jpg.webp'
  },
  {
    title: 'Chicken Keema Pav',
    img: '/images/Food/listicle_1730891901578_1cu9n_4235x2000.jpg'
  },
  {
    title: 'Signature Dish',
    img: '/images/Food/photo.avif'
  }
];

const BreakfastSpecial = () => {
  return (
    <section id="all-day-breakfast" className="bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">All Day Breakfast Comfort</h2>
          <div className="title-underline mx-auto" style={{ marginInline: 'auto' }}></div>
          <p className="section-subtitle">
            Kickstart your day or satisfy your mid-afternoon cravings with our signature egg specials, 
            Mumbai-style Keema Pav, and Raipur's best Bun Maska.
          </p>
        </div>
        
        <div className="menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {breakfastItems.map((item, index) => (
            <motion.div 
              className="breakfast-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <h3 className="breakfast-title">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreakfastSpecial;
