import { ArrowUp, Mail } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="brand-text">Vishal<span className="text-gradient">Yadav</span></span>
          <p className="brand-tagline">Building scalable software to solve real-world challenges.</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/vishalyadav-git" target="_blank" rel="noopener noreferrer" className="foot-social-link" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/vishalyadav01/" target="_blank" rel="noopener noreferrer" className="foot-social-link" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:yadavvishal00101@gmail.com" className="foot-social-link" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Vishal Yadav. Crafted with passion & React.
          </p>
          <button onClick={handleScrollTop} className="scroll-top-btn glass" aria-label="Scroll to top">
            <ArrowUp size={16} /> Back to top
          </button>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          border-top: 1px solid var(--color-border);
          padding: 50px 0 30px 0;
          background-color: var(--color-bg-darker);
          position: relative;
          z-index: 10;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          text-align: center;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .brand-text {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: var(--color-text);
        }

        .brand-tagline {
          font-size: 13.5px;
          color: var(--color-text-muted);
          max-width: 320px;
        }

        .footer-socials {
          display: flex;
          gap: 20px;
        }

        .foot-social-link {
          color: var(--color-text-muted);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .foot-social-link:hover {
          color: #ffffff;
          border-color: var(--color-primary);
          box-shadow: 0 0 10px var(--color-primary-glow);
          transform: translateY(-2px);
        }

        .footer-bottom {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 20px;
          margin-top: 10px;
        }

        .copyright-text {
          font-size: 13px;
          color: var(--color-text-muted);
        }

        .scroll-top-btn {
          border: 1px solid var(--color-border);
          background: rgba(255, 255, 255, 0.02);
          color: var(--color-text-muted);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .scroll-top-btn:hover {
          color: #ffffff;
          border-color: var(--color-secondary);
          box-shadow: 0 0 10px var(--color-secondary-glow);
        }

        @media (max-width: 580px) {
          .footer-bottom {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>
    </footer>
  );
}
