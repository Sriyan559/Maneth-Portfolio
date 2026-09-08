import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, MapPin, FolderGit2 } from 'lucide-react';
import { profile } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';
import SocialLinks from '../components/SocialLinks';

// Floating tech badges configuration
const FLOATING_BADGES = [
  { label: 'React',       top: '8%',   right: '-2%',  delay: 0.4 },
  { label: 'Java',        top: '30%',  right: '-8%',  delay: 0.6 },
  { label: 'Node.js',     bottom: '30%',right: '-4%', delay: 0.8 },
  { label: 'Spring Boot', bottom: '12%',left: '-6%',  delay: 1.0 },
  { label: 'MongoDB',     top: '15%',  left: '-5%',   delay: 0.5 },
  { label: 'AWS ☁',       bottom: '50%',left: '-8%',  delay: 0.7 },
];

// Stagger variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const role = useTypewriter(profile.rotatingRoles);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      aria-label="Hero section"
      style={{ paddingTop: '4.5rem' }}
    >
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4.5rem)] py-12">

          {/* ── Left: Text content ─────────────────────────────── */}
          <motion.div
            className="flex flex-col gap-6 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <span
                className="font-mono text-sm font-semibold tracking-[0.2em] uppercase"
                style={{ color: 'var(--accent)' }}
              >
                {profile.heroIntro}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none hero-name-gradient"
              style={{ letterSpacing: '-0.03em' }}
            >
              {profile.firstName}
              <br />
              {profile.lastName}
            </motion.h1>

            {/* Static title */}
            <motion.div variants={itemVariants}>
              <p
                className="text-base sm:text-lg font-semibold flex flex-wrap items-center gap-x-2.5 gap-y-1"
                style={{ color: 'var(--text-muted)' }}
              >
                <span>{profile.title}</span>
                <span
                  style={{ color: 'var(--accent)' }}
                  aria-hidden="true"
                >
                  &amp;
                </span>
                <span>{profile.role}</span>
              </p>
            </motion.div>

            {/* Animated role */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
              aria-live="polite"
              aria-atomic="true"
            >
              <span
                className="text-xl sm:text-2xl font-bold min-h-[2rem]"
                style={{ color: 'var(--accent)' }}
              >
                {role}
                <span className="typewriter-cursor" aria-hidden="true" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed max-w-lg"
              style={{ color: 'var(--text-muted)' }}
            >
              {profile.heroDescription}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <button
                className="btn-primary"
                onClick={scrollToProjects}
                aria-label="View my projects"
              >
                <FolderGit2 size={17} aria-hidden="true" />
                View Projects
              </button>
              <a
                href={profile.cvPath}
                download
                className="btn-outline"
                aria-label="Download Maneth Nanayakkara CV"
              >
                <Download size={17} aria-hidden="true" />
                Download CV
              </a>
              <button
                className="btn-outline"
                onClick={scrollToContact}
                aria-label="Contact me"
              >
                <Mail size={17} aria-hidden="true" />
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants}>
              <SocialLinks size={18} />
            </motion.div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-1.5 text-sm"
              style={{ color: 'var(--text-subtle)' }}
            >
              <MapPin size={14} aria-hidden="true" />
              {profile.locationFull}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile image ───────────────────────────── */}
          <motion.div
            className="flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.18) 0%, transparent 70%)',
                  transform: 'scale(1.2)',
                }}
                aria-hidden="true"
              />

              {/* Animated ring */}
              <div className="profile-ring rounded-3xl">
                <div
                  className="w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden"
                  style={{ border: '3px solid rgba(56,189,248,0.3)' }}
                >
                  <img
                    src={profile.profileImage}
                    alt="Maneth Nanayakkara"
                    className="w-full h-full"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Floating tech badges */}
              {FLOATING_BADGES.map(({ label, top, bottom, left, right, delay }) => (
                <motion.div
                  key={label}
                  className="floating-badge hidden sm:block"
                  style={{ top, bottom, left, right }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay, duration: 0.4, ease: 'backOut' }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => {
            const el = document.getElementById('about');
            if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
          }}
          aria-label="Scroll down to About section"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ArrowDown size={18} style={{ color: 'var(--accent)' }} aria-hidden="true" />
          </motion.div>
          <span className="font-mono text-xs" style={{ color: 'var(--text-subtle)' }}>
            scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
