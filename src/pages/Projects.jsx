// src/pages/Projects.jsx
import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Motoren Klaro',
      client: 'Navneet Motors Andheri',
      category: 'Automotive',
      type: 'Comparison Web Portal',
      description: 'A high-utility sales tool built for Navneet Motors. It enables sales teams and customers to instantly compare car variants, features, and on-road pricing in a distraction-free interface, speeding up the decision-making process.',
      tags: ['React', 'Complex Data', 'Sales Enablement'],
      status: 'Live Deployment'
    },
    {
      title: 'Raj Farsan Factory',
      client: 'Raj Farsan (Kandivali)',
      category: 'Food & Farsan',
      type: 'Direct-to-Consumer Website',
      description: 'A digital storefront for a legacy Mumbai brand. We digitized 60+ items into a single-page experience that integrates directly with WhatsApp for ordering, blending traditional business logic with modern tech.',
      tags: ['Single Page App', 'WhatsApp API', 'UX Design'],
      status: 'Live Deployment'
    },
    {
      title: 'Divine Light Awaking',
      client: 'Divine Light',
      category: 'Spiritual / Wellness',
      type: 'Content Platform',
      description: 'A digital sanctuary for seekers. This platform hosts meditation sessions, event schedules, and spiritual content, designed with a calm, minimal aesthetic to reflect the organization’s mission of inner peace.',
      tags: ['CMS', 'Event Management', 'UI/UX'],
      status: 'Live Deployment'
    },
    {
      title: 'Movie Ticket System',
      client: 'Desktop Software',
      category: 'Entertainment / Utility',
      type: 'Python GUI Application',
      description: 'A robust desktop application designed to eliminate long queues and manual errors. Features a seamless Tkinter GUI for browsing movies, selecting seat types (Premium/Normal), and automating booking calculations with a secure MySQL backend.',
      tags: ['Python Tkinter', 'MySQL', 'Database Design', 'Automation'],
      status: 'Completed'
    },
    {
      title: 'Vastra Mitra',
      client: 'Internal / Beta',
      category: 'Fashion / Lifestyle',
      type: 'Mobile Hybrid App',
      description: 'A smart wardrobe assistant concept. Designed for fashion-conscious users to digitize their closet and receive outfit suggestions. A mobile-first approach to solving the "what do I wear" problem.',
      tags: ['Mobile First', 'React Native', 'Algorithmic Logic'],
      status: 'In Development'
    }
  ];

  return (
    <div className="container page-section" style={{ marginTop: '80px' }}>
      
      {/* Page Header */}
      <div style={{ maxWidth: '800px', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Selected Works</h2>
        <p style={{ fontSize: '1.2rem', color: '#F0EADF', opacity: 0.9 }}>
          We don't just build websites; we build business assets. From automotive sales tools 
          to complex desktop software, our engineering solves specific problems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid-cards">
        {projects.map((p, index) => (
          <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
            
            {/* Top Row: Category Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div style={{
                padding: '6px 12px',
                borderRadius: '4px',
                background: 'rgba(240, 234, 223, 0.1)',
                color: '#F0EADF',
                fontSize: '0.75rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                {p.category}
              </div>
              <div style={{ fontSize: '2rem', lineHeight: '0.5', color: '#808C84' }}>
                &rarr;
              </div>
            </div>

            {/* Main Content */}
            <div>
              <h3 style={{ fontSize: '2rem', margin: '0 0 5px 0', color: '#F0EADF' }}>{p.title}</h3>
              <div style={{ color: '#808C84', fontSize: '0.95rem', fontStyle: 'italic' }}>
                {p.client} — {p.type}
              </div>
            </div>

            <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#F0EADF', opacity: 0.8, flexGrow: 1 }}>
              {p.description}
            </p>

            {/* Footer: Tech Tags */}
            <div style={{ 
              borderTop: '1px solid rgba(255,255,255,0.1)', 
              paddingTop: '20px', 
              marginTop: '10px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {p.tags.map(tag => (
                <span key={tag} style={{ fontSize: '0.85rem', color: '#808C84' }}>#{tag}</span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}