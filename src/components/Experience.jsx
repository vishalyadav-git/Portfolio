import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  const experiences = [
    {
      company: 'Codec Technologies Pvt. Ltd.',
      position: 'MERN Stack Developer Intern',
      duration: 'Jul 2025 – Aug 2025',
      responsibilities: [
        'Worked on a MERN-based full-stack internship, contributing to an E-Commerce platform and Job Portal system.',
        'Developed and integrated RESTful APIs using Node.js, Express.js, and MongoDB.',
        'Built responsive front-end components in React.js and collaborated using Git and GitHub.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">Professional Path</span>
            <h2 className="section-title">Work Experience</h2>
          </div>
        </ScrollReveal>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} delay={150} className="timeline-item-reveal">
              <div className="timeline-item">
                {/* Center dot */}
                <div className="timeline-node glass">
                  <Briefcase size={18} className="node-icon" />
                </div>
                
                {/* Date Side */}
                <div className="timeline-date">
                  <span className="date-badge glass">
                    <Calendar size={13} /> {exp.duration}
                  </span>
                </div>
                
                {/* Card Side */}
                <div className="timeline-content-card glass">
                  <div className="card-header-block">
                    <h3 className="position-title">{exp.position}</h3>
                    <h4 className="company-name text-gradient">{exp.company}</h4>
                  </div>
                  
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>
                        <ChevronRight size={16} className="bullet-arrow" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background-color: transparent;
        }

        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, 
            rgba(16, 185, 129, 0) 0%, 
            rgba(16, 185, 129, 0.4) 15%, 
            rgba(20, 184, 166, 0.4) 85%, 
            rgba(20, 184, 166, 0) 100%
          );
          transform: translateX(-50%);
          z-index: 0;
        }

        .timeline-item-reveal {
          width: 100%;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 40px;
          position: relative;
          align-items: center;
        }

        /* Timeline central indicator */
        .timeline-node {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          border-color: var(--color-primary);
          box-shadow: 0 0 15px var(--color-primary-glow);
          color: var(--color-primary);
        }

        .timeline-item:hover .timeline-node {
          color: var(--color-secondary);
          border-color: var(--color-secondary);
          box-shadow: 0 0 20px var(--color-secondary-glow);
          transform: translate(-50%, -50%) scale(1.1);
        }

        .node-icon {
          transition: all 0.3s ease;
        }

        /* Timeline Date Details */
        .timeline-date {
          text-align: right;
          display: flex;
          justify-content: flex-end;
        }

        .date-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text-muted);
          border-color: rgba(255, 255, 255, 0.05);
        }

        .timeline-item:hover .date-badge {
          color: var(--color-text);
          border-color: var(--color-primary);
        }

        /* Content Card */
        .timeline-content-card {
          padding: 30px;
          text-align: left;
        }

        .timeline-item:hover .timeline-content-card {
          border-color: var(--color-primary);
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.1);
          transform: translateY(-2px);
        }

        .card-header-block {
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 15px;
        }

        .position-title {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--color-text);
        }

        .company-name {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 600;
          margin-top: 4px;
        }

        .responsibilities-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .responsibilities-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .bullet-arrow {
          color: var(--color-secondary);
          margin-top: 2px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .timeline-item:hover .bullet-arrow {
          transform: translateX(3px);
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }
          .timeline-item {
            grid-template-columns: 1fr;
            gap: 20px;
            padding-left: 50px;
            margin-bottom: 30px;
          }
          .timeline-node {
            left: 20px;
            top: 30px;
            transform: translate(-50%, 0);
          }
          .timeline-item:hover .timeline-node {
            transform: translate(-50%, 0) scale(1.1);
          }
          .timeline-date {
            text-align: left;
            justify-content: flex-start;
            padding-top: 10px;
          }
          .timeline-content-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
