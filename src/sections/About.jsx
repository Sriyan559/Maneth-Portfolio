import { motion } from 'framer-motion';
import { Download, User, MapPin, GraduationCap, BookOpen, Target, Briefcase } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/portfolio';

const CARD_ICONS = {
  Name: User,
  Location: MapPin,
  Current: GraduationCap,
  University: BookOpen,
  Focus: Target,
  Availability: Briefcase,
};

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="section-container">
        <SectionHeading
          label="Who Am I"
          title="About Me"
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* ── Photo + quick bio ────────────────────────── */}
          <motion.div
            className="lg:col-span-2 flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)',
                  transform: 'scale(1.15)',
                }}
                aria-hidden="true"
              />
              <div
                className="w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden"
                style={{ border: '2px solid rgba(56,189,248,0.3)' }}
              >
                <img
                  src={profile.profileImage}
                  alt="Maneth Nanayakkara"
                  className="w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Info cards */}
            <div className="w-full grid gap-2">
              {profile.aboutCards.map(({ label, value }) => {
                const Icon = CARD_ICONS[label] || User;
                return (
                  <div
                    key={label}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}
                  >
                    <Icon size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} aria-hidden="true" />
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="text-xs font-semibold shrink-0"
                        style={{ color: 'var(--text-subtle)', minWidth: '80px' }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-sm font-medium truncate"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Text content ──────────────────────────────── */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="flex flex-col gap-4">
              {profile.aboutText.map((para, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-[14.5px] leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* What I work with — mini cards */}
            <div>
              <h3
                className="text-sm font-bold tracking-widest uppercase mb-4"
                style={{ color: 'var(--accent)', letterSpacing: '0.15em' }}
              >
                What I Work With
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { title: 'Frontend', desc: 'React.js · React Native · JavaScript' },
                  { title: 'Backend',  desc: 'Node.js · Spring Boot · REST APIs' },
                  { title: 'Databases',desc: 'MongoDB · MySQL · SQL' },
                  { title: 'Architecture', desc: 'MVC · 3-Tier · Role-Based' },
                  { title: 'Mobile',   desc: 'React Native · Expo' },
                  { title: 'Cloud',    desc: 'AWS Fundamentals · Railway' },
                ].map(({ title, desc }) => (
                  <motion.div
                    key={title}
                    className="glass-card glass-card-lift p-4"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p
                      className="text-xs font-bold mb-1"
                      style={{ color: 'var(--accent)' }}
                    >
                      {title}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-subtle)' }}>
                      {desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href={profile.cvPath}
                download
                className="btn-primary"
                aria-label="Download Maneth Nanayakkara full CV"
              >
                <Download size={17} aria-hidden="true" />
                Download Full CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
