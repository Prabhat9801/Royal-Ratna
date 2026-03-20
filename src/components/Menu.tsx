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
    <section id="menu" className="menu-premium" style={{ background: 'var(--primary-base)', padding: '120px 0' }}>
      <div className="container">
        <div className="text-center">
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '10px' }}>Discover flavors</h4>
             <h2 className="section-title" style={{ color: 'var(--text-white)', fontSize: '4rem' }}>The Curated Menu</h2>
             <div className="title-underline mx-auto" style={{ marginInline: 'auto' }}></div>
           </motion.div>
        </div>

        <div className="category-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '60px' }}>
          {Object.keys(menuData).map((cat) => (
            <button
              key={cat}
              className={`btn-shimmer ${activeTab === cat ? 'active' : ''}`}
              style={{ 
                background: activeTab === cat ? 'var(--gold-gradient)' : 'transparent',
                color: activeTab === cat ? 'var(--primary-base)' : 'var(--accent)',
                border: activeTab === cat ? 'none' : '1px solid var(--accent)',
                padding: '12px 30px',
                borderRadius: '50px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="menu-list"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
              gap: '20px' 
            }}
          >
            {menuData[activeTab].map((item, i) => (
              <motion.div 
                 className="menu-item-row-premium active-3d" 
                 key={i}
                 whileHover={{ x: 15, scale: 1.02 }}
                 style={{ 
                   background: 'var(--glass-panel)', 
                   border: 'var(--glass-border)', 
                   padding: '24px', 
                   borderRadius: '16px', 
                   display: 'flex', 
                   justifyContent: 'space-between', 
                   alignItems: 'center',
                   cursor: 'pointer'
                 }}
              >
                <div className="item-details">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span className="menu-item-name" style={{ fontSize: '1.2rem', color: 'var(--text-white)', fontWeight: 'bold' }}>{item.name}</span>
                    {i === 0 && <span style={{ fontSize: '0.65rem', background: 'var(--highlight)', color: 'white', padding: '2px 8px', borderRadius: '4px' }}>POPULAR</span>}
                  </div>
                  <span className="menu-item-desc" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>{item.desc}</span>
                </div>
                <div className="item-price" style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '1.1rem', color: 'var(--accent)', fontWeight: '800' }}>{item.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
