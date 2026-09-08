import { Calendar, Building2, GraduationCap, BookOpen } from 'lucide-react';

function CardIcon({ iconType }) {
  if (iconType === 'briefcase') return <Building2 size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} aria-hidden="true" />;
  if (iconType === 'graduation') return <GraduationCap size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} aria-hidden="true" />;
  return <BookOpen size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} aria-hidden="true" />;
}

export default function TimelineCard({ item }) {
  return (
    <div
      className="glass-card p-4 sm:p-5"
      style={{ cursor: 'default' }}
    >
      {/* Date + tag row */}
      <div
        className="flex flex-wrap items-center justify-between gap-2 mb-2.5"
      >
        <div
          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium"
          style={{
            color: 'var(--accent)',
            background: 'rgba(56,189,248,0.08)',
            border: '1px solid rgba(56,189,248,0.25)',
          }}
        >
          <Calendar size={11} aria-hidden="true" />
          <span>{item.period}</span>
        </div>
        <span
          className="text-[11px] font-mono"
          style={{ color: 'var(--text-subtle)' }}
        >
          {item.tag}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-[15px] sm:text-base font-bold mb-1 leading-snug"
        style={{ color: 'var(--text-primary)' }}
      >
        {item.title}
      </h3>

      {/* Institution */}
      <div className="flex items-center gap-1.5 mb-2.5">
        <CardIcon iconType={item.icon} />
        <span
          className="text-xs sm:text-[13px] font-semibold leading-tight"
          style={{ color: 'var(--accent)' }}
        >
          {item.institution}
        </span>
      </div>

      {/* Description */}
      {item.description && (
        <p
          className="text-xs sm:text-[12.5px] leading-relaxed mb-3"
          style={{ color: 'var(--text-muted)' }}
        >
          {item.description}
        </p>
      )}

      {/* Bullet highlights */}
      {item.highlights && item.highlights.length > 0 && (
        <ul
          className="flex flex-col gap-2 pt-2.5"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {item.highlights.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-[11.5px] sm:text-xs leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {/* Bullet dot */}
              <span
                className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent)', opacity: 0.75 }}
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
