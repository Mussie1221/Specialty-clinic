import hasetLogo from "../assets/haset-logo.JPG";
import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Emergency Care",
  "Outpatient",
  "Surgery",
  "Pediatrics",
  "Cardiology",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Column 1 — Brand */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <img
                src={hasetLogo}
                alt="Haset Multispeciality Clinic"
                className="footer__logo-icon"
              />
              Haset{" "}
              <span className="footer__logo-accent">
                Multispeciality Clinic
              </span>
            </a>
            <p className="footer__description">
              Providing world-class healthcare with compassion and innovation.
              Your health is our top priority.
            </p>
            <div className="footer__socials">
              {/* Facebook */}
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="footer__column">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div className="footer__column">
            <h4 className="footer__heading">Our Services</h4>
            <ul className="footer__links">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="footer__link">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Haset Multispeciality Clinic. All
            rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">
              Privacy Policy
            </a>
            <span className="footer__legal-divider">|</span>
            <a href="#" className="footer__legal-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
