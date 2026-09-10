import { breakpoints } from './tokens';

// Shared scroll-reveal base state (element hidden, ready to transition in)
export const revealBase = {
  opacity: 0,
  transform: 'translateY(28px)',
  transition: 'opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1), transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
  [breakpoints.reducedMotion]: {
    opacity: 1,
    transform: 'none',
    transition: 'none',
  },
} as const;

// Applied once IntersectionObserver fires
export const revealVisible = {
  opacity: 1,
  transform: 'translateY(0)',
} as const;
