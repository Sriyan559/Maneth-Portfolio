import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certification" aria-labelledby="certification-heading">
      <div className="section-container">
        <SectionHeading
          label="Professional Development"
          title="Certification"
          subtitle="Currently investing in cloud knowledge to complement my software development skills."
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="glass-card p-7 md:p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="cert-card">
                {/* ── Header row ── */}
                <div className="cert-header">
                  <div className="cert-header-left">
                    {/* AWS cloud icon */}
                    <div
                      className="cert-icon"
                      style={{
                        background: 'linear-gradient(135deg, rgba(251,146,60,0.15), rgba(251,191,36,0.1))',
                        border: '1px solid rgba(251,146,60,0.3)',
                      }}
                      aria-hidden="true"
                    >
                      ☁️
                    </div>
                    <div className="cert-title-block">
                      <h3 className="cert-title">{cert.name}</h3>
                      <p className="cert-meta">
                        {cert.issuer} · Exam Code: {cert.code}
                      </p>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div
                    className="cert-status-badge"
                    style={{
                      background: 'rgba(251,191,36,0.12)',
                      border: '1px solid rgba(251,191,36,0.35)',
                      color: '#fbbf24',
                    }}
                    role="status"
                    aria-label="Certification status: In Progress"
                  >
                    <Clock size={13} aria-hidden="true" />
                    In Progress
                  </div>
                </div>

                {/* ── Divider ── */}
                <div className="cert-divider" />

                {/* ── Description ── */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {cert.description}
                </p>

                {/* ── Topics ── */}
                <div>
                  <p className="cert-topics-label">Topics Covered</p>
                  <div className="cert-topics-list">
                    {cert.topics.map((topic, ti) => (
                      <motion.span
                        key={topic}
                        className="cert-topic-badge"
                        style={{
                          background: 'rgba(56,189,248,0.08)',
                          border: '1px solid rgba(56,189,248,0.2)',
                          color: '#93c5fd',
                        }}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: ti * 0.05 + 0.3 }}
                      >
                        <CheckCircle size={10} style={{ color: '#34d399' }} aria-hidden="true" />
                        {topic}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* ── Progress ── */}
                <div className="cert-progress-section">
                  <div className="cert-progress-header">
                    <span className="cert-progress-label">Study Progress</span>
                    <span className="cert-progress-value">In Progress</span>
                  </div>
                  <div
                    className="cert-progress-bar-track"
                    role="progressbar"
                    aria-label="Certification study progress"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #fb923c, #fbbf24)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
