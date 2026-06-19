// src/pages/Team.jsx
import React from 'react';

// LinkedIn Icon SVG
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Team() {
  // Image Style to ensure uniformity without changing CSS file
  const imgStyle = {
    width: '100%',
    height: '350px', // Fixed height for alignment
    objectFit: 'cover',
    objectPosition: 'top center', // Focuses on faces
    borderRadius: '8px',
    marginBottom: '20px',
    border: '1px solid rgba(255,255,255,0.1)',
    backgroundColor: '#0a1a1a' // Fallback color
  };

  const members = [
    {
      name: 'Jay Chandarana',
      role: 'Founder',
      desc: 'Architecting the core product vision and setting engineering standards across the group.',
      img: '/jay.jpg',
      linkedin: 'https://www.linkedin.com/in/jay-chandarana-408a20272'
    },
    {
      name: 'Akshat Jethva',
      role: 'CEO',
      desc: 'Driving business strategy, client partnerships, and ensuring seamless user experiences.',
      img: '/akshat.jpg',
      linkedin: 'https://www.linkedin.com/in/akshat-jethva-ba51593a0'
    },
    {
      name: 'Rihan Padhiar',
      role: 'CTO & COO',
      desc: 'Orchestrating technical operations, scalable infrastructure, and day-to-day execution.',
      img: '/rihan.jpg',
      linkedin: 'https://www.linkedin.com/in/rihanpadhiar'
    },
    {
      name: 'Rudra Trivedi',
      role: 'Technical Head',
      desc: 'Leading full-stack development, code quality reviews, and complex system integrations.',
      img: '/rudratrivedi.jpg',
      linkedin: 'https://www.linkedin.com/in/rudra-trivedi-4565b2240'
    },
    {
      name: 'Rudra Gohil',
      role: 'Marketing Head',
      desc: 'Spearheading digital outreach, brand positioning, and market expansion strategies.',
      img: '/rudragohil.jpg',
      linkedin: 'https://www.linkedin.com/in/rudra-gohil-372198351'
    }
  ];

  return (
    <div className="container page-section" style={{ marginTop: '60px' }}>
      <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
        <h2>The Team</h2>
        <p>
          Founder-led engineering. We are a close-knit team of builders, 
          thinkers, and strategists obsessed with product quality.
        </p>
      </div>

      <div className="grid-cards">
        {members.map((m) => (
          <div key={m.name} className="card">
            <img 
              src={m.img} 
              alt={m.name} 
              style={imgStyle}
              onError={(e) => { e.target.style.display='none'; }} 
            />
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{m.name}</h3>
            
            <div style={{ 
              color: '#808C84', 
              fontWeight: 700, 
              fontSize: '0.85rem', 
              letterSpacing: '1px', 
              textTransform: 'uppercase',
              marginBottom: '12px' 
            }}>
              {m.role}
            </div>

            <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '24px', flexGrow: 1 }}>
              {m.desc}
            </p>

            <a 
              href={m.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '8px', 
                color: '#F0EADF', textDecoration: 'none', fontWeight: 600 
              }}
            >
              <LinkedInIcon /> Connect
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}