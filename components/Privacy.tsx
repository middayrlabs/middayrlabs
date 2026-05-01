import styles from './Privacy.module.css';

const policies = [
  {
    app: 'HabitFlow',
    desc: 'Habit tracker & task manager',
    url: 'https://habitflow-privacy-policy.vercel.app/',
    items: [
      'No personal data collected or stored remotely',
      'All data remains on your device',
      'AdMob may collect anonymized ad-interaction data',
      'No account or sign-in required',
    ],
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className={`section ${styles.privacy}`}>
      <div className="container">
        <div className={styles.layout}>
          {/* Intro */}
          <div className={styles.intro}>
            <span className="section-label">Privacy</span>
            <h2 className="section-title">Your data, your rules</h2>
            <p className="section-desc">
              Every Middayr Labs app ships with a dedicated privacy policy written
              in plain language. We believe you deserve to know exactly what an app
              does with your information — so we tell you, clearly.
            </p>

            <div className={styles.principles}>
              {[
                { title: 'One policy per app', desc: 'Each app has its own dedicated policy page.' },
                { title: 'Plain language', desc: 'No legal jargon. We write for humans.' },
                { title: 'Minimal data', desc: 'We only ever collect what is absolutely necessary.' },
              ].map((p) => (
                <div key={p.title} className={styles.principle}>
                  <span className={styles.principleCheck} aria-hidden="true">✓</span>
                  <div>
                    <strong className={styles.principleTitle}>{p.title}</strong>
                    <span className={styles.principleDesc}> — {p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Policy cards */}
          <div className={styles.cards}>
            {policies.map((p) => (
              <div key={p.app} className={styles.policyCard}>
                <div className={styles.policyHeader}>
                  <div className={styles.policyIcon} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.policyApp}>{p.app}</h3>
                    <p className={styles.policyDesc}>{p.desc}</p>
                  </div>
                </div>

                <ul className={styles.policyItems}>
                  {p.items.map((item) => (
                    <li key={item} className={styles.policyItem}>
                      <span className={styles.dot} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.policyBtn}
                >
                  Read Full Privacy Policy
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
