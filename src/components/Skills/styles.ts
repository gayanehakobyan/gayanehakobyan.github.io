import { createUseStyles } from 'react-jss';
import { colors, fonts, breakpoints } from 'styles/tokens';
import { revealBase, revealVisible } from 'styles/animations';

const useStyles = createUseStyles({
  section: {
    padding: '96px 24px',
  },
  inner: {
    maxWidth: 1152,
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

  // ── Marquee ───────────────────────────────────────────
  marqueeContainer: {
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 56,
    paddingTop: 12,
    paddingBottom: 12,
    WebkitMaskImage:
      'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
    maskImage:
      'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
  },
  marqueeTrack: {
    display: 'flex',
    width: 'max-content',
    animation: 'marquee-scroll 35s linear infinite',
  },
  marqueeItem: {
    display: 'flex',
    alignItems: 'center',
  },
  marqueeText: {
    fontSize: 13,
    fontWeight: 500,
    color: colors.foreSecondary,
    whiteSpace: 'nowrap',
    padding: '0 20px',
  },
  marqueeSep: {
    fontSize: 8,
    color: colors.accent,
  },

  // ── Skill groups — stagger in ─────────────────────────
  groupsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 20,
    [breakpoints.md]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [breakpoints.lg]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  group: {
    borderRadius: 12,
    padding: 24,
    border: `1px solid ${colors.accent}1F`,
    background: 'rgba(15,17,9,0.7)',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1), border-color 200ms ease',
    '&:hover': {
      borderColor: `${colors.accent}4D`,
    },
  },
  groupVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  groupLabel: {
    fontFamily: fonts.display,
    fontSize: 10,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: colors.accent,
    marginBottom: 16,
  },
  skillList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
  },
  skill: {
    fontSize: 11,
    padding: '4px 12px',
    borderRadius: 100,
    color: colors.foreSecondary,
    border: `1px solid ${colors.accent}26`,
    transition: 'border-color 150ms ease, color 150ms ease',
    '&:hover': {
      borderColor: `${colors.accent}66`,
      color: colors.forePrimary,
    },
  },
});

export default useStyles;
