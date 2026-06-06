import Navbar from './components/Navbar';
import ParticleBg from './components/ParticleBg';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* 1. Canvas Interactive Particle Background */}
      <ParticleBg />

      {/* 2. Responsive sticky navbar */}
      <Navbar />

      {/* 3. Single Page Layout Structure */}
      <main className="main-content-wrapper">
        {/* Landing Hero Section */}
        <Hero />

        {/* Professional narrative and about section */}
        <About />

        {/* Technical skills section */}
        <Skills />

        {/* Premium project cards with filter capabilities */}
        <Projects />

        {/* Work Internship experience timeline */}
        <Experience />

        {/* Academic path education timeline */}
        <Education />

        {/* Hackathons and Activities */}
        <Hackathons />

        {/* Certifications and credentials */}
        <Certifications />

        {/* Coding badges and Competitive programming cards */}
        <CodingProfiles />

        {/* Dual column Contact form + handles info */}
        <Contact />
      </main>

      {/* 4. Page footer */}
      <Footer />

      <style>{`
        .main-content-wrapper {
          position: relative;
          z-index: 1; /* Sits above the fixed Canvas */
        }
      `}</style>
    </>
  );
}
