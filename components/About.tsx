import styles from './About.module.css';

const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Performance First',
    desc: 'Every millisecond matters. Our apps are optimized from the ground up for speed and smoothness.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Radical Simplicity',
    desc: 'No bloat, no confusion. Clean interfaces that do exactly what they promise — nothing more.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Privacy by Design',
    desc: 'Your data stays on your device. Transparent policies, minimal permissions, zero surprises.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.34 12a19.79 19.79 0 0 1-3.07-8.67 2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Indie & Accountable',
    desc: 'One developer, one email. No layers of support — feedback goes directly to the person who wrote the code.',
  },
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left: text */}
          <div className={styles.left}>
            <span className="section-label">About</span>
            <h2 className="section-title">
              Built by one developer,
              <br />
              <span className={styles.accent}>for real people</span>
            </h2>
            <p className="section-desc">
              Middayr Labs is a one-person indie studio crafting Flutter mobile apps
              for Android. No venture capital, no large teams — just focused, deliberate
              work driven by a genuine belief that good software should be simple,
              honest, and fast.
            </p>
            <p className={styles.bodyText}>
              Every app we ship starts with a single question: <em>"Does this genuinely
              help someone?"</em> If the answer is yes, we build it right — with offline
              support, clear privacy policies, and thoughtful UX baked in from day one.
            </p>

            {/* Flutter badge */}
            <div className={styles.techBadge}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M13.9 2.01L3.9 12l3 3 3-3 7.1-7.1-3.1-2.89zM13.9 14.01l-3 3 3 3.1 3.1-3.1-3.1-3z" fill="var(--green-700)" />
              </svg>
              Powered by Flutter
            </div>
          </div>

          {/* Right: pillars */}
          <div className={styles.right}>
            <div className={styles.pillars}>
              {pillars.map((p) => (
                <div key={p.title} className={styles.pillar}>
                  <div className={styles.pillarIcon}>{p.icon}</div>
                  <div>
                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                    <p className={styles.pillarDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
