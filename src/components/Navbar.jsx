import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'profiles', label: 'Profiles' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      setScrolled(window.scrollY > 20);

      // Section tracker
      const scrollPos = window.scrollY + 120;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`navbar-wrapper ${scrolled ? 'scrolled glass-nav' : ''}`}>
        <div className="container nav-container">
          <div className="nav-logo" onClick={() => handleNavClick('home')}>
            <Code2 size={28} className="logo-icon" />
            <span className="logo-text">Vishal<span className="text-gradient">Yadav</span></span>
          </div>

          {/* Desktop Nav Items */}
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Nav Button */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-container">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          z-index: 1000;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        
        .navbar-wrapper.scrolled {
          height: 70px;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .logo-icon {
          color: var(--color-primary);
          filter: drop-shadow(0 0 8px var(--color-primary-glow));
        }

        .logo-text {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: var(--color-text);
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 16px;
        }

        .nav-btn {
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          padding: 8px 0;
        }

        .nav-btn:hover {
          color: var(--color-text);
        }

        .nav-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          transition: width 0.3s ease;
        }

        .nav-btn:hover::after,
        .nav-btn.active::after {
          width: 100%;
        }

        .nav-btn.active {
          color: var(--color-text);
        }

        .mobile-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: var(--color-text);
          cursor: pointer;
        }

        /* Mobile Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 999;
          transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-left: 1px solid var(--color-border);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          padding: 80px 24px 24px;
        }

        .mobile-nav-drawer.open {
          right: 0;
        }

        .drawer-container {
          width: 100%;
        }

        .mobile-nav-drawer ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .mobile-nav-btn {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 500;
          padding: 10px 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-nav-btn:hover,
        .mobile-nav-btn.active {
          color: var(--color-text);
          padding-left: 8px;
          border-left: 3px solid var(--color-primary);
        }

        @media (max-width: 868px) {
          .nav-links {
            display: none;
          }
          .mobile-toggle-btn {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
