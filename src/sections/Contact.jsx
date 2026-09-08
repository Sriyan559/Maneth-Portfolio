import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import SectionHeading from '../components/SectionHeading';
import { profile, contactInfo } from '../data/portfolio';

const FORM_FIELDS = [
  { id: 'name',    label: 'Full Name',     type: 'text',  placeholder: 'Your name',              required: true },
  { id: 'email',   label: 'Email Address', type: 'email', placeholder: 'your.email@example.com', required: true },
  { id: 'subject', label: 'Subject',       type: 'text',  placeholder: 'How can I help you?',    required: true },
];

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const formRef = useRef(null);

  const validate = () => {
    const errs = {};
    if (!form.name.trim())    errs.name    = 'Please enter your name.';
    if (!form.email.trim())   errs.email   = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email.';
    if (!form.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!form.message.trim()) errs.message = 'Please enter a message.';
    return errs;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');

    const emailjsReady =
      contactInfo.emailjsServiceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      contactInfo.emailjsTemplateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      contactInfo.emailjsPublicKey  !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (emailjsReady) {
      try {
        const emailjs = await import('@emailjs/browser');
        await emailjs.sendForm(
          contactInfo.emailjsServiceId,
          contactInfo.emailjsTemplateId,
          formRef.current,
          contactInfo.emailjsPublicKey
        );
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } catch {
        setStatus('error');
      }
    } else {
      const mailto =
        `mailto:${profile.email}` +
        `?subject=${encodeURIComponent(`[Portfolio] ${form.subject}`)}` +
        `&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.location.href = mailto;
      setTimeout(() => {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      }, 800);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="section-container">
        <SectionHeading
          label="Get In Touch"
          title={contactInfo.heading}
          subtitle={contactInfo.subheading}
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* ── LEFT: Contact info ──────────────────────────── */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3
              className="text-base font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Contact Information
            </h3>

            {/* Email & Location */}
            <div className="flex flex-col gap-4">
              {[
                { icon: Mail,   label: 'Email',    value: profile.email,        href: `mailto:${profile.email}` },
                { icon: MapPin, label: 'Location', value: profile.locationFull, href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="contact-info-row">
                  <div
                    className="contact-info-icon"
                    style={{
                      background: 'rgba(56,189,248,0.1)',
                      border: '1px solid rgba(56,189,248,0.25)',
                      color: 'var(--accent)',
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="contact-info-label">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="contact-info-value"
                        style={{ color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="contact-info-value">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social buttons */}
            <div>
              <p className="contact-info-label mb-3">Connect</p>
              <div className="flex flex-wrap gap-3">
                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="btn-outline"
                    style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
                  >
                    <Github size={15} aria-hidden="true" />
                    GitHub
                  </a>
                )}
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="btn-outline"
                    style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
                  >
                    <Linkedin size={15} aria-hidden="true" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>

            {/* EmailJS note */}
            <div
              className="rounded-xl p-4 text-xs leading-relaxed"
              style={{
                background: 'rgba(56,189,248,0.05)',
                border: '1px solid rgba(56,189,248,0.15)',
                color: 'var(--text-subtle)',
              }}
            >
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Note: </span>
              If the contact form opens your email client, simply send the message from there.
              For direct form submission, configure EmailJS credentials in{' '}
              <code
                className="font-mono"
                style={{ color: 'var(--accent)', wordBreak: 'break-all' }}
              >
                src/data/portfolio.js
              </code>.
            </div>
          </motion.div>

          {/* ── RIGHT: Contact form ─────────────────────────── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="glass-card p-7 md:p-8" style={{ cursor: 'default' }}>
              {status === 'success' ? (
                <motion.div
                  className="flex flex-col items-center gap-4 py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={52} style={{ color: '#34d399' }} aria-hidden="true" />
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Message Sent!
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button className="btn-outline mt-2" onClick={() => setStatus('idle')}>
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {FORM_FIELDS.filter((f) => f.id !== 'subject').map(({ id, label, type, placeholder, required }) => (
                      <div key={id} className="flex flex-col gap-1.5">
                        <label
                          htmlFor={id}
                          className="text-sm font-semibold flex items-center gap-1"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {label}
                          {required && <span className="text-rose-400" aria-hidden="true">*</span>}
                        </label>
                        <input
                          id={id}
                          name={id}
                          type={type}
                          placeholder={placeholder}
                          value={form[id]}
                          onChange={handleChange}
                          className="form-input"
                          required={required}
                          aria-required={required}
                          aria-invalid={!!errors[id]}
                          aria-describedby={errors[id] ? `${id}-error` : undefined}
                          autoComplete={id === 'email' ? 'email' : id === 'name' ? 'name' : 'off'}
                        />
                        {errors[id] && (
                          <p
                            id={`${id}-error`}
                            className="text-xs flex items-center gap-1 mt-0.5"
                            style={{ color: '#f87171' }}
                            role="alert"
                          >
                            <AlertCircle size={11} aria-hidden="true" />
                            {errors[id]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Subject — full width */}
                  <div className="flex flex-col gap-1.5 mb-5">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold flex items-center gap-1"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Subject
                      <span className="text-rose-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can I help you?"
                      value={form.subject}
                      onChange={handleChange}
                      className="form-input"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      autoComplete="off"
                    />
                    {errors.subject && (
                      <p
                        id="subject-error"
                        className="text-xs flex items-center gap-1 mt-0.5"
                        style={{ color: '#f87171' }}
                        role="alert"
                      >
                        <AlertCircle size={11} aria-hidden="true" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message — full width */}
                  <div className="flex flex-col gap-1.5 mb-6">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold flex items-center gap-1"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Message
                      <span className="text-rose-400" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={handleChange}
                      className="form-input"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-xs flex items-center gap-1 mt-0.5"
                        style={{ color: '#f87171' }}
                        role="alert"
                      >
                        <AlertCircle size={11} aria-hidden="true" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error state */}
                  {status === 'error' && (
                    <div
                      className="mb-5 p-3.5 rounded-lg flex items-center gap-2.5 text-sm"
                      style={{
                        background: 'rgba(248,113,113,0.1)',
                        border: '1px solid rgba(248,113,113,0.3)',
                        color: '#f87171',
                      }}
                      role="alert"
                    >
                      <AlertCircle size={15} aria-hidden="true" />
                      Something went wrong. Please try emailing directly at{' '}
                      <a href={`mailto:${profile.email}`} className="underline">
                        {profile.email}
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={status === 'loading'}
                    aria-busy={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader size={16} className="animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
