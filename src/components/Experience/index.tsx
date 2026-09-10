import { memo } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

import useStyles from './styles';
import { Job } from './types';

const jobs: Job[] = [
  {
    company: 'Picsart',
    role: 'Senior Software Engineer · Growth & AI Products',
    period: 'Oct 2021 – May 2026',
    note: 'Maternity leave: Nov 2023 – Jan 2025',
    stack:
      'React 18 · TypeScript 5.x · Vite 5/7 · Redux Toolkit · Zustand · React-JSS · Next.js · Picsart Miniapps SDK (v6–v10) · Cascade Design System',
    bullets: [
      'Owned frontend architecture across five product teams (Photo Editing, Growth, Marketplace, AI Products, Miniapps), shipping AI-powered creative tools used by a 150M+ MAU platform.',
      'Led AI Influencer Studio: 5-step character creation pipeline with Fal.ai / Kling 3.0, credit validation, webhook polling, and tab-reentry recovery.',
      'Built Agency — AI Ad Generator: multi-platform miniapp (Web, iOS, Android) with 44 components, 33 custom hooks, and custom navigation-based UI.',
      'Primary contributor (180+ commits) on Batch Editor: drag-and-drop pipeline, canvas manipulation, Redux Toolkit slices, and React Spring animations.',
      'Contributed to AI Audio Generator using TanStack React Query v5 for server-state caching and Picsart Workflows orchestration.',
      "Built Picsart's hashtag discovery page with Next.js — full SSR, SEO meta tags, and 80%+ Lighthouse performance score.",
      'Led Picsart Miniapps SDK upgrades (v6 → v9+) ensuring backward-compatible migrations across the miniapp platform.',
    ],
  },
  {
    company: 'Digital LLC (Envision)',
    role: 'Front-End Developer · Betting & Gaming Platform',
    period: 'Feb 2019 – Oct 2021',
    stack:
      'React · Redux · GatsbyJS · Node.js · Socket.IO · TypeScript · Webpack · Styled Components · SASS',
    bullets: [
      'Developed all payment flows: bank transfer, cryptocurrency, and freelance-me payment integrations.',
      'Built complete prematch/live sports, Powerball, virtual sport, and bonus sections for a high-traffic betting platform.',
      'Led a full redesign and performance improvement of the casino product.',
      'Delivered the decentral.ge website using Gatsby.js and Styled Components.',
    ],
  },
];

function Experience() {
  const styles = useStyles();
  const { ref: headingRef, visible: headingVisible } = useScrollReveal();
  const { ref: job0Ref, visible: job0Visible } = useScrollReveal(0.05);
  const { ref: job1Ref, visible: job1Visible } = useScrollReveal(0.05);
  const jobRefs = [job0Ref, job1Ref];
  const jobVisibles = [job0Visible, job1Visible];

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <div
          ref={headingRef}
          className={`${styles.heading} ${headingVisible ? styles.headingVisible : ''}`}
        >
          <h2 className={styles.title}>EXPERIENCE</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.timelineWrap}>
          <div className={styles.line} />
          <div className={styles.jobList}>
            {jobs.map(({ company, role, period, note, stack, bullets }, i) => (
              <div
                key={company}
                ref={jobRefs[i]}
                className={`${styles.job} ${jobVisibles[i] ? styles.jobVisible : ''}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={styles.dot} />
                <div className={styles.jobHeader}>
                  <h3 className={styles.company}>{company}</h3>
                  <span className={styles.period}>{period}</span>
                </div>
                <p className={styles.role}>{role}</p>
                {note && <p className={styles.note}>{note}</p>}
                <p className={styles.stack}>{stack}</p>
                <ul className={styles.bulletList}>
                  {bullets.map((b) => (
                    <li key={b} className={styles.bulletItem}>
                      <div className={styles.bullet} />
                      <span className={styles.bulletText}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Experience);
