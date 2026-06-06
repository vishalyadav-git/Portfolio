import { BookOpen, Star, Compass, Layers } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const ACHIEVEMENTS = [
  {
    icon: <BookOpen size={24} className="ach-icon" />,
    title: 'Computer Engineering Student',
    detail: 'Acquiring theoretical foundations in computation, network structures, database management, and operating systems at Lokmanya Tilak College of Engineering.',
    value: 'LTCE 2022-2026'
  },
  {
    icon: <Star size={24} className="ach-icon" />,
    title: 'Full Stack Development Journey',
    detail: 'Transitioned from basic HTML/CSS to designing complex full-stack architectures using Node.js, Express, React, Java, and MongoDB.',
    value: 'MERN Specialist'
  },
  {
    icon: <Compass size={24} className="ach-icon" />,
    title: 'Internship Experience',
    detail: 'Acquired practical engineering exposure at Codec Technologies Pvt. Ltd. by building functional web components and collaborating with development teams.',
    value: 'Industry Ready'
  },
  {
    icon: <Layers size={24} className="ach-icon" />,
    title: 'Multiple Full Stack Projects',
    detail: 'Designed and deployed projects like SurakshaX Detection (hazard monitoring), Wanderlust (rental aggregator), and Finance Agent (expense tracking tracker).',
    value: 'Portfolio Ready'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">Key Milestones</span>
            <h2 className="section-title">Achievements</h2>
          </div>
        </ScrollReveal>

        <div className="ach-grid">
          {ACHIEVEMENTS.map((ach, idx) => (
            <ScrollReveal key={idx} delay={idx * 120} className="ach-card-reveal">
              <TiltCard className="ach-card glass" maxTilt={6}>
                <div className="ach-header">
                  <div className="ach-icon-container">
                    {ach.icon}
                  </div>
                  <span className="ach-val-badge text-gradient">{ach.value}</span>
                </div>
                
                <h3 className="ach-title">{ach.title}</h3>
                <p className="ach-desc">{ach.detail}</p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .achievements-section {
          background-color: transparent;
        }

        .ach-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .ach-card-reveal {
          width: 100%;
        }

        .ach-card {
          padding: 30px;
          text-align: left;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .ach-card:hover {
          border-color: var(--color-primary);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.1);
        }

        .ach-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .ach-icon-container {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-secondary);
        }

        .ach-card:hover .ach-icon-container {
          color: var(--color-primary);
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.2);
        }

        .ach-icon {
          transition: transform 0.3s ease;
        }

        .ach-card:hover .ach-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .ach-val-badge {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          background: rgba(255, 255, 255, 0.03);
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .ach-title {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 12px;
        }

        .ach-desc {
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.6;
          flex-grow: 1;
        }

        @media (max-width: 768px) {
          .ach-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .ach-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
