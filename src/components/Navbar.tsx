import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Breakfast', href: '#all-day-breakfast' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{ 
      transition: 'all 0.4s ease',
      background: isScrolled ? 'rgba(15, 11, 8, 0.95)' : 'transparent',
      padding: isScrolled ? '15px 0' : '25px 0',
      borderBottom: isScrolled ? '1px solid rgba(200, 155, 60, 0.2)' : 'none'
    }}>
      <div className="nav-container container">
        <div className="logo" style={{ color: 'white', fontWeight: 800 }}>
          <Coffee key="coffee" style={{ color: 'var(--primary)', marginRight: '10px' }} size={24} />
          <span>The Living Room <span style={{ color: 'var(--primary)' }}>Cafe & Lounge</span></span>
        </div>
        
        <div className="desktop-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'white', letterSpacing: '1px', textTransform: 'uppercase' }}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.75rem' }}>Order Now</a>
        </div>

        <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary mobile-nav-btn" onClick={() => setIsMobileMenuOpen(false)}>
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
