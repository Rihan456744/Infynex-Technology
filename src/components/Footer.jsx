// src/components/Footer.jsx
import React from 'react';

// --- ICONS ---
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" style={{ paddingBottom: '20px' }}>
      <div className="container">
        
        {/* TOP SECTION */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '20px',
          paddingBottom: '40px' 
        }}>
          
          {/* Left: Brand */}
          <div>
            {/* REMOVED INLINE FONT SIZE SO CSS CAN CONTROL IT */}
            <h4 style={{ margin: 0, color: '#F0EADF', letterSpacing: '-0.5px' }}>
              Infynex Technologies
            </h4>
            <p style={{ margin: '6px 0 0', fontSize: '0.9rem', color: '#808C84' }}>
              Part of Chandarana Group of Industries
            </p>
          </div>

          {/* Right: Social Links */}
          <div style={{ display: 'flex', gap: '24px' }}>
            <a 
              href="https://www.instagram.com/infynextechnologies?utm_source=ig_web_button_share_sheet&igsh=MWNqdmdhM3Zjc2Z6Yw==" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#F0EADF', opacity: 0.8 }}
            >
              <InstagramIcon />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/rihanpadhiar" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#F0EADF', opacity: 0.8 }}
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div style={{ 
          borderTop: '1px solid rgba(128, 140, 132, 0.2)', 
          paddingTop: '24px', 
          textAlign: 'center', 
          fontSize: '0.85rem', 
          color: '#808C84' 
        }}>
          © {year} Infynex Technologies. All rights reserved.
          <span style={{ margin: '0 10px', opacity: 0.5 }}>|</span>
          <span style={{ color: '#F0EADF', opacity: 0.9 }}>Designed by Rihan Padhiar</span>
        </div>
        
      </div>
    </footer>
  );
}