import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';

const LINKS = [
  {
    id: 'github',
    icon: Github,
    href: profile.github,
    label: 'GitHub profile',
    available: !!profile.github,
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    href: profile.linkedin,
    label: 'LinkedIn profile',
    available: !!profile.linkedin,
  },
  {
    id: 'email',
    icon: Mail,
    href: `mailto:${profile.email}`,
    label: 'Send an email',
    available: true,
  },
];

export default function SocialLinks({ size = 20, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} role="list" aria-label="Social media links">
      {LINKS.map(({ id, icon: Icon, href, label, available }, i) => (
        <motion.a
          key={id}
          role="listitem"
          href={available ? href : undefined}
          target={id !== 'email' ? '_blank' : undefined}
          rel={id !== 'email' ? 'noopener noreferrer' : undefined}
          aria-label={label}
          aria-disabled={!available}
          className={`p-2.5 rounded-lg border transition-all duration-200 ${
            available
              ? 'hover:border-sky-400 hover:text-sky-400 hover:bg-sky-400/10 cursor-pointer'
              : 'opacity-40 cursor-not-allowed'
          }`}
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 + 0.3 }}
          whileHover={available ? { y: -2 } : {}}
          tabIndex={available ? 0 : -1}
        >
          <Icon size={size} aria-hidden="true" />
        </motion.a>
      ))}
    </div>
  );
}
