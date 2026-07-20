import { Award, CheckCircle, GraduationCap, Server } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const CERTS = [
  {
    title: 'MERN Stack Internship',
    issuer: 'Codec Technologies Pvt. Ltd.',
    year: '2025',
    detail: 'Completed a comprehensive 1-month full-stack development internship focusing on designing RESTful APIs and React UI components.',
    icon: <Server size={24} />,
    color: '#10B981',
    verify: 'MERN Developer Intern',
    link: null
  },
  {
    title: 'Java Programming (CRT)',
    issuer: 'Talent Battle',
    year: '2025',
    detail: 'Successfully completed a 60-hour Campus Recruitment Training (CRT) in Java Programming conducted by Talent Battle at LTCE.',
    icon: <GraduationCap size={24} />,
    color: '#FFA116',
    verify: 'Cert ID: LTCOETB033',
    link: '/cert_java.pdf'
  },
  {
    title: 'CodeUnnati Program',
    issuer: 'SAP & Edunet Foundation',
    year: '2024',
    detail: 'Completed the Foundation Course, covering Python Programming, Data Analysis, Artificial Intelligence, and SAP Conversational AI Chatbot.',
    icon: <Award size={24} />,
    color: '#A855F7',
    verify: 'Cert ID: CU24_6094',
    link: '/cert_codeunnati.pdf'
  },
  {
    title: 'Sigma Batch (Java + DSA)',
    issuer: 'Apna College',
    year: '2024',
    detail: 'Successfully completed the Sigma Batch course, mastering Java programming, Data Structures, Algorithms, and software design principles.',
    icon: <CheckCircle size={24} />,
    color: '#10B981',
    verify: 'Cert ID: 669984480f6cf114f10ef476',
    link: '/cert_sigma.pdf'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">Verified badges</span>
            <h2 className="section-title">Certifications</h2>
          </div>
        </ScrollReveal>

        <div className="certs-grid">
          {CERTS.map((cert, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="cert-reveal-item">
              <TiltCard className="cert-card glass" maxTilt={6}>
                <div className="cert-header">
                  <div 
                    className="cert-icon-wrapper"
                    style={{ color: cert.color, borderColor: `${cert.color}20`, background: `${cert.color}08` }}
                  >
                    {cert.icon}
                  </div>
                  <span className="cert-year">{cert.year}</span>
                </div>

                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <h4 className="cert-issuer">{cert.issuer}</h4>
                  <p className="cert-desc">{cert.detail}</p>
                </div>

                <div 
                  className="cert-footer-badge"
                  style={{ color: cert.color, background: `${cert.color}08`, borderColor: `${cert.color}15` }}
                >
                  {cert.verify}
                </div>

                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary cert-view-btn"
                    style={{ 
                      marginTop: '12px', 
                      fontSize: '12px', 
                      padding: '8px 12px', 
                      borderRadius: '8px', 
                      width: '100%', 
                      display: 'inline-flex',
                      gap: '4px',
                      justifyContent: 'center',
                      borderColor: `${cert.color}40`
                    }}
                  >
                    View Certificate
                  </a>
                )}
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .certifications-section {
          background-color: transparent;
        }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .cert-reveal-item {
          width: 100%;
        }

        .cert-card {
          padding: 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          text-align: left;
          position: relative;
        }

        .cert-card:hover {
          border-color: var(--color-primary);
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.1);
        }

        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .cert-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-year {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text-muted);
          background: rgba(255, 255, 255, 0.03);
          padding: 4px 10px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .cert-content {
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .cert-title {
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 4px;
        }

        .cert-issuer {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-secondary);
          margin-bottom: 12px;
        }

        .cert-desc {
          font-size: 12.5px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .cert-footer-badge {
          width: 100%;
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          padding: 8px 0;
          border-radius: 6px;
          border: 1px solid;
          margin-top: auto;
          letter-spacing: 0.2px;
        }

        @media (max-width: 1100px) {
          .certs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .certs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
