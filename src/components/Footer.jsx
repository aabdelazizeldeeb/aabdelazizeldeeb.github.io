import React from 'react';

const Footer = () => {
  return (
    <footer className="reveal" style={{ 
      padding: '2rem 0', 
      borderTop: '1px solid rgba(255,255,255,0.05)', 
      background: 'rgba(0,0,0,0.5)',
      textAlign: 'center' 
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        
        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
          Ahmed E.
        </a>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          Design By <span style={{ color: 'var(--accent-gold)' }}>Ahmed Abdelaziz</span>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
