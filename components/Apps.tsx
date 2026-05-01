import styles from './Apps.module.css';

const apps = [
  {
    id: 'habitflow',
    name: 'HabitFlow',
    tagline: 'Habit tracker & task manager',
    description:
      'Build lasting habits and manage your daily tasks with a clean, distraction-free interface. HabitFlow works completely offline — your data never leaves your device.',
    category: 'Productivity',
    platform: 'Android',
    features: [
      'Offline-first architecture',
      'Daily & weekly habit streaks',
      'Task management with priorities',
      'Minimal, focused UI',
      'No account required',
      'Free with optional AdMob ads',
    ],
    privacyUrl: 'https://habitflow-privacy-policy.vercel.app/',
    color: '#2e7d32',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#2e7d32" />
        <path d="M12 20l6 6 10-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function Apps() {
  return (
    <section id="apps" className={`section ${styles.apps}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label">Our Apps</span>
            <h2 className="section-title">Apps we've built</h2>
          </div>
          <p className="section-desc">
            Each app is crafted with care, designed to solve a real problem simply
            and reliably — without unnecessary complexity.
          </p>
        </div>

        <div className={styles.grid}>
          {apps.map((app) => (
            <article key={app.id} className={styles.card}>
              {/* Card header */}
              <div className={styles.cardHeader}>
                <div className={styles.appIcon}>{app.icon}</div>
                <div>
                  <div className={styles.chips}>
                    <span className={styles.chip}>{app.category}</span>
                    <span className={styles.chip}>{app.platform}</span>
                  </div>
                  <h3 className={styles.appName}>{app.name}</h3>
                  <p className={styles.appTagline}>{app.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p className={styles.appDesc}>{app.description}</p>

              {/* Features */}
              <div className={styles.features}>
                <h4 className={styles.featuresTitle}>What's included</h4>
                <ul className={styles.featureList}>
                  {app.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer links */}
              <div className={styles.cardFooter}>
                <a
                  href={app.privacyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.privacyLink}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Privacy Policy
                </a>
                <span className={styles.admobNote}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Free • AdMob supported
                </span>
              </div>
            </article>
          ))}

          {/* Coming soon card */}
          <div className={styles.comingSoon}>
            <div className={styles.csInner}>
              <span className={styles.csIcon} aria-hidden="true">✦</span>
              <p className={styles.csText}>More apps in development</p>
              <p className={styles.csSubtext}>
                Stay tuned — new apps are on the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
