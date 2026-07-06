import { useEffect, useState } from "react";
import hasetLogo from "../assets/haset-logo.JPG";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar${scrolled ? " navbar--scrolled" : ""}${
        menuOpen ? " navbar--menu-open" : ""
      }`}
    >
      <div className="navbar__container">
        <a
          href="#home"
          className="navbar__logo"
          aria-label="Haset Multispecialty Clinic Home"
          onClick={closeMobileMenu}
        >
          <img
            src={hasetLogo}
            alt="Haset Multispecialty Clinic"
            className="navbar__logo-icon"
          />

          <span className="navbar__logo-text">
            Haset <span>Multispecialty Clinic</span>
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`navbar__mobile-overlay${
          menuOpen ? " navbar__mobile-overlay--open" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="navbar__mobile-inner">
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
        </div>
      </nav>
    </header>
  );
}
