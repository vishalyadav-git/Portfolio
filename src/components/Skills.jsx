import { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import nodeLogo from '../assets/nodejs_logo.png';
import mysqlLogo from '../assets/mysql_logo.png';
import javaLogo from '../assets/java_logo.png';
import mongoLogo from '../assets/mongodb_logo.png';
import jsLogo from '../assets/javascript_logo.png';
import gitLogo from '../assets/git_logo.png';
import postmanLogo from '../assets/postman_logo.png';
import vscodeLogo from '../assets/vscode_logo.jpg';

// Custom Tech SVGs for Premium badges
const TECH_ICONS = {
  HTML5: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#E34F26">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625 11.205-.001.23-2.625H5.474l.69 7.85h8.922l-.308 3.51-2.801.758-2.825-.76-.18-2.04H6.289l.366 4.167 5.322 1.44 5.291-1.437.737-8.388H8.531z"/>
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#1572B6">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625 11.205-.001.23-2.625H5.474l.69 7.85h8.922l-.308 3.51-2.801.758-2.825-.76-.18-2.04H6.289l.366 4.167 5.322 1.44 5.291-1.437.737-8.388H8.531z"/>
    </svg>
  ),
  JavaScript: (
    <img src={jsLogo} alt="JavaScript" width="20" height="20" style={{ objectFit: 'contain', display: 'block' }} />
  ),
  React: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="22" height="22">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  TailwindCSS: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#38BDF8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  Bootstrap: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#7952B3">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.896 15.65c0 1.246-.99 2.05-2.235 2.05H8.384V6.442h5.176c1.116 0 2.072.766 2.072 1.838 0 .866-.633 1.517-1.396 1.706.945.19 1.666.918 1.666 2.015v1.649zm-5.35-7.447v2.853h2.378c.677 0 1.096-.34 1.096-.948 0-.6-.419-.905-1.096-.905h-2.378zm0 4.607v3.084h2.64c.732 0 1.195-.366 1.195-1.02 0-.65-.463-1.064-1.195-1.064h-2.64z"/>
    </svg>
  ),
  Nodejs: (
    <img src={nodeLogo} alt="Node.js" width="20" height="20" style={{ objectFit: 'contain', display: 'block' }} />
  ),
  Expressjs: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#E2E8F0">
      <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm1.25 17.5h6.25v-2.5h-3.75V13.5h3.75v-2.5h-3.75v-1.5h3.75v-2.5h-6.25v10.5zm-8.75 0h2.95l1.375-2.738 1.35 2.738h2.95l-2.775-5.35 2.5-4.65H10.9L9.625 9.775 8.35 7.5H5.45l2.5 4.65-2.95 5.35z"/>
    </svg>
  ),
  RESTAPIs: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#3B82F6" strokeWidth="2">
      <rect x="2" y="3" width="20" height="6" rx="1" />
      <rect x="2" y="15" width="20" height="6" rx="1" />
      <line x1="6" y1="6" x2="6.01" y2="6" strokeLinecap="round" />
      <line x1="6" y1="18" x2="6.01" y2="18" strokeLinecap="round" />
      <path d="M12 9v6" />
    </svg>
  ),
  MongoDB: (
    <img src={mongoLogo} alt="MongoDB" width="20" height="20" style={{ objectFit: 'contain', display: 'block' }} />
  ),
  MySQL: (
    <img src={mysqlLogo} alt="MySQL" width="20" height="20" style={{ objectFit: 'contain', display: 'block' }} />
  ),
  Java: (
    <img src={javaLogo} alt="Java" width="20" height="20" style={{ objectFit: 'contain', display: 'block' }} />
  ),
  Git: (
    <img src={gitLogo} alt="Git" width="20" height="20" style={{ objectFit: 'contain', display: 'block' }} />
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#E2E8F0">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
    </svg>
  ),
  Postman: (
    <img src={postmanLogo} alt="Postman" width="20" height="20" style={{ objectFit: 'contain', display: 'block' }} />
  ),
  VSCode: (
    <img src={vscodeLogo} alt="VS Code" width="20" height="20" style={{ objectFit: 'contain', display: 'block' }} />
  )
};

const SKILLS_DATA = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML', level: 95, icon: TECH_ICONS.HTML5 },
      { name: 'CSS', level: 90, icon: TECH_ICONS.CSS3 },
      { name: 'JavaScript', level: 90, icon: TECH_ICONS.JavaScript },
      { name: 'React.js', level: 85, icon: TECH_ICONS.React },
      { name: 'Tailwind CSS', level: 85, icon: TECH_ICONS.TailwindCSS },
      { name: 'Bootstrap', level: 80, icon: TECH_ICONS.Bootstrap }
    ]
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85, icon: TECH_ICONS.Nodejs },
      { name: 'Express.js', level: 85, icon: TECH_ICONS.Expressjs },
      { name: 'REST APIs', level: 90, icon: TECH_ICONS.RESTAPIs }
    ]
  },
  {
    category: 'Database Management',
    skills: [
      { name: 'MongoDB', level: 85, icon: TECH_ICONS.MongoDB },
      { name: 'MySQL', level: 80, icon: TECH_ICONS.MySQL }
    ]
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', level: 80, icon: TECH_ICONS.Java },
      { name: 'JavaScript', level: 90, icon: TECH_ICONS.JavaScript }
    ]
  },
  {
    category: 'Tools & Utilities',
    skills: [
      { name: 'Git', level: 85, icon: TECH_ICONS.Git },
      { name: 'GitHub', level: 90, icon: TECH_ICONS.GitHub },
      { name: 'Postman', level: 85, icon: TECH_ICONS.Postman },
      { name: 'VS Code', level: 95, icon: TECH_ICONS.VSCode }
    ]
  }
];

export default function Skills() {
  const containerRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentEl = containerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={containerRef}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">Technical Competencies</span>
            <h2 className="section-title">My Skills</h2>
          </div>
        </ScrollReveal>

        <div className="skills-layout">
          {SKILLS_DATA.map((cat, catIdx) => (
            <ScrollReveal key={catIdx} delay={catIdx * 100} className="skills-category-reveal">
              <div className="skills-category-block glass">
                <h3 className="category-title">{cat.category}</h3>
                <div className="skills-grid">
                  {cat.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="skill-card">
                      <div className="skill-info">
                        <div className="skill-label">
                          <span className="skill-icon-wrapper">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      
                      {/* Animated Progress Meter */}
                      <div className="progress-track">
                        <div 
                          className="progress-fill"
                          style={{ 
                            width: shouldAnimate ? `${skill.level}%` : '0%',
                            transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: transparent;
        }

        .skills-layout {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .skills-category-reveal {
          width: 100%;
        }

        .skills-category-block {
          padding: 35px 30px;
        }

        .category-title {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 25px;
          position: relative;
          padding-left: 15px;
        }

        .category-title::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 18px;
          background: linear-gradient(180deg, var(--color-primary), var(--color-secondary));
          border-radius: 2px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px 40px;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-label {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .skill-icon-wrapper {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .skill-card:hover .skill-icon-wrapper {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
        }

        .skill-name {
          font-size: 15px;
          font-weight: 500;
          color: var(--color-text);
        }

        .skill-percentage {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-secondary);
        }

        /* Progress Bar */
        .progress-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          box-shadow: 0 0 10px var(--color-primary-glow);
          will-change: width;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .skills-category-block {
            padding: 25px 20px;
          }
        }
      `}</style>
    </section>
  );
}
