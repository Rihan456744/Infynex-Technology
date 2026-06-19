// src/pages/Home.jsx
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP = '919967904671';

// --- ICONS ---
const ArrowRight = ({ size=20 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>);
const WebIcon = () => (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F0EADF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="9" y2="21"/></svg>);
const MobileIcon = () => (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F0EADF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>);
const DashboardIcon = () => (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F0EADF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>);
const ProjectArrow = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808C84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>);

export default function Home() {
  const wrapperRef = useRef(null);

  // Mouse tracking for ambient background effect
  useEffect(() => {
    const handleMove = (e) => {
      if (wrapperRef.current) {
        wrapperRef.current.style.setProperty('--x', `${e.clientX}px`);
        wrapperRef.current.style.setProperty('--y', `${e.clientY}px`);
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent("Hi Infynex — Interested in a project.")}`, '_blank');
  };

  return (
    <div className="ambient-wrapper" ref={wrapperRef}>
      <div className="spotlight"></div>
      
      <div className="container content-layer">
        
        {/* --- HERO SECTION (Cleaned Up) --- */}
        <section style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 8vw, 6rem)', 
            maxWidth: '1100px', 
            marginBottom: '1.5rem', 
            color: '#F0EADF',
            lineHeight: '1.1',
            letterSpacing: '-2px'
          }}>
            Software that feels <br />
            <span style={{ color: '#808C84' }}>inevitable.</span>
          </h1>

          <p style={{ maxWidth: '650px', fontSize: '1.3rem', marginBottom: '3rem', color: '#808C84', lineHeight: '1.6' }}>
            Infynex Technologies. We architect outcomes, not just code. 
            Building ambient, practical, and high-value software for forward-thinking businesses.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button className="btn-primary" onClick={openWhatsApp}>Start a Project</button>
            <Link to="/projects" className="btn-outline" style={{ marginLeft: 0 }}>View Case Studies</Link>
          </div>
        </section>

        {/* --- CORE TECHNOLOGY SECTION --- */}
        <section className="page-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '40px' }}>
             <h2 style={{ fontSize: '2.5rem' }}>Our Craft</h2>
             <span style={{ color: 'var(--text-secondary)' }}>Scroll ↓</span>
          </div>

          <div className="grid-cards">
            
            {/* 1. WEBSITES & PORTALS */}
            <div className="card">
              <div style={{ marginBottom: '1.5rem' }}><WebIcon /></div>
              <h4>Websites & Portals</h4>
              <p>High-performance frontends that load instantly. SEO-optimized CMS architectures designed for scale.</p>
              <Link to="/services" style={{marginTop:'auto', color:'#F0EADF', textDecoration:'none', fontWeight:'bold', display:'flex', alignItems:'center', gap:'8px'}}>
                Explore Web <ArrowRight size={16}/>
              </Link>
            </div>

            {/* 2. MOBILE APPS */}
            <div className="card">
              <div style={{ marginBottom: '1.5rem' }}><MobileIcon /></div>
              <h4>Mobile Apps</h4>
              <p>Native and Hybrid architectures. We build apps that feel fluid, perform beautifully, and engage users.</p>
              <Link to="/services" style={{marginTop:'auto', color:'#F0EADF', textDecoration:'none', fontWeight:'bold', display:'flex', alignItems:'center', gap:'8px'}}>
                Explore Apps <ArrowRight size={16}/>
              </Link>
            </div>

            {/* 3. MANAGEMENT & DASHBOARDS */}
            <div className="card">
              <div style={{ marginBottom: '1.5rem' }}><DashboardIcon /></div>
              <h4>Management & Dashboards</h4>
              <p>Internal tools that save 100+ hours. Visualizing your data to make business decisions obvious.</p>
              <Link to="/services" style={{marginTop:'auto', color:'#F0EADF', textDecoration:'none', fontWeight:'bold', display:'flex', alignItems:'center', gap:'8px'}}>
                Explore Data <ArrowRight size={16}/>
              </Link>
            </div>

          </div>
        </section>

        {/* --- RECENT DEPLOYMENTS (Attractive Cards) --- */}
        <section className="page-section" style={{ borderTop: '1px solid var(--border)', paddingTop: '80px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <h2 style={{ margin: 0 }}>Recent Deployments</h2>
            <Link to="/projects" style={{ color: '#F0EADF', textDecoration: 'none', borderBottom: '1px solid #808C84' }}>View All Works</Link>
          </div>

          <div className="grid-cards">
            {/* Project 1 */}
            <Link to="/projects" className="card" style={{ textDecoration: 'none', minHeight: '220px', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <span style={{ fontSize: '0.8rem', color: '#808C84', textTransform: 'uppercase', letterSpacing: '1px' }}>Automotive</span>
                <ProjectArrow />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#F0EADF', marginBottom: '8px' }}>Motoren Klaro</h3>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>Car Comparison Portal for Navneet Motors.</p>
              </div>
            </Link>

            {/* Project 2 */}
            <Link to="/projects" className="card" style={{ textDecoration: 'none', minHeight: '220px', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <span style={{ fontSize: '0.8rem', color: '#808C84', textTransform: 'uppercase', letterSpacing: '1px' }}>Food Tech</span>
                <ProjectArrow />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#F0EADF', marginBottom: '8px' }}>Raj Farsan</h3>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>Single-page ordering site with WhatsApp integration.</p>
              </div>
            </Link>

            {/* Project 3 */}
            <Link to="/projects" className="card" style={{ textDecoration: 'none', minHeight: '220px', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <span style={{ fontSize: '0.8rem', color: '#808C84', textTransform: 'uppercase', letterSpacing: '1px' }}>Spiritual</span>
                <ProjectArrow />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#F0EADF', marginBottom: '8px' }}>Divine Light</h3>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>Content and event platform for spiritual growth.</p>
              </div>
            </Link>
          </div>
          

        </section>

      </div>
    </div>
  );
}