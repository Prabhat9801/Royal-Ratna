import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    text: "Excellent food, a very beautiful restaurant, totally worth the money. The biryani was so delicious that even after being full, I still craved more.",
    author: "Mayankthakur1990",
    stars: 5,
  },
  {
    text: "Really nice place n food. Their food was delicious n tasty. Their staff is very polite n services are really fast.",
    author: "Chandrika Seth",
    stars: 5,
  },
  {
    text: "We celebrated our anniversary and it was good. Food was good but not extraordinary.",
    author: "vijeta verma",
    stars: 4,
  },
  {
    text: "Surely the name for the cafe justifies the cafe interiors. The cafe gives the the vibes of living room. Cosy and spacious with 2-3 separate sections.",
    author: "Sanjukta Dutta",
    stars: 5,
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-hero">
      <div className="container">
        <div className="reviews-header text-center">
          <h2 className="section-title">Verified Experiences</h2>
          <p className="section-subtitle">What our regulars say about the lounge atmosphere.</p>
          <div className="rating-summary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '60px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              {/* 4 solid stars and 1 placeholder to represent 3.9 visually */}
              {[1,2,3,4,5].map(s => <Star key={s} fill={s <= 4 ? "#E6B85C" : "transparent"} color="#E6B85C" size={18} />)}
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>3.9 / 5.0</span>
            <span style={{ opacity: 0.6 }}>(1,485 Google Reviews)</span>
          </div>
        </div>

        <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '30px' }}>
          {reviews.map((rev, i) => (
            <motion.div 
              className="review-card" 
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="stars" style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} fill={j < rev.stars ? "#E6B85C" : "transparent"} color="#E6B85C" size={16} />
                ))}
              </div>
              <p className="review-text">"{rev.text}"</p>
              <span className="review-author" style={{ color: '#E6B85C', fontWeight: 600 }}>{rev.author}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
