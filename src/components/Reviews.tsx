import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    text: "Nice food, nice service, friendly environment.",
    author: "Local Guide",
    stars: 5,
  },
  {
    text: "Pizza dosa and grilled paneer sandwich are amazing.",
    author: "Food Lover",
    stars: 5,
  },
  {
    text: "Food tastes like ghar ka khana.",
    author: "Regular Customer",
    stars: 5,
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="reviews-header text-center">
          <h2 className="section-title">Customer Reviews</h2>
          <div className="title-underline mx-auto" style={{ marginInline: 'auto' }}></div>
          <div className="rating-badge mx-auto mt-4" style={{ marginInline: 'auto' }}>
            <Star fill="#D4AF37" color="#D4AF37" size={24} />
            <span className="rating-number">4.9 / 5</span>
            <span className="rating-text">Google Reviews</span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev, i) => (
            <motion.div 
              className="review-card" 
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="stars">
                {[...Array(rev.stars)].map((_, j) => (
                  <Star key={j} fill="#D4AF37" color="#D4AF37" size={16} />
                ))}
              </div>
              <p className="review-text">"{rev.text}"</p>
              <p className="review-author">- {rev.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
