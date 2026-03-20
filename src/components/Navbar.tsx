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
        <div className="logo">
          <Coffee key="coffee" style={{ color: 'var(--primary)', marginRight: '10px' }} size={24} />
          <span className="logo-text">The Living Room <span style={{ color: 'var(--primary)' }}>Cafe & Lounge</span></span>
        </div>
        
        <button 
          className="global-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ 
            display: 'flex', alignItems: 'center', gap: '10px', 
            background: 'var(--gold-gradient)', color: 'var(--text-dark)', 
            padding: '10px 24px', borderRadius: '50px', border: 'none',
            fontWeight: 800, cursor: 'pointer', transition: '0.3s'
          }}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span>MENU</span>
        </button>

        {isMobileMenuOpen && (
          <div className="global-menu-overlay">
            <div className="global-menu-list">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="global-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary" style={{ marginTop: '20px', width: '100%', textAlign: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>
                Order Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
