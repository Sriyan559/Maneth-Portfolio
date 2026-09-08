import { useEffect } from 'react';
import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

export default function App() {
  // Trap keyboard focus inside modal when open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        // Individual modals handle their own Escape; this is a global safety net
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* Fixed background effects */}
      <BackgroundEffect />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
