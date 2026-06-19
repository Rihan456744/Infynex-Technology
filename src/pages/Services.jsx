// src/pages/Services.jsx
import React from 'react';

// --- ICONS ---
const WebIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0EADF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="9" y2="21"/></svg>;
const MobileIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0EADF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>;
const DashboardIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0EADF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>;
const BrainIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0EADF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 8v-2"/><path d="M12 16v2"/><path d="M16 12h2"/><path d="M8 12H6"/><path d="M15 9l1.5-1.5"/><path d="M9 15l-1.5 1.5"/><path d="M15 15l1.5 1.5"/><path d="M9 9l-1.5-1.5"/></svg>;
const HandshakeIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0EADF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m11 17 2-2a1 1 0 1 1 3 3"/><path d="M11 17h2a1 1 0 0 1 1 1v3"/><path d="M16 22v-3a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v3"/><path d="m2 2 20 20"/><path d="m2 22 20-20"/></svg>;

export default function Services() {
  const services = [
    // --- 1. CORE TECHNOLOGY: WEBSITES ---
    {
      icon: <WebIcon />,
      title: 'Websites & Portals',
      desc: 'Fast, responsive, and clean digital experiences. We build high-performance sites that represent your brand and convert visitors.',
      features: ['Landing Pages', 'Corporate Sites', 'Customer Portals', 'CMS Integration']
    },
    // --- 2. CORE TECHNOLOGY: MOBILE APPS ---
    {
      icon: <MobileIcon />,
      title: 'Mobile Apps',
      desc: 'Native and Hybrid architectures (React Native). We build apps that feel fluid, perform beautifully, and engage users on any device.',
      features: ['iOS & Android Hybrid', 'React Native', 'App Store Deployment', 'Mobile Workflows']
    },
    // --- 3. CORE TECHNOLOGY: DASHBOARDS ---
    {
      icon: <DashboardIcon />,
      title: 'Management & Dashboards',
      desc: 'Stop using spreadsheets for everything. We build tailored CRM-style tools that visualize your data and automate your process.',
      features: ['Custom CRM Tools', 'Automation Scripts', 'Reporting Dashboards', 'Internal Workflows']
    },
    // --- 4. ADVANCED CAPABILITY: AI & SEO ---
    {
      icon: <BrainIcon />,
      title: 'AI & Growth Engine',
      desc: 'Future-proof your business. We integrate Models for custom AI tools and optimize your digital presence for maximum visibility.',
      features: ['Technical SEO & Ranking', 'Custom  AI Chatbots', 'AI Content Generators', 'Smart Automation Agents']
    },
    // --- 5. PARTNERSHIP ---
    {
      icon: <HandshakeIcon />,
      title: 'Tech Partner for SMEs',
      desc: 'We don’t just build and leave. We offer ongoing engineering support to keep your systems updated, secure, and evolving.',
      features: ['Maintenance', 'Feature Updates', 'Tech Consulting', 'System Audits']
    }
  ];

  // Your Specific Tech Stack List
  const techStack = [
    'HTML / CSS', 'JavaScript', 'Python', 'Django / Flask', 
    'React', 'React Native', 'Node.js', 'PHP', 
    'MySQL / PostgreSQL', 'APIs & Integrations', 'Firebase Firestore'
  ];

  return (
    <div className="container page-section" style={{ marginTop: '80px' }}>
      
      {/* Header */}
      <div style={{ maxWidth: '800px', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Our Capabilities</h2>
        <p style={{ fontSize: '1.2rem', color: '#F0EADF', opacity: 0.9 }}>
          From core engineering to advanced AI integration. We provide the full 
          technology stack your business needs to scale.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid-cards">
        {services.map((s, index) => (
          <div key={index} className="card" style={{ padding: '40px' }}>
            <div style={{ marginBottom: '24px', background: 'rgba(240, 234, 223, 0.1)', width: 'fit-content', padding: '12px', borderRadius: '12px' }}>
              {s.icon}
            </div>
            
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#F0EADF' }}>{s.title}</h3>
            
            <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#F0EADF', opacity: 0.8, marginBottom: '32px' }}>
              {s.desc}
            </p>

            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'grid', 
              gap: '12px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '24px'
            }}>
              {s.features.map(f => (
                <li key={f} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  color: '#808C84', 
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}>
                  <span style={{ color: '#F0EADF' }}>•</span> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* --- TECH STACK STRIP --- */}
      <div style={{ marginTop: '100px', padding: '40px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border)' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '30px', color: '#808C84', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Powered by Modern Standards</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {techStack.map(tech => (
            <span key={tech} style={{ 
              padding: '10px 20px', 
              background: 'rgba(27, 67, 68, 0.6)',
              border: '1px solid #808C84', 
              borderRadius: '50px', 
              color: '#F0EADF', 
              fontSize: '0.9rem',
              fontWeight: 500,
              whiteSpace: 'nowrap'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}