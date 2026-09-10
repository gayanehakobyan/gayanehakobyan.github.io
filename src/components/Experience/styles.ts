import { createUseStyles } from 'react-jss';
import { colors, fonts, breakpoints } from 'styles/tokens';
import { revealBase, revealVisible } from 'styles/animations';

const useStyles = createUseStyles({
  section: {
    padding: '96px 24px',
  },
  inner: {
    maxWidth: 860,
    margin: '0 auto',
  },
  heading: {
    ...revealBase,
  },
  headingVisible: revealVisible,

  title: {
    fontFamily: fonts.display,
    fontSize: 32,
    letterSpacing: '-0.02em',
    color: colors.forePrimary,
    marginBottom: 12,
    [breakpoints.md]: {
      fontSize: 40,
    },
  },
  divider: {
    width: 48,
    height: 2,
    background: colors.accent,
    marginBottom: 48,
  },

  timelineWrap: {
    position: 'relative',
  },
  line: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 1,
    background: `linear-gradient(to bottom, ${colors.accent} 60%, transparent 100%)`,
  },
  jobList: {
    paddingLeft: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 64,
  },

  // Each job reveals independently with stagger
  job: {
    position: 'relative',
    opacity: 0,
    transform: 'translateX(-24px)',
    transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)',
  },
  jobVisible: {
    opacity: 1,
    transform: 'translateX(0)',
  },

  dot: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: '50%',
    border: `2px solid ${colors.accent}`,
    background: colors.pageBase,
    top: 6,
    left: -46,
  },
  jobHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    marginBottom: 4,
    [breakpoints.md]: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
    },
  },
  company: {
    fontFamily: fonts.display,
    fontSize: 20,
    letterSpacing: '-0.01em',
    color: colors.forePrimary,
  },
  period: {
    fontSize: 13,
    fontWeight: 500,
    color: colors.accent,
    whiteSpace: 'nowrap',
  },
  role: {
    fontSize: 13,
    color: colors.foreSecondary,
    marginBottom: 4,
  },
  note: {
    fontSize: 11,
    color: `${colors.foreSecondary}8C`,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  stack: {
    fontSize: 11,
    color: `${colors.foreSecondary}99`,
    lineHeight: 1.6,
    marginBottom: 20,
  },
  bulletList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  bulletItem: {
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
  },
  bullet: {
    marginTop: 7,
    width: 4,
    height: 4,
    borderRadius: '50%',
    flexShrink: 0,
    background: colors.accent,
  },
  bulletText: {
    fontSize: 13,
    color: colors.foreSecondary,
    lineHeight: 1.65,
  },
});

export default useStyles;
