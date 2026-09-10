import { useState, useRef, useCallback, useEffect, ElementType } from 'react';
import { HiHome, HiUser, HiBriefcase, HiChartBar, HiCode, HiMail, HiMenu, HiX } from 'react-icons/hi';

import useStyles from './styles';

interface NavLink {
  id: string;
  label: string;
  Icon: ElementType;
}

const navLinks: NavLink[] = [
  { id: 'hero',       label: 'Home',       Icon: HiHome },
  { id: 'about',      label: 'About',      Icon: HiUser },
  { id: 'work',       label: 'Work',       Icon: HiBriefcase },
  { id: 'experience', label: 'Experience', Icon: HiChartBar },
  { id: 'skills',     label: 'Skills',     Icon: HiCode },
  { id: 'contact',    label: 'Contact',    Icon: HiMail },
];

const SECTION_IDS = navLinks.map(l => l.id);

function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: '-15% 0px -15% 0px' },
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function SidebarNav() {
  const [expanded, setExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const styles = useStyles(expanded);
  const navRef = useRef<HTMLDivElement>(null);
  const activeSection = useActiveSection(SECTION_IDS);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLDivElement>) => {
    if (!navRef.current?.contains(e.relatedTarget as Node)) {
      setExpanded(false);
    }
  }, []);

  const close = useCallback(() => {
    setExpanded(false);
    setMobileOpen(false);
  }, []);

  const cx = (...classes: (string | false | undefined)[]) =>
    classes.filter(Boolean).join(' ');

  return (
    <>
      {/* ── Desktop floating card ───────────────────── */}
      <div
        ref={navRef}
        className={styles.sidebar}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onFocus={() => setExpanded(true)}
        onBlur={handleBlur}
        aria-label="Site navigation"
        aria-expanded={expanded}
        tabIndex={0}
        role="navigation"
      >
        <div className={styles.card}>

          {/* Avatar */}
          <div className={styles.avatarWrap}>
            <img
              src="/assets/gayane.jpeg"
              alt="Gayane Hakobyan"
              className={styles.avatar}
            />
            <span className={styles.avatarName}>GAYANE</span>
          </div>

          {/* Nav links */}
          <nav className={styles.list}>
            {navLinks.map(({ id, label, Icon }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  tabIndex={expanded ? 0 : -1}
                  onClick={close}
                  className={cx(styles.item, isActive && styles.itemActive)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className={cx(styles.iconWrap, isActive && styles.iconWrapActive)}>
                    <Icon size={20} />
                  </div>
                  <span className={cx(styles.label, isActive && styles.labelActive)}>
                    {label}
                  </span>
                </a>
              );
            })}
          </nav>

        </div>
      </div>

      {/* ── Mobile hamburger ────────────────────────── */}
      <button
        className={styles.mobileBtn}
        onClick={() => setMobileOpen(p => !p)}
        aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
      </button>

      {/* ── Mobile backdrop ─────────────────────────── */}
      {mobileOpen && (
        <div className={styles.backdrop} onClick={close} aria-hidden="true" />
      )}

      {/* ── Mobile panel ────────────────────────────── */}
      {mobileOpen && (
        <div className={styles.mobilePanel}>
          <nav className={styles.mobilePanelList} aria-label="Site navigation">
            {navLinks.map(({ id, label, Icon }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={close}
                  className={cx(
                    styles.mobilePanelItem,
                    isActive && styles.mobilePanelItemActive,
                  )}
                >
                  <div className={cx(styles.iconWrap, isActive && styles.iconWrapActive)}>
                    <Icon size={20} />
                  </div>
                  <span className={cx(styles.label, isActive && styles.labelActive)}>
                    {label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}

export default SidebarNav;
