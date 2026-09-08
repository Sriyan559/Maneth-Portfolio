import { motion } from 'framer-motion';
import { ExternalLink, Eye, Star } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectCard({ project, index, onOpen }) {
  const isFeatured = project.featured;

  return (
    <motion.article
      className={`glass-card glass-card-lift p-6 flex flex-col gap-4 cursor-pointer relative overflow-hidden ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(project); } }}
      aria-label={`View details for ${project.title}`}
    >
      {/* Gradient accent top border */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.color}`}
        aria-hidden="true"
      />

      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="project-number">{project.number}</span>
          {isFeatured && (
            <span
              className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(56,189,248,0.1)', color: 'var(--accent)', border: '1px solid rgba(56,189,248,0.25)' }}
            >
              <Star size={10} fill="currentColor" aria-hidden="true" />
              Featured
            </span>
          )}
        </div>
        <span
          className="text-xs px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}
        >
          {project.type}
        </span>
      </div>

      {/* Title & subtitle */}
      <div>
        <h3
          className="text-base sm:text-[17px] font-bold mb-1 leading-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>
        <p className="text-xs sm:text-[13px] font-medium" style={{ color: project.accentColor }}>
          {project.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-[13px] leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>

      {/* Roles */}
      {project.roles && project.roles.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.roles.map((role) => (
            <span
              key={role}
              className="text-xs px-2 py-0.5 rounded"
              style={{
                background: 'rgba(129,140,248,0.1)',
                color: '#a5b4fc',
                border: '1px solid rgba(129,140,248,0.2)',
              }}
            >
              {role}
            </span>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-2 mt-auto pt-2">
        <button
          className="btn-outline py-1.5 px-3 text-xs"
          onClick={(e) => { e.stopPropagation(); onOpen(project); }}
          aria-label={`View full details for ${project.title}`}
        >
          <Eye size={13} aria-hidden="true" />
          View Details
        </button>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline py-1.5 px-3 text-xs"
            onClick={(e) => e.stopPropagation()}
            aria-label={`GitHub repository for ${project.title}`}
          >
            <Github size={13} aria-hidden="true" />
            GitHub
          </a>
        ) : (
          <span
            className="py-1.5 px-3 text-xs rounded-lg opacity-40 cursor-not-allowed inline-flex items-center gap-1.5"
            style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
            aria-label="GitHub link unavailable"
          >
            <Github size={13} aria-hidden="true" />
            GitHub
          </span>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-1.5 px-3 text-xs"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Live demo for ${project.title}`}
          >
            <ExternalLink size={13} aria-hidden="true" />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
