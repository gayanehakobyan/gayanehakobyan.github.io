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
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 24,
    [breakpoints.md]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },

  // Card starts hidden; stagger delay applied via inline style
  card: {
    borderRadius: 12,
    padding: 24,
    border: `1px solid ${colors.accent}1F`,
    background: 'rgba(15,17,9,0.7)',
    opacity: 0,
    transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), border-color 200ms ease, transform 220ms ease, box-shadow 220ms ease',
  },
  cardRevealed: {
    opacity: 1,
    '&:hover': {
      borderColor: `${colors.accent}59`,
      transform: 'translateY(-6px)',
      boxShadow: `0 16px 40px rgba(226,154,62,0.1)`,
    },
  },

  cardTitle: {
    fontFamily: fonts.display,
    fontSize: 15,
    letterSpacing: '-0.01em',
    color: colors.forePrimary,
    marginBottom: 16,
  },
  tagRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 20,
  },
  tag: {
    fontSize: 10,
    padding: '3px 10px',
    borderRadius: 100,
    color: colors.foreSecondary,
    border: `1px solid ${colors.accent}33`,
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
