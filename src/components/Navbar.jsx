import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { profile } from '../data/portfolio';

const NAV_ITEMS = [
  { label: 'Home',          href: '#home' },
  { label: 'About',         href: '#about' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Projects',      href: '#projects' },
  { label: 'Education',     href: '#education' },
  { label: 'Certification', href: '#certification' },
  { label: 'Contact',       href: '#contact' },
];

const SECTION_IDS = NAV_ITEMS.map((n) => n.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const activeId                  = useScrollSpy(SECTION_IDS, { offset: 80 });

  const { scrollYProgress }       = useScroll();
  const scaleX                    = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id  = href.slice(1);
    const el  = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
        aria-hidden="true"
      />

      <nav
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="font-bold text-xl tracking-tight"
              style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
              aria-label="Maneth Nanayakkara — Home"
            >
              MN<span style={{ color: 'var(--text-muted)' }}>.</span>
            </a>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-7" role="list">
              {NAV_ITEMS.map(({ label, href }) => {
                const id = href.slice(1);
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className={`nav-link ${activeId === id ? 'active' : ''}`}
                      aria-current={activeId === id ? 'page' : undefined}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Download CV — desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={profile.cvPath}
                download
                className="btn-primary py-2 px-4 text-sm"
                aria-label="Download Maneth Nanayakkara CV"
              >
                <Download size={15} aria-hidden="true" />
                Download CV
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          id="mobile-menu"
          className="mobile-menu lg:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          aria-hidden={!menuOpen}
        >
          <div className="section-container py-5 flex flex-col gap-1">
            {NAV_ITEMS.map(({ label, href }) => {
              const id = href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`nav-link py-3 px-2 border-b text-base block ${
                    activeId === id ? 'active' : ''
                  }`}
                  style={{ borderColor: 'var(--border)' }}
                  aria-current={activeId === id ? 'page' : undefined}
                >
                  {label}
                </a>
              );
            })}
            <a
              href={profile.cvPath}
              download
              className="btn-primary mt-4 justify-center"
              aria-label="Download Maneth Nanayakkara CV"
            >
              <Download size={15} aria-hidden="true" />
              Download CV
            </a>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
