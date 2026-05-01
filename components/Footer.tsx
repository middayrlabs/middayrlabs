import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#hero" className={styles.logo}>
            <span className={styles.logoIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="8" fill="var(--green-700)" />
                <path d="M7 19.5L11.5 10L14 15.5L16.5 12L21 19.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Middayr Labs
          </a>
          <p className={styles.tagline}>Building simple, powerful mobile apps.</p>
        </div>

        {/* Nav */}
        <nav className={styles.nav} aria-label="Footer navigation">
          <div className={styles.navGroup}>
            <h3 className={styles.navTitle}>Navigate</h3>
            <ul className={styles.navList}>
              {['About', 'Apps', 'Privacy', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className={styles.navLink}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.navGroup}>
            <h3 className={styles.navTitle}>Apps</h3>
            <ul className={styles.navList}>
              <li>
                <a href="#apps" className={styles.navLink}>HabitFlow</a>
              </li>
            </ul>
          </div>

          <div className={styles.navGroup}>
            <h3 className={styles.navTitle}>Policies</h3>
            <ul className={styles.navList}>
              <li>
                <a
                  href="https://habitflow-privacy-policy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.navLink}
                >
                  HabitFlow Privacy
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <p className={styles.copy}>
            © {year} Middayr Labs. All rights reserved.
          </p>
          <a href="mailto:middayrlabs@gmail.com" className={styles.email}>
            middayrlabs@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
