import { motion } from 'framer-motion';
import { Mail, ChevronUp, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { profile } from '../data/portfolio';

const SOCIAL = [
  { icon: Github,   href: profile.github,            label: 'GitHub',   isExternal: true,  available: !!profile.github },
  { icon: Linkedin, href: profile.linkedin,           label: 'LinkedIn', isExternal: true,  available: !!profile.linkedin },
  { icon: Mail,     href: `mailto:${profile.email}`,  label: 'Email',    isExternal: false, available: true },
];

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer>
      <div className="section-container py-10">

        {/* ── Top row: Brand | Nav | Social ── */}
        <div className="footer-top">

          {/* Brand */}
          <div className="flex flex-col gap-1 md:min-w-max">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="font-bold text-xl w-fit"
              style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
              aria-label="Back to top"
            >
              MN.
            </a>
            <p className="text-sm" style={{ color: 'var(--text-subtle)' }}>
              Information Technology Undergraduate
            </p>
          </div>

          {/* Quick nav links — centered */}
          <nav aria-label="Footer navigation" className="flex justify-center">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="footer-social md:justify-end">
            {SOCIAL.map(({ icon: Icon, href, label, isExternal, available }) => (
              <a
                key={label}
                href={available ? href : undefined}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className={`footer-social-icon ${!available ? 'opacity-30 pointer-events-none' : ''}`}
                tabIndex={available ? 0 : -1}
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t mb-6"
          style={{ borderColor: 'var(--border)' }}
          role="separator"
        />

        {/* ── Bottom row: Copyright | Credit | Back-to-top ── */}
        <div className="footer-bottom">
          <p className="text-sm" style={{ color: 'var(--text-subtle)' }}>
            © {new Date().getFullYear()} Maneth Nanayakkara. All rights reserved.
          </p>

          <p
            className="text-sm flex items-center gap-1.5"
            style={{ color: 'var(--text-subtle)' }}
          >
            Designed &amp; Developed by{' '}
            <span style={{ color: 'var(--accent)' }}>Maneth Nanayakkara</span>
            <Heart size={12} className="text-rose-400" fill="currentColor" aria-hidden="true" />
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-colors"
            style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            whileHover={{ y: -2, borderColor: 'var(--accent)', color: 'var(--accent)' }}
            aria-label="Back to top"
          >
            <ChevronUp size={14} aria-hidden="true" />
            Top
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
