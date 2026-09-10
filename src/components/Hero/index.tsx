import { memo } from 'react';
import { FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';

import useStyles from './styles';

function Hero() {
  const styles = useStyles();

  return (
    <header id="hero" className={styles.section}>
      <div className={styles.grid}>

        {/* Left: name + contact */}
        <div className={styles.left}>
          <h1 className={styles.name}>
            GAYANE<br />HAKOBYAN
          </h1>
          <p className={styles.subtitle}>6+ Years — Yerevan, Armenia</p>

          <div className={styles.contactList}>
            <a href="mailto:gayanehakobyan93@gmail.com" className={styles.contactLink}>
              <FaEnvelope size={12} />
              gayanehakobyan93@gmail.com
            </a>
            <a href="tel:+37494231911" className={styles.contactLink}>
              <FaPhone size={12} />
              +374 94 231 911
            </a>
          </div>

          <div className={styles.socialRow}>
            <a
              href="https://linkedin.com/in/gayane-hakobyan-b088831b4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialLink}
            >
              <FaLinkedinIn size={14} />
            </a>
            <a href="mailto:gayanehakobyan93@gmail.com" aria-label="Email" className={styles.socialLink}>
              <FaEnvelope size={14} />
            </a>
            <a href="tel:+37494231911" aria-label="Phone" className={styles.socialLink}>
              <FaPhone size={14} />
            </a>
          </div>
        </div>

        {/* Center: photo with gold circle + float */}
        <div className={styles.center}>
          <div className={styles.photoContainer}>
            <div className={styles.photoCircle} />
            <div className={styles.photoFloat}>
              <img
                src="/assets/gayane.jpeg"
                alt="Gayane Hakobyan"
                className={styles.photo}
              />
            </div>
          </div>
        </div>

        {/* Right: role + CTA */}
        <div className={styles.right}>
          <p className={styles.roleLabel}>Role</p>
          <h2 className={styles.roleTitle}>
            SENIOR<br />FRONT-END<br />ENGINEER
          </h2>
          <p className={styles.roleSubtitle}>
            AI Product Interfaces<br />
            Frontend Architecture
          </p>
          <a href="#contact" className={styles.ctaBtn}>
            Hire Me
          </a>
        </div>

      </div>
    </header>
  );
}

export default memo(Hero);
