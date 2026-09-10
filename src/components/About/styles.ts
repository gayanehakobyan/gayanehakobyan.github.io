import { createUseStyles } from 'react-jss';
import { colors, fonts, breakpoints } from 'styles/tokens';
import { revealBase, revealVisible } from 'styles/animations';

const useStyles = createUseStyles({
  section: {
    padding: '96px 24px',
  },
  inner: {
    maxWidth: 720,
    margin: '0 auto',
    ...revealBase,
  },
  innerVisible: revealVisible,

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
    marginBottom: 40,
  },
  paragraph: {
    fontSize: 16,
    color: colors.foreSecondary,
    lineHeight: 1.8,
    marginBottom: 24,
    [breakpoints.md]: {
      fontSize: 18,
    },
  },
  highlight: {
    color: colors.forePrimary,
    fontWeight: 500,
  },
  accentText: {
    color: colors.accent,
    fontWeight: 500,
  },
  credentialsRow: {
    marginTop: 40,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
  },
  credential: {
    fontSize: 11,
    padding: '6px 14px',
    borderRadius: 100,
    color: colors.foreSecondary,
    border: `1px solid ${colors.accent}33`,
    transition: 'border-color 200ms ease, color 200ms ease',
    '&:hover': {
      borderColor: `${colors.accent}88`,
      color: colors.forePrimary,
    },
  },
});

export default useStyles;
