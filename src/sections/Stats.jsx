import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';

export default function Stats() {
  return (
    <section aria-label="Quick stats" style={{ padding: '0' }}>
      <div className="section-container">
        <motion.div
          className="glass-card"
          style={{ padding: '1.5rem 2rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
            {profile.stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="flex flex-col items-center text-center px-4 py-2"
                style={{
                  borderRight: i < profile.stats.length - 1 ? '1px solid rgba(56,189,248,0.12)' : 'none',
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.45 }}
              >
                <span
                  className="text-xl sm:text-2xl font-black mb-1 font-mono"
                  style={{ color: 'var(--accent)' }}
                >
                  {value}
                </span>
                <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
