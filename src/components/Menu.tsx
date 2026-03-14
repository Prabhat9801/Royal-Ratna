import React from 'react';
import { motion } from 'framer-motion';

const menuData = {
  "South Indian": [
    { name: "Paper Dosa", price: "₹80" },
    { name: "Masala Dosa", price: "₹90" },
    { name: "Onion Masala Dosa", price: "₹100" },
    { name: "Pizza Dosa", price: "₹120" },
    { name: "Corn Dosa", price: "₹135" },
    { name: "Paneer Dosa", price: "₹149" },
    { name: "Cheese Corn Paneer Dosa", price: "₹170" }
  ],
  "Idly": [
    { name: "Plain Idly Sambhar", price: "₹90" },
    { name: "Dip Idly", price: "₹100" },
    { name: "Fried Idly", price: "₹130" }
  ],
  "Uttapam": [
    { name: "Plain", price: "₹90" },
    { name: "Onion", price: "₹100" },
    { name: "Tomato", price: "₹110" },
    { name: "Vegetable", price: "₹120" },
    { name: "Paneer", price: "₹160" },
    { name: "Cheese Corn Paneer", price: "₹180" }
  ],
  "Rice Bowls": [
    { name: "Chole Chawal", price: "₹90" },
    { name: "Sambhar Chawal", price: "₹90" },
    { name: "Yellow Dal Chawal", price: "₹90" },
    { name: "Veg Fried Rice", price: "₹100" },
    { name: "Paneer Fried Rice", price: "₹120" }
  ],
  "Thali": [
    { name: "Kashvi Thali", price: "₹95" },
    { name: "Manyawar Thali", price: "₹145" },
    { name: "Shree Ji Thali", price: "₹200" }
  ],
  "Beverages": [
    { name: "Cold Coffee", price: "₹80" },
    { name: "Iced Tea", price: "₹70" },
    { name: "Masala Cold Drink", price: "₹70" },
    { name: "Plain Lassi", price: "₹55" },
    { name: "Punjabi Lassi", price: "₹100" },
    { name: "Tea", price: "₹20" },
    { name: "Masala Tea", price: "₹25" }
  ]
};

const Menu = () => {
  return (
    <section id="menu" className="menu-category-section">
      <div className="container">
        <div className="text-center">
           <h2 className="section-title">Our Full Menu</h2>
           <div className="title-underline mx-auto" style={{ marginInline: 'auto' }}></div>
           <p className="section-subtitle">
             Explore our wide variety of premium vegetarian dishes, made fresh to order with love.
           </p>
        </div>
        
        {Object.entries(menuData).map(([category, items], catIndex) => (
          <div className="menu-category" key={category}>
            <motion.h3 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
              {category}
            </motion.h3>
            
            <div className="menu-list">
              {items.map((item, itemIndex) => (
                <motion.div 
                   className="menu-item-row" 
                   key={itemIndex}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
                >
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
