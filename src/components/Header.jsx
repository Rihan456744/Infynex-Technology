// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        
        {/* BRAND */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="logo-box">
            {/* Ensure your logo is in public folder */}
            <img src="/infynex-logo.png" alt="Infynex" width="40" height="40" style={{objectFit:'contain'}} />
          </div>
          <div>
            <h1>INFYNEX</h1>
            <small>Technologies</small>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          {['Home', 'Services', 'Projects', 'Team', 'About'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Link 
                key={item} 
                to={path} 
                onClick={closeMenu}
                style={{ color: isActive ? '#F0EADF' : undefined }}
              >
                {item}
              </Link>
            );
          })}
          <Link to="/contact" className="cta" onClick={closeMenu}>Let’s Talk</Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>

      </div>
    </header>
  );
}