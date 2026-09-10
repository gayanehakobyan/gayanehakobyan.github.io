import { createUseStyles } from 'react-jss';
import { colors, fonts, breakpoints } from 'styles/tokens';

const useStyles = createUseStyles({
  footer: {
    background: colors.pageSurface,
    padding: '20px 24px',
  },
  inner: {
    maxWidth: 1152,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    [breakpoints.md]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  wordmark: {
    fontFamily: fonts.display,
    fontSize: 20,
    letterSpacing: '-0.02em',
    color: colors.accent,
    textDecoration: 'none',
  },
  copyright: {
    fontSize: 11,
    color: colors.foreSecondary,
    textAlign: 'center',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
  },
  navLink: {
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: colors.forePrimary,
    textDecoration: 'none',
    transition: 'color 150ms ease',
    '&:hover': {
      color: colors.accent,
    },
  },
});

export default useStyles;
