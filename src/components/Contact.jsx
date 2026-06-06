import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "b0d161e0-34c7-4a0a-9b50-02234dd979a7", // Real key from web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact: ${formData.name}`,
          message: formData.message
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="section-title">Contact Me</h2>
          </div>
        </ScrollReveal>

        <div className="contact-grid">
          {/* Left Side: Contact Form */}
          <ScrollReveal delay={150}>
            <div className="contact-form-container glass">
              <h3 className="form-heading">Send a Message</h3>
              
              {status === 'success' ? (
                <div className="status-message success-message">
                  <CheckCircle2 size={36} className="status-icon" />
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. Vishal will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <div className="error-banner">
                      <AlertCircle size={16} />
                      <span>Please fill in all required fields.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary btn-glow submit-btn"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="spinner"></span> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Right Side: Contact Info details */}
          <ScrollReveal delay={300}>
            <div className="contact-info-container">
              <h3 className="info-heading">Contact Information</h3>
              <p className="info-lead-text">
                Feel free to contact me for internship opportunities, project collaborations, or tech conversations.
              </p>

              <div className="info-details-list">
                <a href="mailto:yadavvishal00101@gmail.com" className="info-item-link glass">
                  <div className="info-icon-wrapper mail-wrapper">
                    <Mail size={20} />
                  </div>
                  <div className="info-content-block">
                    <h4>Email</h4>
                    <p>yadavvishal00101@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+918591909421" className="info-item-link glass">
                  <div className="info-icon-wrapper phone-wrapper">
                    <Phone size={20} />
                  </div>
                  <div className="info-content-block">
                    <h4>Phone</h4>
                    <p>+91 8591909421</p>
                  </div>
                </a>

                <div className="info-item-link glass location-static">
                  <div className="info-icon-wrapper loc-wrapper">
                    <MapPin size={20} />
                  </div>
                  <div className="info-content-block">
                    <h4>Location</h4>
                    <p>Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="info-social-block">
                <h4>Connect on Socials</h4>
                <div className="social-icon-row">
                  <a 
                    href="https://github.com/vishalyadav-git" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-badge-btn glass github-hover"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/vishalyadav01/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-badge-btn glass linkedin-hover"
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: transparent;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
          align-items: start;
        }

        /* Form styling */
        .contact-form-container {
          padding: 40px;
          text-align: left;
        }

        .form-heading {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 30px;
        }

        .submit-btn {
          width: 100%;
          padding: 14px 0;
          border-radius: 12px;
          font-size: 16px;
        }

        /* Status message overlays */
        .status-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 20px;
          gap: 15px;
          min-height: 400px;
        }

        .status-icon {
          color: var(--color-secondary);
          filter: drop-shadow(0 0 10px var(--color-secondary-glow));
          animation: scale-up 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes scale-up {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .status-message h4 {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 700;
          color: var(--color-text);
        }

        .status-message p {
          color: var(--color-text-muted);
          font-size: 15px;
          max-width: 320px;
        }

        .error-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #EF4444;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 14px;
          margin-bottom: 20px;
        }

        /* Loading spinner */
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #ffffff;
          animation: spin 1s ease-in-out infinite;
          display: inline-block;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Info column (Right) */
        .contact-info-container {
          text-align: left;
        }

        .info-heading {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 15px;
        }

        .info-lead-text {
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .info-details-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 35px;
        }

        .info-item-link {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          text-decoration: none;
          color: inherit;
        }

        .info-item-link:hover {
          border-color: var(--color-primary);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.08);
          transform: translateY(-2px);
        }

        .location-static:hover {
          border-color: var(--color-border);
          box-shadow: var(--shadow-premium);
          transform: none;
        }

        .info-icon-wrapper {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mail-wrapper {
          background: rgba(59, 130, 246, 0.1);
          color: var(--color-primary);
        }

        .phone-wrapper {
          background: rgba(6, 182, 212, 0.1);
          color: var(--color-secondary);
        }

        .loc-wrapper {
          background: rgba(168, 85, 247, 0.1);
          color: #A855F7;
        }

        .info-content-block h4 {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-content-block p {
          font-size: 15px;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        /* Social Block */
        .info-social-block h4 {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 15px;
        }

        .social-icon-row {
          display: flex;
          gap: 12px;
        }

        .social-badge-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          text-decoration: none;
          color: var(--color-text-muted);
          font-size: 14px;
          font-weight: 600;
        }

        .social-badge-btn:hover {
          color: #ffffff;
        }

        .github-hover:hover {
          border-color: #ffffff;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
        }

        .linkedin-hover:hover {
          border-color: #0077b5;
          box-shadow: 0 0 10px rgba(0, 119, 181, 0.2);
          color: #0077b5;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 480px) {
          .contact-form-container {
            padding: 24px;
          }
          .social-icon-row {
            flex-direction: column;
          }
          .social-badge-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
