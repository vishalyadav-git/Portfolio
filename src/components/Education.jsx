import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Education() {
  const educationList = [
    {
      degree: 'Bachelor of Engineering',
      major: 'Computer Engineering',
      institution: 'Lokmanya Tilak College of Engineering',
      location: 'Navi Mumbai, Maharashtra',
      duration: '2022 - 2026',
      details: [
        'Specializing in core computer science, software systems, and network structures.',
        'Hands-on training in Data Structures, Algorithms, Database Management, and Web Technologies.',
        'Maintained a strong academic record with a cumulative CGPA of 8.85/10.',
        'Participating in college coding labs, technical festivals, and full-stack projects.'
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">Academic Timeline</span>
            <h2 className="section-title">Education</h2>
          </div>
        </ScrollReveal>

        <div className="edu-timeline">
          <div className="edu-line"></div>

          {educationList.map((edu, idx) => (
            <ScrollReveal key={idx} delay={150} className="edu-item-reveal">
              <div className="edu-item">
                {/* Node icon */}
                <div className="edu-node glass">
                  <GraduationCap size={18} className="edu-node-icon" />
                </div>

                {/* Date column (Desktop) */}
                <div className="edu-date-col">
                  <span className="edu-date-badge glass">
                    <Calendar size={13} /> {edu.duration}
                  </span>
                </div>

                {/* Details card column */}
                <div className="edu-card-col glass">
                  <div className="edu-card-header">
                    <h3 className="degree-title">{edu.degree}</h3>
                    <h4 className="major-title text-gradient">{edu.major}</h4>
                    <div className="edu-inst-info">
                      <span className="institution-name">{edu.institution}</span>
                      <span className="location-tag">
                        <MapPin size={12} /> {edu.location}
                      </span>
                    </div>
                  </div>

                  <ul className="edu-details-list">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          background-color: transparent;
        }

        .edu-timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .edu-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, 
            rgba(6, 182, 212, 0) 0%, 
            rgba(6, 182, 212, 0.4) 15%, 
            rgba(59, 130, 246, 0.4) 85%, 
            rgba(59, 130, 246, 0) 100%
          );
          transform: translateX(-50%);
          z-index: 0;
        }

        .edu-item-reveal {
          width: 100%;
        }

        .edu-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 40px;
          position: relative;
          align-items: center;
        }

        /* Timeline node */
        .edu-node {
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
          border-color: var(--color-secondary);
          box-shadow: 0 0 15px var(--color-secondary-glow);
          color: var(--color-secondary);
          transition: all 0.3s ease;
        }

        .edu-item:hover .edu-node {
          color: var(--color-primary);
          border-color: var(--color-primary);
          box-shadow: 0 0 20px var(--color-primary-glow);
          transform: translate(-50%, -50%) scale(1.1);
        }

        .edu-node-icon {
          transition: all 0.3s ease;
        }

        /* Date details */
        .edu-date-col {
          text-align: right;
          display: flex;
          justify-content: flex-end;
        }

        .edu-date-badge {
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

        .edu-item:hover .edu-date-badge {
          color: var(--color-text);
          border-color: var(--color-secondary);
        }

        /* Edu content card */
        .edu-card-col {
          padding: 30px;
          text-align: left;
        }

        .edu-item:hover .edu-card-col {
          border-color: var(--color-secondary);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.1);
          transform: translateY(-2px);
        }

        .edu-card-header {
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 15px;
        }

        .degree-title {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--color-text);
        }

        .major-title {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 600;
          margin-top: 2px;
        }

        .edu-inst-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 10px;
        }

        .institution-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--color-text-muted);
        }

        .location-tag {
          font-size: 12px;
          color: var(--color-text-muted);
          opacity: 0.8;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .edu-details-list {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .edu-line {
            left: 20px;
          }
          .edu-item {
            grid-template-columns: 1fr;
            gap: 20px;
            padding-left: 50px;
            margin-bottom: 30px;
          }
          .edu-node {
            left: 20px;
            top: 30px;
            transform: translate(-50%, 0);
          }
          .edu-item:hover .edu-node {
            transform: translate(-50%, 0) scale(1.1);
          }
          .edu-date-col {
            text-align: left;
            justify-content: flex-start;
            padding-top: 10px;
          }
          .edu-card-col {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
