'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Apps', href: '#apps' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        {/* Logo */}
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect width="28" height="28" rx="8" fill="var(--green-800)" />
              <path d="M7 19.5L11.5 10L14 15.5L16.5 12L21 19.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className={styles.logoText}>Middayr Labs</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#apps" className={styles.cta}>
          Our Apps
        </a>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.drawerLink} onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#apps" className={styles.drawerCta} onClick={handleNavClick}>
              Our Apps
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
