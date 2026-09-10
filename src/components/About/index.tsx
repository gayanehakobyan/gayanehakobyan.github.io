import { memo } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import useStyles from './styles';

function About() {
  const styles = useStyles();
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className={styles.section}>
      <div ref={ref} className={`${styles.inner} ${visible ? styles.innerVisible : ''}`}>
        <h2 className={styles.title}>ABOUT</h2>
        <div className={styles.divider} />

        <p className={styles.paragraph}>
          Senior Front-End Software Engineer with 6+ years building scalable, production-grade React
          applications and AI-powered products. Deep ownership across an AI product suite used by{' '}
          <span className={styles.highlight}>150M+ monthly active users</span> — batch photo
          editing, AI character generation, ad creation, and audio generation tools.
        </p>

        <p className={styles.paragraph}>
          Strong focus on component architecture, page-level performance optimisation, and scalable
          front-end system design. Rotated across five product teams at{' '}
          <span className={styles.accentText}>Picsart</span> (Photo Editing, Growth, Marketplace, AI
          Products, Miniapps), adapting quickly to new codebases, processes, and priorities with
          each move.
        </p>

        <p className={styles.paragraph}>
          An early adopter of AI-assisted development — uses{' '}
          <span className={styles.highlight}>Claude Code</span> and{' '}
          <span className={styles.highlight}>Cursor IDE</span> daily within a custom-built
          multi-repo workspace covering 36+ repositories, with MCP integrations for Bugsnag, GitLab,
          Jira, and the Cascade Design System. Result: faster bug triage, automated code reviews,
          and accelerated feature delivery on AI products.
        </p>

        <div className={styles.credentialsRow}>
          {[
            "Master's · Management — ASUE",
            "Bachelor's · Management — ASUE",
            'Certificate · Web Development — ACA',
            'Certificate · Anthropic Courses',
          ].map((item) => (
            <span key={item} className={styles.credential}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(About);
