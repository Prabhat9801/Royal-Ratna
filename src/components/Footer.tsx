import React from 'react';
import { Coffee, Star, MapPin, Clock, Phone, Mail, Instagram, Facebook, Utensils } from 'lucide-react';

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
          <div className="rating-badge footer-rating" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: 'none', marginBottom: '20px' }}>
            <Star fill="var(--secondary)" color="var(--secondary)" size={16} />
            <span className="rating-number text-white" style={{ fontSize: '0.9rem' }}>3.9 Google Rating</span>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://www.instagram.com/livingroomcafe_raipur/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/tlrcaferaipur/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <Facebook size={24} />
            </a>
            <a href="https://www.zomato.com/raipur/the-living-room-cafe-purena" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} title="Order on Zomato" onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <Utensils size={24} />
            </a>
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
              VIP Road (Airport Road)<br/> Towards Phunder Chowk,<br/> Chhattisgarh 492001
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
            <Clock size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            <p style={{ color: 'var(--text-secondary)' }}>Opens 11:30 am</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
            <Phone size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            <a href="tel:+919285555002" style={{ color: 'var(--primary)', fontWeight: 600 }}>092855 55002</a>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Mail size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            <a href="mailto:livingroomcafe.rpr@gmail.com" style={{ color: 'var(--text-secondary)' }}>livingroomcafe.rpr@gmail.com</a>
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
