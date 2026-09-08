import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ExternalLink, Layers, CheckCircle, Code2,
  Users, Wrench, Layout
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  // Focus close button on mount; restore focus on unmount
  useEffect(() => {
    const prev = document.activeElement;
    closeRef.current?.focus();
    return () => prev?.focus();
  }, []);

  // Close on backdrop click
  const onBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        onClick={onBackdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${project.id}`}
      >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.93, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 30 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div
            className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 border-b"
            style={{
              borderColor: 'var(--border)',
              background: 'rgba(13, 29, 53, 0.97)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="project-number">{project.number}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}
                >
                  {project.type}
                </span>
              </div>
              <h2
                id={`modal-title-${project.id}`}
                className="text-xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.title}
              </h2>
              <p className="text-sm font-semibold mt-0.5" style={{ color: project.accentColor }}>
                {project.subtitle}
              </p>
            </div>
            <button
              ref={closeRef}
              onClick={onClose}
              className="p-2 rounded-lg transition-colors flex-shrink-0 mt-1"
              style={{ color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)' }}
              aria-label="Close project details"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="p-6 flex flex-col gap-6">
            {/* Overview */}
            <Section icon={Layout} title="Overview">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {project.longDescription}
              </p>
            </Section>

            {/* Problem / Solution */}
            {project.problem && (
              <div className="grid sm:grid-cols-2 gap-4">
                <Section icon={null} title="Problem" compact accentColor="#f87171">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {project.problem}
                  </p>
                </Section>
                <Section icon={null} title="Solution" compact accentColor="#34d399">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {project.solution}
                  </p>
                </Section>
              </div>
            )}

            {/* Technologies */}
            <Section icon={Code2} title="Technologies Used">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: 'rgba(56,189,248,0.1)',
                      color: 'var(--accent)',
                      border: '1px solid rgba(56,189,248,0.2)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Section>

            {/* Architecture */}
            {project.architecture && project.architecture.length > 0 && (
              <Section icon={Layers} title="Architecture">
                <div className="flex flex-wrap gap-2">
                  {project.architecture.map((a) => (
                    <span
                      key={a}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: 'rgba(129,140,248,0.1)',
                        color: '#a5b4fc',
                        border: '1px solid rgba(129,140,248,0.2)',
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </Section>
            )}

            {/* Roles */}
            {project.roles && project.roles.length > 0 && (
              <Section icon={Users} title="User Roles">
                <div className="flex flex-wrap gap-2">
                  {project.roles.map((r) => (
                    <span
                      key={r}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: 'rgba(52,211,153,0.1)',
                        color: '#34d399',
                        border: '1px solid rgba(52,211,153,0.2)',
                      }}
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </Section>
            )}

            {/* Features */}
            <Section icon={CheckCircle} title="Key Features">
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span className="mt-1 flex-shrink-0" style={{ color: '#34d399' }}>
                      <CheckCircle size={13} aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Section>

            {/* My Contribution */}
            {project.contribution && (
              <Section icon={Wrench} title="My Contribution">
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {project.contribution}
                </p>
              </Section>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={16} aria-hidden="true" />
                  View on GitHub
                </a>
              ) : (
                <span
                  className="btn-outline opacity-40 cursor-not-allowed"
                  aria-label="GitHub repository not yet available"
                >
                  <Github size={16} aria-hidden="true" />
                  GitHub (Coming Soon)
                </span>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Internal helper sub-component for modal sections
function Section({ icon: Icon, title, children, compact = false, accentColor }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        {Icon && (
          <Icon size={15} style={{ color: 'var(--accent)' }} aria-hidden="true" />
        )}
        <h3
          className="text-sm font-bold tracking-wide uppercase"
          style={{ color: accentColor || 'var(--accent)', letterSpacing: '0.08em' }}
        >
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}
