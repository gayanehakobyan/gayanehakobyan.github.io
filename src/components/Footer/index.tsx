import { memo } from 'react';

import useStyles from './styles';

const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
  { label: 'Hire Me', href: 'mailto:gayanehakobyan93@gmail.com' },
];

function Footer() {
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          © 2026 Gayane Hakobyan. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default memo(Footer);
