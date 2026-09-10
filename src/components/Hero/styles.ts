import { createUseStyles } from 'react-jss';
import { colors, fonts, breakpoints } from 'styles/tokens';

const useStyles = createUseStyles({
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '96px 24px 64px',
    position: 'relative',
    overflow: 'hidden',
    // Reference design: two olive radial glows — bottom-left and right-center
    '&::before': {
      content: "''",
      position: 'absolute',
      inset: 0,
      background: [
        'radial-gradient(ellipse 55% 90% at 0% 80%, rgba(60,80,10,0.55) 0%, transparent 65%)',
        'radial-gradient(ellipse 55% 90% at 100% 50%, rgba(55,72,8,0.6) 0%, transparent 65%)',
      ].join(', '),
      pointerEvents: 'none',
      zIndex: 0,
    },
  },
  grid: {
    maxWidth: 1152,
    width: '100%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    gap: 40,
    position: 'relative',
    zIndex: 1,
    [breakpoints.md]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 24,
    },
  },

  // ── Left column — slides up on load ───────────────────
  left: {
    textAlign: 'center',
    order: 2,
    animation: 'hero-up 0.85s cubic-bezier(0.4, 0, 0.2, 1) both',
    [breakpoints.md]: {
      textAlign: 'left',
      order: 1,
    },
  },
  name: {
    fontFamily: fonts.display,
    fontSize: 52,
    letterSpacing: '-0.02em',
    lineHeight: 1.0,
    color: colors.forePrimary,
    [breakpoints.lg]: {
      fontSize: 60,
    },
  },
  subtitle: {
    marginTop: 16,
    fontSize: 11,
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: colors.foreSecondary,
  },
  contactList: {
    marginTop: 28,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  contactLink: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 13,
    color: colors.foreSecondary,
    textDecoration: 'none',
    justifyContent: 'center',
    transition: 'color 150ms ease',
    '&:hover': {
      color: colors.accent,
    },
    [breakpoints.md]: {
      justifyContent: 'flex-start',
    },
  },
  socialRow: {
    marginTop: 28,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'center',
    [breakpoints.md]: {
      justifyContent: 'flex-start',
    },
  },
  socialLink: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${colors.accent}59`,
    color: colors.foreSecondary,
    textDecoration: 'none',
    transition: 'color 150ms ease, border-color 150ms ease, transform 150ms ease',
    '&:hover': {
      color: colors.accent,
      borderColor: colors.accent,
      transform: 'scale(1.12)',
    },
  },

  // ── Center column — scales in, then photo floats ──────
  center: {
    display: 'flex',
    justifyContent: 'center',
    order: 1,
    animation: 'hero-center 0.9s 0.1s cubic-bezier(0.4, 0, 0.2, 1) both',
    [breakpoints.md]: {
      order: 2,
    },
  },
  photoContainer: {
    position: 'relative',
    width: 300,
    height: 310,
  },
  // Gold circle pulses with amber glow
  photoCircle: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: '50%',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    background: `linear-gradient(to bottom, ${colors.photoGradientFrom}, ${colors.photoGradientTo})`,
    animation: 'gold-glow 3s ease-in-out infinite',
  },
  // Wrapper div handles float (so translateX and translateY don't clash)
  photoFloat: {
    position: 'absolute',
    top: 22,
    left: '50%',
    zIndex: 1,
    animation: 'float 4s ease-in-out infinite',
  },
  photo: {
    display: 'block',
    width: 258,
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'top center',
    filter: 'grayscale(100%)',
  },

  // ── Right column — slides up with slight delay ────────
  right: {
    textAlign: 'center',
    order: 3,
    animation: 'hero-up 0.85s 0.2s cubic-bezier(0.4, 0, 0.2, 1) both',
    [breakpoints.md]: {
      textAlign: 'right',
    },
  },
  roleLabel: {
    fontSize: 11,
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: colors.foreSecondary,
    marginBottom: 16,
  },
  roleTitle: {
    fontFamily: fonts.display,
    fontSize: 28,
    letterSpacing: '-0.01em',
    lineHeight: 1.1,
    color: colors.forePrimary,
    [breakpoints.md]: {
      fontSize: 32,
    },
  },
  roleSubtitle: {
    marginTop: 12,
    fontSize: 13,
    color: colors.foreSecondary,
    lineHeight: 1.6,
  },
  ctaBtn: {
    display: 'inline-block',
    marginTop: 32,
    padding: '12px 28px',
    borderRadius: 8,
    fontFamily: fonts.body,
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: colors.forePrimary,
    background: colors.accentCta,
    textDecoration: 'none',
    transition: 'filter 150ms ease, transform 150ms ease, box-shadow 150ms ease',
    '&:hover': {
      filter: 'brightness(1.1)',
      transform: 'translateY(-2px)',
      boxShadow: `0 8px 24px rgba(224, 138, 47, 0.4)`,
    },
    '&:active': {
      transform: 'translateY(0)',
      filter: 'brightness(0.95)',
    },
  },
});

export default useStyles;
