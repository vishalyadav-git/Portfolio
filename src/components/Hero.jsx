import { Mail, ArrowRight, Download, Send } from 'lucide-react';
import TypingEffect from './TypingEffect';
import ScrollReveal from './ScrollReveal';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Hero() {
  const roles = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Software Engineer'
  ];

  const focusAreas = [
    { name: 'MERN Stack', desc: 'React, Node, Express, Mongo' },
    { name: 'Backend Dev', desc: 'Scalable APIs & Services' },
    { name: 'DSA & Java', desc: 'Problem Solving & Logic' },
    { name: 'DBMS & OOPs', desc: 'MySQL & System Design' }
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <ScrollReveal delay={100}>
          <div className="hero-intro">
            <span className="welcome-tag glass">👋 Welcome to my universe</span>
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Vishal Yadav</span>
            </h1>
            <h2 className="hero-subtitle">
              I am a <TypingEffect strings={roles} typeSpeed={80} backSpeed={40} backDelay={2000} />
            </h2>
            <p className="hero-desc">
              Building high-performance, scalable web applications and solving complex algorithmic problems. 
              Passionate about clean architecture and robust developer systems.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="hero-ctas">
            <button 
              onClick={() => handleScrollTo('projects')} 
              className="btn btn-primary btn-glow"
            >
              View Projects <ArrowRight size={18} />
            </button>
            <a 
              href="/Vishal_Yadav_Resume.pdf" 
              download="Vishal_Yadav_Resume.pdf" 
              className="btn btn-secondary"
            >
              Download Resume <Download size={18} />
            </a>
            <button 
              onClick={() => handleScrollTo('contact')} 
              className="btn btn-secondary"
            >
              Contact Me <Send size={18} />
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="social-links-container">
            <a href="https://github.com/vishalyadav-git" target="_blank" rel="noopener noreferrer" className="social-link-btn glass" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vishalyadav01/" target="_blank" rel="noopener noreferrer" className="social-link-btn glass" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:yadavvishal00101@gmail.com" className="social-link-btn glass" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500} className="focus-reveal">
          <div className="focus-section">
            <p className="focus-title">Current Focus Areas</p>
            <div className="focus-grid">
              {focusAreas.map((focus, index) => (
                <div key={index} className="focus-card glass">
                  <div className="focus-indicator"></div>
                  <div className="focus-content">
                    <h4>{focus.name}</h4>
                    <p>{focus.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="scroll-indicator" onClick={() => handleScrollTo('about')}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 120px;
          padding-bottom: 80px;
          box-sizing: border-box;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 35px;
          max-width: 850px;
        }

        .welcome-tag {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text-muted);
          padding: 8px 16px;
          border-radius: 30px;
          display: inline-block;
          margin-bottom: 15px;
          letter-spacing: 0.5px;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -2px;
          margin-bottom: 10px;
          color: var(--color-text);
        }

        .hero-subtitle {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 600;
          color: var(--color-text-muted);
          min-height: 42px;
          margin-bottom: 15px;
        }

        .hero-desc {
          font-size: 17px;
          color: var(--color-text-muted);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .social-links-container {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 5px;
        }

        .social-link-btn {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-muted);
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .social-link-btn:hover {
          color: #ffffff;
          border-color: var(--color-secondary);
          box-shadow: 0 0 15px rgba(20, 184, 166, 0.4);
          transform: translateY(-3px);
        }

        /* Focus Section */
        .focus-reveal {
          width: 100%;
        }

        .focus-section {
          margin-top: 30px;
          width: 100%;
        }

        .focus-title {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-text-muted);
          margin-bottom: 20px;
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          width: 100%;
        }

        .focus-card {
          padding: 16px;
          text-align: left;
          position: relative;
          overflow: hidden;
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .focus-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-primary);
          box-shadow: var(--shadow-glow);
        }

        .focus-indicator {
          width: 3px;
          height: 35px;
          background: linear-gradient(180deg, var(--color-primary), var(--color-secondary));
          border-radius: 2px;
          flex-shrink: 0;
        }

        .focus-content h4 {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text);
        }

        .focus-content p {
          font-size: 12px;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          color: var(--color-text-muted);
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .scroll-indicator:hover {
          color: var(--color-text);
        }

        .mouse {
          width: 24px;
          height: 40px;
          border: 2px solid var(--color-text-muted);
          border-radius: 20px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }

        .scroll-indicator:hover .mouse {
          border-color: var(--color-text);
        }

        .wheel {
          width: 4px;
          height: 8px;
          background-color: var(--color-primary);
          border-radius: 2px;
          animation: scroll-wheel 1.5s infinite;
        }

        @keyframes scroll-wheel {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        @media (max-width: 868px) {
          .hero-title {
            font-size: 48px;
          }
          .hero-subtitle {
            font-size: 22px;
          }
          .focus-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 38px;
          }
          .hero-subtitle {
            font-size: 18px;
          }
          .focus-grid {
            grid-template-columns: 1fr;
          }
          .hero-ctas {
            flex-direction: column;
            width: 100%;
          }
          .hero-ctas .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
