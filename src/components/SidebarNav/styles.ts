import { createUseStyles } from 'react-jss';
import { colors, fonts, breakpoints } from 'styles/tokens';

const CARD_BG = '#111608';
const CARD_BORDER = 'rgba(255,255,255,0.07)';

const useStyles = createUseStyles({
  // ── Desktop floating card ─────────────────────────────
  sidebar: {
    position: 'fixed',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 50,
    display: 'flex',
    [breakpoints.hoverNone]: {
      display: 'none',
    },
  },

  // Card flush against the left wall — rounded only on the right side
  card: {
    borderRadius: '0 16px 16px 0',
    background: CARD_BG,
    border: `1px solid ${CARD_BORDER}`,
    borderLeft: 'none',
  },

  // ── Avatar block ──────────────────────────────────────
  avatarWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '14px 14px 10px',
    borderBottom: `1px solid rgba(255,255,255,0.05)`,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'top center',
    flexShrink: 0,
    border: `1.5px solid ${colors.accent}66`,
  },
  avatarName: (expanded: boolean) => ({
    maxWidth: expanded ? 110 : 0,
    opacity: expanded ? 1 : 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: 11,
    fontFamily: fonts.display,
    letterSpacing: '0.12em',
    color: colors.accent,
    transition: 'max-width 260ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease',
    [breakpoints.reducedMotion]: {
      transition: 'none',
    },
  }),

  // ── Nav list ──────────────────────────────────────────
  list: {
    padding: '8px 0',
    display: 'flex',
    flexDirection: 'column',
  },

  // ── Nav item ──────────────────────────────────────────
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '11px 14px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background 150ms ease',
    '&:hover': {
      background: 'rgba(255,255,255,0.04)',
    },
  },
  itemActive: {
    background: `${colors.accent}18`,
    borderLeft: `3px solid ${colors.accent}`,
    paddingLeft: 11, // 14 - 3 to compensate for the border so icons stay aligned
    '&:hover': {
      background: `${colors.accent}22`,
    },
  },

  // ── Icon wrapper ──────────────────────────────────────
  iconWrap: {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: colors.foreSecondary,
    transition: 'color 150ms ease',
  },
  iconWrapActive: {
    color: colors.accent,
  },

  // ── Label — max-width drives the card width naturally ─
  label: (expanded: boolean) => ({
    maxWidth: expanded ? 120 : 0,
    opacity: expanded ? 1 : 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: 11,
    fontFamily: fonts.body,
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: colors.foreSecondary,
    transition: 'max-width 260ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease',
    [breakpoints.reducedMotion]: {
      transition: 'none',
    },
  }),
  labelActive: {
    color: colors.accent,
  },

  // ── Mobile hamburger button ───────────────────────────
  mobileBtn: {
    display: 'none',
    position: 'fixed',
    top: 16,
    left: 0,
    zIndex: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: '0 12px 12px 0',
    border: `1px solid ${CARD_BORDER}`,
    background: CARD_BG,
    cursor: 'pointer',
    color: colors.forePrimary,
    [breakpoints.hoverNone]: {
      display: 'flex',
    },
  },

  // ── Mobile backdrop ───────────────────────────────────
  backdrop: {
    display: 'none',
    position: 'fixed',
    inset: 0,
    zIndex: 40,
    background: 'rgba(0,0,0,0.5)',
    [breakpoints.hoverNone]: {
      display: 'block',
    },
  },

  // ── Mobile panel ─────────────────────────────────────
  mobilePanel: {
    display: 'none',
    position: 'fixed',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 50,
    borderRadius: '0 16px 16px 0',
    background: CARD_BG,
    border: `1px solid ${CARD_BORDER}`,
    borderLeft: 'none',
    overflow: 'hidden',
    [breakpoints.hoverNone]: {
      display: 'block',
    },
  },
  mobilePanelList: {
    padding: '10px 0',
    display: 'flex',
    flexDirection: 'column',
  },
  mobilePanelItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px 20px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background 150ms ease',
    '&:hover': {
      background: 'rgba(255,255,255,0.04)',
    },
  },
  mobilePanelItemActive: {
    background: `${colors.accent}18`,
  },
});

export default useStyles;
