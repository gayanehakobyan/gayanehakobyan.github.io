export const colors = {
  accent: '#E29A3E',
  accentCta: '#E08A2F',
  photoGradientFrom: '#F2B705',
  photoGradientTo: '#B5721E',
  pageBase: '#0A0C06',
  pageSurface: '#0F1109',
  forePrimary: '#F5F1E6',
  foreSecondary: '#8C8878',
} as const;

export const fonts = {
  display: '"Archivo Black", sans-serif',
  body: '"Inter", sans-serif',
} as const;

export const transitions = {
  color: 'color 150ms ease, background-color 150ms ease, border-color 150ms ease',
  fast: '150ms ease',
  sidebar: '250ms ease',
} as const;

export const breakpoints = {
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 1024px)',
  hoverNone: '@media (hover: none)',
  hoverHover: '@media (hover: hover)',
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
} as const;
