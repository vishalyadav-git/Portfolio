import { Trophy, Code2, Users, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const ACTIVITIES = [
  {
    title: 'Smart India Hackathon 2025',
    subtitle: 'Team WolfPack | Disaster Management Theme',
    role: 'Full Stack Developer',
    duration: '2025',
    description: 'Developed SurakshaX, an advanced hazard reporting, real-time alerting, and safety analytics prototype using the MERN stack.',
    icon: <Trophy size={26} />,
    color: '#F59E0B', // Gold/Amber vibe
    tags: ['MERN Stack', 'Real-Time Alerts', 'Disaster Relief']
  },
  {
    title: 'HackWith Mumbai 2025',
    subtitle: 'Team CodeBite | Blood Donation System',
    role: 'Backend & Socket Engineer',
    duration: '2025',
    description: 'Built BloodBank, a real-time blood donor matching and donation tracking platform featuring live maps and instant location updates.',
    icon: <Code2 size={26} />,
    color: '#EF4444', // Red blood matching vibe
    tags: ['Socket.io', 'Leaflet.js', 'Node.js', 'Express']
  },
  {
    title: 'Technical Club Member',
    subtitle: 'Lokmanya Tilak College of Engineering',
    role: 'Peer Mentor & Participant',
    duration: '2023 - Present',
    description: 'Participated in advanced technical coding labs, algorithmic workshops, and peer-to-peer programming development sessions.',
    icon: <Users size={26} />,
    color: '#06B6D4', // Cyan network vibe
    tags: ['Algorithms Lab', 'Tech Workshops', 'Community Coding']
  }
];

export default function Hackathons() {
  return (
    <section id="hackathons" className="hackathons-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">Competitive events</span>
            <h2 className="section-title">Hackathons & Activities</h2>
          </div>
        </ScrollReveal>

        <div className="hackathons-grid">
          {ACTIVITIES.map((act, idx) => (
            <ScrollReveal key={idx} delay={idx * 120} className="hack-reveal-item">
              <TiltCard className="hack-card glass" maxTilt={6}>
                <div 
                  className="hack-icon-box"
                  style={{ color: act.color, borderColor: `${act.color}20`, background: `${act.color}08` }}
                >
                  {act.icon}
                </div>

                <div className="hack-header-meta">
                  <span className="hack-date-tag">
                    <Calendar size={12} /> {act.duration}
                  </span>
                  <h3 className="hack-title">{act.title}</h3>
                  <h4 className="hack-subtitle">{act.subtitle}</h4>
                </div>

                <p className="hack-desc">{act.description}</p>

                <div className="hack-tags-row">
                  {act.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="hack-badge"
                      style={{ color: act.color, background: `${act.color}0c`, borderColor: `${act.color}18` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .hackathons-section {
          background-color: transparent;
        }

        .hacker-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          pointer-events: none;
        }

        .hackathons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .hack-reveal-item {
          width: 100%;
        }

        .hack-card {
          padding: 30px;
          height: 100%;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .hack-card:hover {
          border-color: var(--color-primary);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.1);
        }

        .hack-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .hack-header-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 15px;
        }

        .hack-date-tag {
          font-size: 11px;
          font-weight: 600;
          color: var(--color-text-muted);
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .hack-title {
          font-family: var(--font-heading);
          font-size: 19px;
          font-weight: 700;
          color: var(--color-text);
        }

        .hack-subtitle {
          font-family: var(--font-sans);
          font-size: 13.5px;
          font-weight: 500;
          color: var(--color-text-muted);
        }

        .hack-desc {
          font-size: 13.5px;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .hack-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }

        .hack-badge {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid;
        }

        @media (max-width: 992px) {
          .hackathons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .hackathons-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
