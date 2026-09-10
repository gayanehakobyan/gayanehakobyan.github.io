import { useState, useCallback, memo } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

import useStyles from './styles';
import { ContactFormData } from './types';

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  location: '',
  message: '',
};

function Contact() {
  const styles = useStyles();
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { ref: headingRef, visible: headingVisible } = useScrollReveal();
  const { ref: cardRef, visible: cardVisible } = useScrollReveal(0.08);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError('');
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Failed to send');
        setSubmitted(true);
        setForm(INITIAL_FORM);
      } catch {
        setError('Something went wrong. Please email me directly at gayanehakobyan93@gmail.com');
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div
          ref={headingRef}
          className={`${styles.heading} ${headingVisible ? styles.headingVisible : ''}`}
        >
          <h2 className={styles.title}>GET IN TOUCH</h2>
          <div className={styles.divider} />
        </div>

        <div
          ref={cardRef}
          className={`${styles.card} ${cardVisible ? styles.cardVisible : ''}`}
          style={{ transitionDelay: cardVisible ? '100ms' : '0ms' }}
        >
          {submitted ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>✉️</div>
              <h3 className={styles.successTitle}>Message sent!</h3>
              <p className={styles.successText}>
                Thank you! I'll get back to you at{' '}
                <span className={styles.successAccent}>gayanehakobyan93@gmail.com</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    className={styles.input}
                    autoComplete="name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={styles.input}
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 000 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                    className={styles.input}
                    autoComplete="tel"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="location" className={styles.label}>
                    Your Location / Address
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City, Country"
                    value={form.location}
                    onChange={handleChange}
                    className={styles.input}
                    autoComplete="address-level2"
                  />
                </div>
              </div>
              <div className={styles.fieldFull}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or inquiry…"
                  value={form.message}
                  onChange={handleChange}
                  className={styles.textarea}
                />
              </div>
              {error && <p style={{ color: '#e57373', fontSize: 13, marginBottom: 16 }}>{error}</p>}
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={!form.name.trim() || loading}
              >
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(Contact);
