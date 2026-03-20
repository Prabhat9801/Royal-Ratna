import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    text: "The staff of the place is so good and the service of food is also fast.",
    author: "Happy Customer",
    stars: 5,
  },
  {
    text: "Nice Ambiance, food taste, quality and quantity is really impressive.",
    author: "Local Guide",
    stars: 4,
  },
  {
    text: "Ordered lemon coriander soup, chicken burger!!!",
    author: "Foodie",
    stars: 4,
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
            <Star fill="var(--secondary)" color="var(--secondary)" size={24} />
            <span className="rating-number">3.9 / 5</span>
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
                  <Star key={j} fill="var(--secondary)" color="var(--secondary)" size={16} />
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
