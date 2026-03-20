import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = {
  "Breakfast": [
    { name: "Cheese Omelette", price: "₹209", desc: "Classic fluffy omelette with premium melted cheese." },
    { name: "Masala Omelette", price: "₹209", desc: "Spiced with green chillies, onions, and coriander." },
    { name: "Anda Keema Pav", price: "₹209", desc: "Mumbai style egg keema served with buttered pav." },
    { name: "Chicken Keema Pav", price: "₹350", desc: "Slow cooked minced chicken with aromatic spices." }
  ],
  "Meals": [
    { name: "Dal Khichdi Combo", price: "₹309", desc: "Comforting dal khichdi served with papad and pickle." },
    { name: "Veg Manchurian & Rice", price: "₹375", desc: "Chilli garlic fried rice with veg manchurian balls." },
    { name: "Chilli Paneer Meal", price: "₹425", desc: "Paneer cubes in spicy soy sauce with choice of rice/noodles." },
    { name: "Chilli Chicken Meal", price: "₹450", desc: "Spicy chicken stir fry served with stir-fry rice." }
  ],
  "Starters": [
    { name: "Crispy Lotus Root", price: "₹299", desc: "Honey chilli glazed crunchy lotus stem." },
    { name: "Honey Chilli Potato", price: "₹299", desc: "Sweet and spicy crispy potato fingers." },
    { name: "Drums Of Heaven", price: "₹399", desc: "Lollipop style spicy chicken wings." },
    { name: "Fish Chilli", price: "₹339", desc: "Basa fish tossed in oyster and chilli sauce." }
  ]
};

const Menu = () => {
  const [activeTab, setActiveTab] = React.useState("Breakfast");

  return (
    <section id="menu" className="menu-category-section">
      <div className="container">
        <div className="text-center">
           <h2 className="section-title">The Living Room Menu</h2>
           <div className="title-underline mx-auto" style={{ marginInline: 'auto' }}></div>
           <p className="section-subtitle">
             A curation of Raipur's finest flavors. Choose your mood.
           </p>
        </div>

        <div className="category-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '50px' }}>
          {Object.keys(menuData).map((cat) => (
            <button
              key={cat}
              className={`btn-outline-primary ${activeTab === cat ? 'active' : ''}`}
              style={{ 
                background: activeTab === cat ? 'var(--primary)' : 'transparent',
                color: activeTab === cat ? 'var(--white)' : 'var(--primary)'
              }}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="menu-list"
          >
            {menuData[activeTab].map((item, i) => (
              <motion.div 
                 className="menu-item-row" 
                 key={i}
                 whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="item-details">
                  <span className="menu-item-name" style={{ display: 'block', marginBottom: '4px' }}>{item.name}</span>
                  <span className="menu-item-desc" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</span>
                </div>
                <span className="menu-item-price">{item.price}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
