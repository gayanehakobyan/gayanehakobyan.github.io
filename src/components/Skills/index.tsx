import { memo } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

import useStyles from './styles';

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      'React 18',
      'Next.js',
      'TypeScript 5.x',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
      'Gatsby.js',
      'Node.js',
    ],
  },
  {
    label: 'Architecture',
    skills: [
      'Micro-frontends',
      'Component systems',
      'Performance optimisation',
      'SSR / SEO',
      'Canvas API',
    ],
  },
  {
    label: 'State & Testing',
    skills: [
      'Redux Toolkit',
      'Redux Persist',
      'Zustand',
      'React Context',
      'Jest 27/29',
      'React Testing Library',
      'MSW',
      'TanStack Query v5',
    ],
  },
  {
    label: 'Styling',
    skills: [
      'React-JSS',
      'Styled Components',
      'SASS / SCSS',
      'CSS Modules',
      'CSS Custom Properties',
    ],
  },
  {
    label: 'Delivery & Tooling',
    skills: [
      'Git',
      'GitLab CI/CD',
      'Docker',
      'Vite 5/7',
      'Webpack',
      'ESLint 8/9',
      'Prettier',
      'Husky',
      'Semantic Release',
    ],
  },
  {
    label: 'AI Dev Tools',
    skills: [
      'Claude Code',
      'Cursor IDE',
      'MCP',
      'Prompt Engineering',
      'Fal.ai Client',
      'Gemini API',
    ],
  },
];

const marqueeItems = [
  'React',
  'Next.js',
  'TypeScript',
  'Redux Toolkit',
  'Zustand',
  'Vite',
  'Jest',
  'React Testing Library',
  'GitLab CI/CD',
  'Docker',
  'Claude Code',
  'Cursor IDE',
];

function Marquee() {
  const styles = useStyles();
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.marqueeItem}>
            <span className={styles.marqueeText}>{item}</span>
            <span className={styles.marqueeSep}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const styles = useStyles();
  const { ref: headingRef, visible: headingVisible } = useScrollReveal();
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.05);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <div
          ref={headingRef}
          className={`${styles.heading} ${headingVisible ? styles.headingVisible : ''}`}
        >
          <h2 className={styles.title}>SKILLS</h2>
          <div className={styles.divider} />
        </div>

        <Marquee />

        <div ref={gridRef} className={styles.groupsGrid}>
          {skillGroups.map(({ label, skills }, i) => (
            <div
              key={label}
              className={`${styles.group} ${gridVisible ? styles.groupVisible : ''}`}
              style={{ transitionDelay: gridVisible ? `${i * 80}ms` : '0ms' }}
            >
              <p className={styles.groupLabel}>{label}</p>
              <ul className={styles.skillList}>
                {skills.map((skill) => (
                  <li key={skill} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Skills);
