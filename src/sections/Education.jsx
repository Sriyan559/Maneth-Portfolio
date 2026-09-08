import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, BookOpen } from 'lucide-react';
import TimelineCard from '../components/TimelineCard';
import { education } from '../data/portfolio';

function NodeIcon({ iconType }) {
  if (iconType === 'briefcase') return <Briefcase size={17} className="text-sky-400" aria-hidden="true" />;
  if (iconType === 'graduation') return <GraduationCap size={18} className="text-sky-400" aria-hidden="true" />;
  return <BookOpen size={17} className="text-sky-400" aria-hidden="true" />;
}

export default function Education() {
  return (
    <section id="education" className="relative" aria-labelledby="education-heading">
      <div className="section-container">

        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-4 uppercase tracking-widest"
            style={{
              color: 'var(--accent)',
              background: 'rgba(56,189,248,0.08)',
              border: '1px solid rgba(56,189,248,0.25)',
            }}
          >
            <GraduationCap size={13} aria-hidden="true" />
            <span>Academic Foundation</span>
          </motion.div>

          <motion.h2
            id="education-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Education &amp; <span className="gradient-text">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            The academic foundations, technical disciplines, and practical experiences shaping my engineering journey.
          </motion.p>
        </div>

        {/* ── Timeline ── */}
        <div className="edu-timeline-wrapper">
          {/* Spine */}
          <div className="edu-spine" aria-hidden="true" />

          {/* Items */}
          {education.map((item, index) => {
            const isRight = item.side === 'right';

            return (
              <motion.div
                key={item.id}
                className={`edu-item ${isRight ? 'edu-right' : 'edu-left'}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                {/* Node icon on spine */}
                <div className="edu-node" aria-hidden="true">
                  <NodeIcon iconType={item.icon} />
                </div>

                {/* Horizontal connector (CSS handles desktop-only visibility) */}
                <div className="edu-connector" aria-hidden="true" />

                {/* Card */}
                <div className="edu-card-wrapper">
                  <TimelineCard item={item} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
