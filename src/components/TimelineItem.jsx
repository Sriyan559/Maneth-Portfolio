import { motion } from 'framer-motion';
import { CheckCircle, Clock, BookOpen } from 'lucide-react';

const iconMap = {
  university: BookOpen,
  school: CheckCircle,
  ongoing: Clock,
};

export default function TimelineItem({ item, index }) {
  const isOngoing = item.status === 'ongoing';
  const Icon = isOngoing ? Clock : CheckCircle;

  return (
    <motion.div
      className="relative pl-12 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
    >
      {/* Vertical line (not on last item) */}
      <div
        className="absolute left-5 top-8 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, rgba(56,189,248,0.3), transparent)' }}
        aria-hidden="true"
      />

      {/* Dot icon */}
      <div
        className="absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center border"
        style={{
          background: isOngoing ? 'rgba(56,189,248,0.1)' : 'rgba(52,211,153,0.1)',
          borderColor: isOngoing ? 'rgba(56,189,248,0.4)' : 'rgba(52,211,153,0.4)',
          color: isOngoing ? 'var(--accent)' : '#34d399',
        }}
        aria-hidden="true"
      >
        <Icon size={18} />
      </div>

      {/* Content */}
      <div className="glass-card p-5 hover:transform-none" style={{ cursor: 'default' }}>
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
            {item.degree}
          </h3>
          <span
            className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: isOngoing ? 'rgba(56,189,248,0.1)' : 'rgba(52,211,153,0.1)',
              color: isOngoing ? 'var(--accent)' : '#34d399',
            }}
          >
            {item.period}
          </span>
        </div>
        <p className="text-sm font-semibold mb-1" style={{ color: 'var(--accent)' }}>
          {item.institution}
        </p>
        {item.description && (
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            {item.description}
          </p>
        )}
        {isOngoing && (
          <span
            className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold"
            style={{ color: 'var(--accent)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Currently Enrolled
          </span>
        )}
      </div>
    </motion.div>
  );
}
