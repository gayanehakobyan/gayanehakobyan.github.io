import { createUseStyles } from 'react-jss';
import { colors, fonts, breakpoints } from 'styles/tokens';
import { revealBase, revealVisible } from 'styles/animations';

const CARD_BG = '#111608';
const INPUT_BG = '#0D1207';
const BTN_GOLD = '#C9A93C';
const BTN_TEXT = '#1A1F0A';

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

  card: {
    background: CARD_BG,
    borderRadius: 16,
    border: `1px solid rgba(255,255,255,0.07)`,
    padding: 32,
    ...revealBase,
    [breakpoints.md]: {
      padding: 40,
    },
  },
  cardVisible: revealVisible,

  row: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 24,
    marginBottom: 24,
    [breakpoints.md]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  fieldFull: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginBottom: 24,
  },
  label: {
    fontSize: 11,
    fontFamily: fonts.body,
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: colors.foreSecondary,
  },
  required: {
    color: colors.accent,
    marginLeft: 2,
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: 8,
    background: INPUT_BG,
    border: `1px solid ${colors.accent}26`,
    color: colors.forePrimary,
    fontFamily: fonts.body,
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 150ms ease',
    '&::placeholder': {
      color: `${colors.foreSecondary}80`,
    },
    '&:focus': {
      borderColor: `${colors.accent}99`,
    },
  },
  textarea: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: 8,
    background: INPUT_BG,
    border: `1px solid ${colors.accent}26`,
    color: colors.forePrimary,
    fontFamily: fonts.body,
    fontSize: 14,
    outline: 'none',
    resize: 'vertical',
    minHeight: 130,
    lineHeight: 1.6,
    transition: 'border-color 150ms ease',
    '&::placeholder': {
      color: `${colors.foreSecondary}80`,
    },
    '&:focus': {
      borderColor: `${colors.accent}99`,
    },
  },
  submitBtn: {
    width: '100%',
    padding: '16px',
    borderRadius: 8,
    background: BTN_GOLD,
    color: BTN_TEXT,
    fontFamily: fonts.body,
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    transition: 'filter 150ms ease, transform 80ms ease',
    '&:hover': {
      filter: 'brightness(1.08)',
    },
    '&:active': {
      transform: 'scale(0.99)',
      filter: 'brightness(0.95)',
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
  successBox: {
    textAlign: 'center',
    padding: '64px 32px',
  },
  successIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  successTitle: {
    fontFamily: fonts.display,
    fontSize: 24,
    color: colors.forePrimary,
    marginBottom: 12,
  },
  successText: {
    fontSize: 15,
    color: colors.foreSecondary,
    lineHeight: 1.7,
  },
  successAccent: {
    color: colors.accent,
  },
});

export default useStyles;
