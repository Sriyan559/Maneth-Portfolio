import { motion } from 'framer-motion';

/**
 * Reusable animated section heading component.
 * Supports left, center, and right alignment.
 */
export default function SectionHeading({ label, title, subtitle, align = 'center' }) {
  const isCenter = align === 'center';
  const isLeft   = align === 'left';

  const wrapperClass = isCenter
    ? 'flex flex-col items-center text-center mb-14'
    : isLeft
    ? 'flex flex-col items-start text-left mb-14'
    : 'flex flex-col items-end text-right mb-14';

  return (
    <motion.div
      className={wrapperClass}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {label && (
        <span
          className="font-mono text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          style={{ color: 'var(--accent)' }}
        >
          {label}
        </span>
      )}

      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold heading-gradient mb-3"
        style={{ letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="text-base sm:text-lg max-w-2xl leading-relaxed mb-4"
          style={{ color: 'var(--text-muted)' }}
        >
          {subtitle}
        </p>
      )}

      {/* Accent bar — symmetric gradient for center, left-anchored for left */}
      <span
        className={isCenter ? 'section-accent-bar' : 'section-accent-bar section-accent-bar-left'}
        aria-hidden="true"
      />
    </motion.div>
  );
}
