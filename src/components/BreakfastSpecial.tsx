import React from 'react';
import { motion } from 'framer-motion';

const breakfastItems = [
  {
    title: 'Bun Makkhan',
    img: '/images/bun_makkhan_1773510607729.png'
  },
  {
    title: 'Masala Dosa',
    img: '/images/veg_meal_1773510860161.png' /* Placeholder */
  },
  {
    title: 'Pizza Dosa',
    img: '/images/pizza_dosa_1773510499796.png'
  },
  {
    title: 'Grilled Sandwich',
    img: '/images/paneer_sandwich_1773510535852.png'
  },
  {
    title: 'Chai',
    img: '/images/buttermilk_1773510831401.png' /* Placeholder for Chai */
  }
];

const BreakfastSpecial = () => {
  return (
    <section id="breakfast" className="bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Raipur's Favorite Breakfast Spot</h2>
          <div className="title-underline mx-auto" style={{ marginInline: 'auto' }}></div>
          <p className="section-subtitle">
            Start your day right with our delicious, freshly prepared morning specials. 
            From crispy dosas to hot chai, we have everything to make your morning perfect.
          </p>
        </div>
        
        <div className="menu-grid">
          {breakfastItems.map((item, index) => (
            <motion.div 
              className="breakfast-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img src={item.img} alt={item.title} className="breakfast-img" />
              <h3 className="breakfast-title">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreakfastSpecial;
