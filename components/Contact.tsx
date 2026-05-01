import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.inner}>
          {/* Decoration */}
          <div className={styles.deco} aria-hidden="true">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="58" stroke="var(--green-200)" strokeWidth="1.5" strokeDasharray="6 4" />
              <circle cx="60" cy="60" r="42" stroke="var(--green-300)" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="60" cy="60" r="20" fill="var(--green-100)" />
              <path d="M48 60l8 8 16-16" stroke="var(--green-700)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Text */}
          <div className={styles.text}>
            <span className="section-label">Contact</span>
            <h2 className="section-title">Get in touch</h2>
            <p className={styles.desc}>
              Have feedback, a bug report, or a question about one of our apps?
              Drop us an email and we'll get back to you as quickly as possible.
              As an indie developer, every message gets a personal response.
            </p>
          </div>

          {/* Email card */}
          <a
            href="mailto:middayrlabs@gmail.com"
            className={styles.emailCard}
          >
            <div className={styles.emailIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className={styles.emailContent}>
              <span className={styles.emailLabel}>Email us at</span>
              <span className={styles.emailAddress}>middayrlabs@gmail.com</span>
            </div>
            <svg className={styles.emailArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Note */}
          <p className={styles.note}>
            Usually responds within 1–2 business days.
          </p>
        </div>
      </div>
    </section>
  );
}
