import { useState } from 'react';
import { ExternalLink, CheckCircle, Shield, Plane, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'SurakshaX Detection',
    category: 'MERN Stack',
    description: 'Built an integrated real-time hazard monitoring platform that detects and visualizes urban and coastal hazards such as cyclones, floods, oil spills, and waterlogging using social media analytics and citizen-driven reports.',
    features: [
      'Real-Time Hazard Detection & Mapping',
      'Crowdsourced Citizen Reporting Module',
      'Social Media Analytics Engine',
      'Interactive React.js Dashboard',
      'Secure Node.js & MongoDB Systems'
    ],
    tech: ['Python', 'React.js', 'Node.js', 'Express.js', 'Apache Kafka', 'Apache Spark', 'MongoDB', 'Tailwind CSS', 'Leaflet.js'],
    github: 'https://github.com/vishalyadav-git/SurakshaKavach',
    live: null,
    icon: <Shield size={40} className="proj-visual-icon" />,
    gradient: 'linear-gradient(135deg, #EF4444 0%, #F59E0B 100%)'
  },
  {
    id: 2,
    title: 'Wanderlust',
    category: 'Node.js & EJS',
    description: 'A full-stack property listing and rental web platform inspired by Airbnb, enabling users to explore, add, review, and manage travel accommodations through a secure and user-friendly interface.',
    features: [
      'Secure User Authentication & Session Controls',
      'Role-Based Operations (Listings & Reviews CRUD)',
      'Cloudinary Media Image Upload Integration',
      'Mapbox Interactive Locations Mapping',
      'Protected Reviews & Ratings Systems'
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Passport.js', 'Cloudinary', 'Mapbox', 'Bootstrap'],
    github: 'https://github.com/vishalyadav-git/WanderLust',
    live: 'https://wanderlust-travel-listings.onrender.com/',
    icon: <Plane size={40} className="proj-visual-icon" />,
    gradient: 'linear-gradient(135deg, #EC4899 0%, #10B981 100%)'
  },
  {
    id: 3,
    title: 'Finance Agent',
    category: 'MERN Stack',
    description: 'A personal finance management application that helps users track expenses, analyze budget status, and gain structured financial insights.',
    features: [
      'Interactive Expense Tracking',
      'Visual Analytics Dashboard',
      'Monthly Financial Reports',
      'Budget Limit Monitoring'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/vishalyadav-git/provue-tara-finance-agent',
    live: null,
    icon: <TrendingUp size={40} className="proj-visual-icon" />,
    gradient: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'MERN Stack', 'Node.js & EJS'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter || (filter === 'Node.js & EJS' && p.category === 'Node.js & EJS'));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">Portfolio Showcase</span>
            <h2 className="section-title">My Projects</h2>
          </div>
        </ScrollReveal>

        {/* Filter Controls */}
        <ScrollReveal delay={100}>
          <div className="filter-controls">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 150} className="project-card-reveal">
              <TiltCard className="project-card glass" maxTilt={6}>
                {/* Visual Thumbnail header */}
                <div 
                  className="project-visual" 
                  style={{ background: project.gradient }}
                >
                  <div className="project-visual-overlay"></div>
                  <div className="project-visual-content">
                    {project.icon}
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-badge glass">{project.category}</span>
                </div>

                {/* Card Content */}
                <div className="project-content">
                  <h4 className="project-title-text">{project.title}</h4>
                  <p className="project-desc">{project.description}</p>
                  
                  {/* Features Checklist */}
                  <div className="project-features">
                    <h5>Key Features</h5>
                    <ul>
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <CheckCircle size={14} className="feature-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="project-tech-list">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="project-links" style={{ gridTemplateColumns: project.live ? 'repeat(2, 1fr)' : '1fr' }}>
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary btn-glow project-link-btn"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary project-link-btn"
                    >
                      <Github size={16} /> Source Code
                    </a>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background-color: transparent;
        }

        /* Filtering buttons */
        .filter-controls {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 50px;
        }

        .filter-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--color-border);
          color: var(--color-text-muted);
          padding: 10px 24px;
          border-radius: 30px;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .filter-btn:hover,
        .filter-btn.active {
          color: #ffffff;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        /* Projects Layout */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .project-card-reveal {
          width: 100%;
        }

        .project-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .project-visual {
          height: 160px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .project-visual-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);
        }

        .project-visual-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .proj-visual-icon {
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3));
        }

        .project-visual-content h3 {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        .project-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          color: #ffffff;
          background: rgba(15, 23, 42, 0.6);
        }

        /* Card Content details */
        .project-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-title-text {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 12px;
        }

        .project-desc {
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        /* Features List */
        .project-features {
          margin-bottom: 20px;
        }

        .project-features h5 {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--color-text);
          margin-bottom: 10px;
        }

        .project-features ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .project-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: var(--color-text-muted);
        }

        .feature-icon {
          color: var(--color-secondary);
          margin-top: 2px;
          flex-shrink: 0;
        }

        /* Tech Tags */
        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto; /* Push tags/links to bottom */
          margin-bottom: 24px;
        }

        .tech-badge {
          font-size: 11px;
          font-weight: 600;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.15);
          color: var(--color-primary);
          padding: 4px 10px;
          border-radius: 6px;
        }

        /* Project buttons */
        .project-links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .project-link-btn {
          font-size: 13px;
          padding: 10px 0;
          border-radius: 8px;
        }

        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
