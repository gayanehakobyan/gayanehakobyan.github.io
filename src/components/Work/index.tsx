import { memo } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

import useStyles from './styles';
import { Project } from './types';

const projects: Project[] = [
  {
    name: 'AI Audio Generator',
    tags: [
      'React 18',
      'TypeScript 5.8',
      'Vite 7',
      'TanStack Query v5',
      'Picsart Workflows',
      'Datadog RUM',
      'React-JSS',
      'Miniapps SDK',
    ],
    bullets: [
      'Text-to-speech miniapp featuring voice selection, generation queue management, and audio item playback.',
      'Leveraged TanStack React Query v5 for server-state caching, background refetching, and optimistic UI updates.',
      'Integrated Picsart Workflows Client for orchestrating AI audio generation pipelines; updated Design System to v7.7.25.',
    ],
  },
  {
    name: 'Agency — AI Ad Generator',
    tags: ['React 18', 'TypeScript', 'Vite', 'Miniapps SDK v8', 'React-JSS', 'ESLint 9'],
    bullets: [
      'Multi-platform (Web, iOS, Android) AI-powered ad generation miniapp producing flat and layered ad outputs.',
      '44 components, 33 custom hooks, and 18+ API service utilities.',
      'Fully custom navigation-based UI using the Picsart Miniapps SDK platform abstraction layer.',
    ],
  },
  {
    name: 'Batch Editor',
    tags: [
      'Redux Toolkit',
      'Redux Persist',
      'Canvas API',
      'React Spring',
      'Jest',
      'MSW',
      'Datadog RUM',
    ],
    bullets: [
      "Primary contributor with 180+ commits on Picsart's flagship bulk photo-editing web application.",
      'Drag-and-drop batch pipeline, canvas manipulation, and React Spring animations for smooth tool interactions.',
      'Led Picsart SDK upgrades (v6 → v9+) and integrated Datadog RUM + Bugsnag for real-time monitoring.',
    ],
  },
];

function Work() {
  const styles = useStyles();
  const { ref: headingRef, visible: headingVisible } = useScrollReveal();
  const { ref: cardsRef, visible: cardsVisible } = useScrollReveal(0.05);

  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <div
          ref={headingRef}
          className={`${styles.heading} ${headingVisible ? styles.headingVisible : ''}`}
        >
          <h2 className={styles.title}>WORK</h2>
          <div className={styles.divider} />
        </div>

        <div ref={cardsRef} className={styles.grid}>
          {projects.map(({ name, tags, bullets }, i) => (
            <article
              key={name}
              className={`${styles.card} ${cardsVisible ? styles.cardRevealed : ''}`}
              style={{ transitionDelay: cardsVisible ? `${i * 130}ms` : '0ms' }}
            >
              <h3 className={styles.cardTitle}>{name}</h3>

              <div className={styles.tagRow}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <ul className={styles.bulletList}>
                {bullets.map((b) => (
                  <li key={b} className={styles.bulletItem}>
                    <div className={styles.bullet} />
                    <span className={styles.bulletText}>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Work);
