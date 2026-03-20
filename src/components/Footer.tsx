import React from 'react';
import { Coffee, Star, MapPin, Clock, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-footer" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo footer-logo">
             <Coffee className="logo-icon text-secondary" />
             <span className="logo-text text-white">The Living Room</span>
          </div>
          <p className="footer-desc">
            Arts, Coffee, and Comfort. Raipur's cozy nook for groups, families, and solo catch-ups since 2017.
          </p>
          <div className="rating-badge footer-rating" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: 'none' }}>
            <Star fill="var(--secondary)" color="var(--secondary)" size={16} />
            <span className="rating-number text-white" style={{ fontSize: '0.9rem' }}>3.9 Google Rating</span>
          </div>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Full Menu</a></li>
            <li><a href="#all-day-breakfast">Breakfast</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-address">
          <h4 className="footer-heading">Visit Us</h4>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
            <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }} />
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              VIP Road (Airport Road)<br/>
              Towards Phunder Chowk<br/>
              Raipur, Chhattisgarh 492001
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
            <Clock size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            <p style={{ color: 'var(--text-secondary)' }}>Open daily until 12:30 AM</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Phone size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            <a href="tel:+919285555002" style={{ color: 'var(--primary)', fontWeight: 600 }}>+91 92855 55002</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} The Living Room Cafe & Lounge. All rights reserved.</p>
          <p>Best Coffee & Lounge in Raipur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
