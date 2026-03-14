import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* We will just use the food meal image as an abstract representation if we don't have interior */}
          <div className="img-wrapper">
             <img src="/images/veg_meal_1773510860161.png" alt="Delicious Indian Food" className="about-img-main" />
             <div className="img-accent"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title text-left">A Taste of Home in the Heart of Raipur</h2>
          <div className="title-underline"></div>
          
          <p className="about-text">
            <strong>Royal Ratna Premium Veg Restaurant</strong> is known for serving fresh, delicious vegetarian meals prepared with care and quality ingredients. Our goal is simple — make every guest feel at home while enjoying food that is both tasty and affordable.
          </p>
          
          <p className="about-text">
            Whether you're visiting for breakfast, snacks, or a quick meal, Royal Ratna offers a welcoming environment with friendly service and satisfying flavors. We take pride in our identity as a women-owned business that serves food which feels just like "ghar ka khana".
          </p>
          
          <div className="about-features">
            <div className="feature">
              <h3>100%</h3>
              <p>Vegetarian</p>
            </div>
            <div className="feature">
              <h3>Fresh</h3>
              <p>Ingredients</p>
            </div>
            <div className="feature">
              <h3>4.9⭐</h3>
              <p>Customer Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
