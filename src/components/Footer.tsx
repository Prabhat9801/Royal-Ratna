import React from 'react';
import { Gem, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo footer-logo">
             <Gem className="logo-icon text-secondary" />
             <span className="logo-text text-white">Royal Ratna</span>
          </div>
          <p className="footer-desc">
            A Gem of Taste. Premium vegetarian restaurant in Raipur, serving authentic meals with a modern touch.
          </p>
          <div className="rating-badge footer-rating" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: 'none' }}>
            <Star fill="#D4AF37" color="#D4AF37" size={16} />
            <span className="rating-number text-white" style={{ fontSize: '0.9rem' }}>4.9 Google Rating</span>
          </div>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Full Menu</a></li>
            <li><a href="#breakfast">Breakfast Specials</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-address">
          <h4 className="footer-heading">Visit Us</h4>
          <p>
            280/6 Mahadev Ghat Road<br/>
            Opposite Punjab National Bank<br/>
            Sunder Nagar, Raipur<br/>
            Chhattisgarh 492013
          </p>
          <p className="footer-hours mt-4" style={{ marginTop: '16px' }}>
            Open daily, 8:00 AM onwards
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} Royal Ratna Premium Veg Restaurant. All rights reserved.</p>
          <p>Women-Owned Business in Raipur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
