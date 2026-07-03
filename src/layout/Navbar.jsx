import { useState, useEffect } from 'react';
import Button from '../components/Button';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* -------- Logo -------- */}
        <a href="#home" className="navbar__logo" aria-label="Hasset Clinic Home">
          <svg
            className="navbar__logo-icon"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Heart shape */}
            <path
              d="M20 36C20 36 4 26 4 15C4 10 8 6 13 6C16 6 18.5 7.5 20 10C21.5 7.5 24 6 27 6C32 6 36 10 36 15C36 26 20 36 20 36Z"
              fill="currentColor"
              opacity="0.15"
            />
            <path
              d="M20 34C20 34 5 25 5 15C5 10.6 8.6 7 13 7C16.1 7 18.7 8.8 20 11.3C21.3 8.8 23.9 7 27 7C31.4 7 35 10.6 35 15C35 25 20 34 20 34Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Medical cross inside heart */}
            <rect x="17" y="13" width="6" height="12" rx="1" fill="currentColor" />
            <rect x="14" y="16" width="12" height="6" rx="1" fill="currentColor" />
          </svg>
          <span className="navbar__logo-text">
            Hasset <span>Clinic</span>
          </span>
        </a>

        {/* -------- Desktop Nav -------- */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* -------- CTA -------- */}
        <div className="navbar__cta">
          <Button href="#contact" size="small">
            Book Appointment
          </Button>
        </div>

        {/* -------- Hamburger -------- */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </div>

      {/* -------- Mobile Overlay -------- */}
      <nav
        className={`navbar__mobile-overlay${menuOpen ? ' navbar__mobile-overlay--open' : ''}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={closeMobileMenu}
          >
            {link.label}
          </a>
        ))}
        <Button href="#contact" size="medium" onClick={closeMobileMenu}>
          Book Appointment
        </Button>
      </nav>
    </header>
  );
}
