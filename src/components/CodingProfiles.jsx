import { Code2, Award, Terminal, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

const PROFILES = [
  {
    name: 'GitHub',
    url: 'https://github.com/vishalyadav-git',
    icon: <Github size={28} />,
    color: '#F8FAFC',
    glowColor: 'rgba(248, 250, 252, 0.15)',
    description: 'Hosting open-source projects, collaborating with development teams, and managing code versions.',
    badge: 'Open Source & Projects',
    stats: [
      { label: 'Repositories', value: '25+' },
      { label: 'Contributions', value: 'Active' },
      { label: 'Projects', value: 'Full Stack' }
    ]
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/',
    icon: <Code2 size={28} />,
    color: '#FFA116',
    glowColor: 'rgba(255, 161, 22, 0.15)',
    description: 'Sharpening problem-solving capabilities by practicing data structures and algorithms challenges.',
    badge: 'Problem Solving & DSA',
    stats: [
      { label: 'Problems Solved', value: '300+' },
      { label: 'Topic Badges', value: '10+' },
      { label: 'Languages', value: 'Java, JS' }
    ]
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/',
    icon: <Terminal size={28} />,
    color: '#2F8D46',
    glowColor: 'rgba(47, 141, 70, 0.15)',
    description: 'Strengthening programming fundamentals, researching data structures, and learning system design concepts.',
    badge: 'DSA Journey',
    stats: [
      { label: 'Score', value: 'Top Tier' },
      { label: 'Concepts', value: 'In-Depth' },
      { label: 'Practice', value: 'Algorithms' }
    ]
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/',
    icon: <Award size={28} />,
    color: '#01A94C',
    glowColor: 'rgba(1, 169, 76, 0.15)',
    description: 'Earning verified badges in Java, Problem Solving, and database queries (SQL).',
    badge: 'Skill Certifications',
    stats: [
      { label: 'Problem Solving', value: '5-Star' },
      { label: 'Java Core', value: 'Verified' },
      { label: 'SQL queries', value: 'Certified' }
    ]
  }
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="profiles-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">Competitive Programming</span>
            <h2 className="section-title">Coding Profiles</h2>
          </div>
        </ScrollReveal>

        <div className="profiles-grid">
          {PROFILES.map((profile, idx) => (
            <ScrollReveal key={idx} delay={idx * 120} className="profile-reveal-item">
              <TiltCard className="profile-card glass" maxTilt={8}>
                <div 
                  className="profile-glow-effect"
                  style={{ background: `radial-gradient(circle, ${profile.glowColor} 0%, transparent 70%)` }}
                />
                
                <div className="profile-header">
                  <div 
                    className="profile-icon-wrapper"
                    style={{ color: profile.color, borderColor: `${profile.color}20`, background: `${profile.color}08` }}
                  >
                    {profile.icon}
                  </div>
                  <div className="profile-meta">
                    <h3 className="profile-name">{profile.name}</h3>
                    <span 
                      className="profile-badge-tag"
                      style={{ color: profile.color, background: `${profile.color}10` }}
                    >
                      {profile.badge}
                    </span>
                  </div>
                </div>

                <p className="profile-desc">{profile.description}</p>

                <div className="profile-stats-grid">
                  {profile.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="profile-stat-box">
                      <span className="stat-value" style={{ color: profile.color }}>{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={profile.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="profile-link btn btn-secondary"
                  style={{ '--hover-color': profile.color }}
                >
                  Visit Profile <ExternalLink size={14} />
                </a>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .profiles-section {
          background-color: transparent;
        }

        .profiles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .profile-reveal-item {
          width: 100%;
        }

        .profile-card {
          padding: 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .profile-glow-effect {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 180px;
          height: 180px;
          pointer-events: none;
          z-index: 0;
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .profile-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .profile-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
        }

        .profile-name {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: var(--color-text);
        }

        .profile-badge-tag {
          font-size: 11px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
          display: inline-block;
          letter-spacing: 0.2px;
        }

        .profile-desc {
          font-size: 13.5px;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 24px;
          text-align: left;
          position: relative;
          z-index: 1;
          flex-grow: 1;
        }

        /* Stats Grid */
        .profile-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 12px 6px;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .profile-stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
        }

        .stat-label {
          font-size: 10px;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        /* Platform Link button */
        .profile-link {
          width: 100%;
          font-size: 13px;
          padding: 10px 0;
          border-radius: 8px;
          position: relative;
          z-index: 1;
          margin-top: auto;
          transition: all 0.3s ease;
        }

        .profile-link:hover {
          border-color: var(--hover-color);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        @media (max-width: 1100px) {
          .profiles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .profiles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
