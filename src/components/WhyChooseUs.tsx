import React from 'react';
import { Leaf, Home, DollarSign, Smile, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: <Leaf size={40} />, title: 'Fresh Ingredients', desc: 'Sourced daily to ensure maximum flavor and quality.' },
  { icon: <Home size={40} />, title: 'Homely Taste', desc: 'Food that reminds you of delicious homemade meals.' },
  { icon: <DollarSign size={40} />, title: 'Affordable Pricing', desc: 'Premium dining experience that fits your budget.' },
  { icon: <Smile size={40} />, title: 'Friendly Service', desc: 'A warm, welcoming environment for families and friends.' },
  { icon: <Coffee size={40} />, title: 'Quick Breakfast & Snacks', desc: 'Perfect spot for a fast, delicious, and fulfilling meal.' }
];

const WhyChooseUs = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="title-underline mx-auto" style={{ marginInline: 'auto' }}></div>
          <p className="section-subtitle">
            What makes Royal Ratna the preferred destination for food lovers in Raipur
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, i) => (
            <motion.div 
              className="feature-card" 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
