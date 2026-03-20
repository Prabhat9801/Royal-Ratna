import React from 'react';
import { motion } from 'framer-motion';

const menuData = {
  "All Day Breakfast": [
    { name: "Cheese Omelette", price: "₹209" },
    { name: "Masala Omelette", price: "₹209" },
    { name: "Anda Keema Ghotala & Pav", price: "₹209" },
    { name: "Chicken Keema With Pav", price: "₹350" }
  ],
  "Combos & Meals": [
    { name: "Dal Khichdi Combo", price: "₹309" },
    { name: "Veg Manchurian & Fried Rice", price: "₹375" },
    { name: "Chilli Paneer Meal", price: "₹425" },
    { name: "Chilli Chicken & Fried Rice", price: "₹450" },
    { name: "Chicken Khichdi Meal", price: "₹375" }
  ],
  "Platters (Sharing Boards)": [
    { name: "Veg Sharing Board", price: "₹849" },
    { name: "Chinese Platter Veg", price: "₹899" },
    { name: "Veg Kebab Platter (20 Pcs)", price: "₹1,450" }
  ],
  "Soups & Salads": [
    { name: "Cream Of Mushroom Soup", price: "₹275" },
    { name: "Veg Manchow / Hot & Sour", price: "₹185" },
    { name: "Chicken Hot & Sour Soup", price: "₹210" },
    { name: "Veg Caesar Salad", price: "₹309" },
    { name: "Chicken Greek Salad", price: "₹329" }
  ],
  "Starters": [
    { name: "Crispy Lotus Root Honey Chilli", price: "₹299" },
    { name: "Paneer Chilli", price: "₹299" },
    { name: "Honey Chilli Potato", price: "₹299" },
    { name: "Crispy Lovely Corn", price: "₹289" },
    { name: "Kung Pao Chicken", price: "₹339" },
    { name: "Chicken Drums Of Heaven", price: "₹399" },
    { name: "Fish Chilli", price: "₹339" }
  ]
};

const Menu = () => {
  return (
    <section id="menu" className="menu-category-section">
      <div className="container">
        <div className="text-center">
           <h2 className="section-title">The Living Room Menu</h2>
           <div className="title-underline mx-auto" style={{ marginInline: 'auto' }}></div>
           <p className="section-subtitle">
             From all-day breakfast comfort to exotic starters and sharing boards, our menu is a curation of Raipur's finest flavors.
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
