import { GraduationCap, MapPin, Code, Cpu, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import vishalImg from '../assets/vishal.jpg';

export default function About() {
  const cards = [
    {
      icon: <Code className="card-icon" size={24} />,
      title: 'Full Stack Dev',
      desc: 'Creating interactive user interfaces and robust APIs'
    },
    {
      icon: <Cpu className="card-icon" size={24} />,
      title: 'System Design & DSA',
      desc: 'Optimizing performance and problem solving in Java/JS'
    },
    {
      icon: <Award className="card-icon" size={24} />,
      title: 'MERN Specialist',
      desc: 'Building modern web applications with Node, React, and MongoDB'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">A brief introduction</span>
            <h2 className="section-title">About Me</h2>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          {/* Left Column: Visual details card */}
          <ScrollReveal delay={150}>
            <TiltCard className="about-details-card glass" maxTilt={8}>
              <div className="details-header">
                <div className="avatar-placeholder">
                  <img src={vishalImg} alt="Vishal Yadav" className="avatar-img" />
                </div>
                <h3>Vishal Yadav</h3>
                <p className="details-tag">Computer Engineer & Developer</p>
              </div>
              
              <div className="details-body">
                <div className="details-item">
                  <GraduationCap className="details-icon" size={20} />
                  <div>
                    <h5>Education</h5>
                    <p>Bachelor of Engineering (Comp Eng)</p>
                    <span>Lokmanya Tilak College of Engineering (CGPA: 8.85/10)</span>
                  </div>
                </div>

                <div className="details-item">
                  <MapPin className="details-icon" size={20} />
                  <div>
                    <h5>Location</h5>
                    <p>Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Right Column: Narrative biography */}
          <ScrollReveal delay={300} className="about-narrative-reveal">
            <div className="about-narrative">
              <p className="narrative-lead">
                I am a final-year Computer Engineering student passionate about building modern web applications 
                and solving real-world problems through technology.
              </p>
              
              <p className="narrative-body">
                I have experience with JavaScript, React, Node.js, Express.js, MongoDB, and Java. 
                I enjoy creating full-stack applications, designing scalable backend systems, and continuously 
                improving my problem-solving skills through Data Structures and Algorithms.
              </p>

              <p className="narrative-body">
                Currently, I am preparing for software engineering opportunities while building impactful projects 
                and expanding my expertise in full-stack development.
              </p>

              {/* Qualities Grid */}
              <div className="qualities-grid">
                {cards.map((card, index) => (
                  <div key={index} className="quality-card glass">
                    <div className="icon-wrapper">{card.icon}</div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: transparent;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.9fr;
          gap: 50px;
          align-items: start;
        }

        /* Details Card (Left) */
        .about-details-card {
          padding: 40px 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .avatar-placeholder {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px auto;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
          border: 3px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar-text {
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -1px;
        }

        .about-details-card h3 {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 5px;
        }

        .details-tag {
          font-size: 14px;
          color: var(--color-secondary);
          font-weight: 500;
          margin-bottom: 30px;
        }

        .details-body {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          text-align: left;
        }

        .details-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .details-icon {
          color: var(--color-primary);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .details-item h5 {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 2px;
        }

        .details-item p {
          font-size: 13px;
          color: var(--color-text-muted);
        }

        .details-item span {
          font-size: 11px;
          color: var(--color-text-muted);
          opacity: 0.8;
          display: block;
          margin-top: 1px;
        }

        /* Narrative (Right) */
        .about-narrative-reveal {
          width: 100%;
        }

        .about-narrative {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .narrative-lead {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 500;
          line-height: 1.5;
          color: var(--color-text);
        }

        .narrative-body {
          font-size: 16px;
          color: var(--color-text-muted);
          line-height: 1.7;
        }

        /* Qualities Grid */
        .qualities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 25px;
        }

        .quality-card {
          padding: 20px;
          transition: all 0.3s ease;
        }

        .quality-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.1);
        }

        .icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(59, 130, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .card-icon {
          color: var(--color-primary);
        }

        .quality-card h4 {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 8px;
        }

        .quality-card p {
          font-size: 12px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-details-card {
            max-width: 450px;
            margin: 0 auto;
          }
        }

        @media (max-width: 650px) {
          .qualities-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
      `}</style>
    </section>
  );
}
