// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Icons
const ShieldIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const MapPinIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const FileCheckIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>;

export default function About() {
  return (
    <div className="container page-section" style={{ marginTop: '60px' }}>
      
      {/* 1. HERO SECTION */}
      <div style={{ maxWidth: '800px', marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>More than just code.</h2>
        <p style={{ fontSize: '1.25rem', color: '#F0EADF', opacity: 0.9 }}>
          Infynex Technologies is a founder-led software studio. We bridge the gap between 
          complex engineering and practical business needs.
        </p>
        <p style={{ fontSize: '1rem', color: '#808C84' }}>
          Part of the Chandarana Group of Industries.
        </p>
      </div>

      {/* 2. THE STORY / PHILOSOPHY */}
      <div className="grid-cards" style={{ marginBottom: '80px' }}>
        <div className="card">
          <h4>The Problem</h4>
          <p>
            Most software agencies are sales-led. You talk to a salesperson, but the work 
            is outsourced or built by junior developers who don't understand your business goals.
          </p>
        </div>
        <div className="card">
          <h4>The Infynex Way</h4>
          <p>
            We are engineering-led. The people you talk to are the ones 
            architecting your product. We treat your budget like our own and focus on 
            Long-term Value over short-term features.
          </p>
        </div>
      </div>

      {/* 3. PROCESS TIMELINE */}
      <div style={{ marginBottom: '80px' }}>
        <h2 style={{ marginBottom: '40px' }}>From Idea to Deploy</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
          {[
            { step: '01', title: 'Discovery', desc: 'We dissect your business problem, not just the features you want.' },
            { step: '02', title: 'Blueprint', desc: 'We design the architecture and UI. You see exactly what we will build.' },
            { step: '03', title: 'Build (Sprint)', desc: 'Rapid development with weekly updates. No radio silence.' },
            { step: '04', title: 'Launch', desc: 'Deployment to cloud, rigorous testing, and final handover.' }
          ].map(s => (
            <div key={s.step} style={{ borderLeft: '2px solid #808C84', paddingLeft: '24px' }}>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'rgba(240, 234, 223, 0.15)', lineHeight: 1 }}>
                {s.step}
              </div>
              <h4 style={{ fontSize: '1.2rem', margin: '10px 0', color: '#F0EADF' }}>{s.title}</h4>
              <p style={{ fontSize: '0.95rem', margin: 0, color: '#808C84' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. TRANSPARENCY & COMPLIANCE */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
          <h3>Corporate Transparency</h3>
          <span style={{ fontSize: '0.9rem', color: '#808C84' }}>Verified Official Details</span>
        </div>

        <div className="grid-cards" style={{ marginTop: '0' }}>
          
          {/* Registration Block */}
          <div className="card" style={{ padding: '24px', display:'flex', flexDirection:'column', gap:'10px' }}>
            <div style={{ color: '#F0EADF' }}><ShieldIcon /></div>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#808C84', textTransform: 'uppercase' }}>Government Registration</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>MSME Registered</div>
              <div style={{ fontSize: '0.9rem', marginTop: '4px', fontFamily: 'monospace', color: '#F0EADF' }}>
                UDYAM-MH-18-0500023
              </div>
            </div>
          </div>

          {/* Location Block */}
          <div className="card" style={{ padding: '24px', display:'flex', flexDirection:'column', gap:'10px' }}>
            <div style={{ color: '#F0EADF' }}><MapPinIcon /></div>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#808C84', textTransform: 'uppercase' }}>Headquarters</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Mumbai, India</div>
              <div style={{ fontSize: '0.9rem', marginTop: '4px' }}>Mumbai Suburban, Maharashtra</div>
            </div>
          </div>

          {/* Activity Block */}
          <div className="card" style={{ padding: '24px', display:'flex', flexDirection:'column', gap:'10px' }}>
            <div style={{ color: '#F0EADF' }}><FileCheckIcon /></div>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#808C84', textTransform: 'uppercase' }}>Core Classification</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Computer Consultancy</div>
              <div style={{ fontSize: '0.9rem', marginTop: '4px' }}>
                Programming & Related Activities
              </div>
            </div>
          </div>

        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
           <p style={{ fontSize: '0.9rem', color: '#808C84' }}>
             Registered under Micro, Small and Medium Enterprises Development Act, 2006.
           </p>
           <Link to="/contact" className="btn-primary" style={{marginTop:'10px'}}>
             Verify with us directly
           </Link>
        </div>
      </div>

    </div>
  );
}