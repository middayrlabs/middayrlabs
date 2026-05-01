import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Ambient background blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />
      <div className={styles.grid}  aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Independent Flutter Developer
        </div>

        {/* Headline */}
        <h1 className={styles.title}>
          Middayr
          <br />
          <em className={styles.titleAccent}>Labs</em>
        </h1>

        <p className={styles.subtitle}>Building simple, powerful mobile apps</p>

        <p className={styles.description}>
          We craft Flutter applications that respect your time and privacy —
          offline-first, lightweight, and built to last. Every app ships with
          a clear privacy policy and zero unnecessary complexity.
        </p>

        {/* CTAs */}
        <div className={styles.actions}>
          <a href="#apps" className={styles.btnPrimary}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
            Explore Apps
          </a>
          <a href="#about" className={styles.btnSecondary}>
            About Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>Flutter</span>
            <span className={styles.statLabel}>Built with</span>
          </div>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statNum}>Offline‑First</span>
            <span className={styles.statLabel}>Architecture</span>
          </div>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statNum}>Privacy</span>
            <span className={styles.statLabel}>Transparent</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
