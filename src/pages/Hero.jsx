import Button from '../components/Button';
import { useCounter } from '../hooks/useAnimations';
import './Hero.css';

const STATS = [
  { end: 150, suffix: '+', label: 'Doctors At Work' },
  { end: 1200, suffix: '+', label: 'Satisfied Patients' },
  { end: 600, suffix: '+', label: 'Bed Facility' },
  { end: 50, suffix: '+', label: 'Specialties' },
];

function StatItem({ end, suffix, label }) {
  const [ref, count] = useCounter(end, 2000);
  return (
    <div className="hero__stat" ref={ref}>
      <div className="hero__stat-number">
        {count}{suffix}
      </div>
      <div className="hero__stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        {/* -------- Left: Content -------- */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Welcome to Hasset Clinic
          </div>

          <h1 className="hero__title">
            Your Health, Our{' '}
            <span className="hero__title-highlight">Priority</span>
          </h1>

          <p className="hero__description">
            At Hasset Clinic, we combine cutting-edge medical technology with
            compassionate care to deliver the best health outcomes for you and
            your family. Our team of dedicated professionals is here to guide
            you on your journey to wellness.
          </p>

          <div className="hero__actions">
            <Button href="#services" size="large">
              Our Services
            </Button>
            <Button href="#contact" variant="outline" size="large">
              Contact Us
            </Button>
          </div>
        </div>

        {/* -------- Right: Illustration -------- */}
        <div className="hero__illustration">
          {/* Decorative rings */}
          <div className="hero__decoration-ring hero__decoration-ring--1" />
          <div className="hero__decoration-ring hero__decoration-ring--2" />

          {/* Main gradient circle */}
          <div className="hero__illustration-circle">
            {/* Central stethoscope */}
            <svg
              className="hero__illustration-center"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M20 8V28C20 35.7 26.3 42 34 42H36C39.3 42 42 44.7 42 48V50"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M12 8V28C12 35.7 18.3 42 26 42"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="20" cy="6" r="3" fill="currentColor" />
              <circle cx="12" cy="6" r="3" fill="currentColor" />
              <circle cx="42" cy="54" r="5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>

            {/* Floating icon 1 — Heart */}
            <div className="hero__float-icon hero__float-icon--1">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M12 21C12 21 3 14 3 8.5C3 5.5 5.5 3 8.5 3C10.1 3 11.4 3.8 12 5C12.6 3.8 13.9 3 15.5 3C18.5 3 21 5.5 21 8.5C21 14 12 21 12 21Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Floating icon 2 — Medical cross / shield */}
            <div className="hero__float-icon hero__float-icon--2">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M12 2L4 6V12C4 17 7.5 21.5 12 22.5C16.5 21.5 20 17 20 12V6L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <rect x="10.5" y="8" width="3" height="8" rx="0.5" fill="currentColor" />
                <rect x="8" y="10.5" width="8" height="3" rx="0.5" fill="currentColor" />
              </svg>
            </div>

            {/* Floating icon 3 — Capsule / pill */}
            <div className="hero__float-icon hero__float-icon--3">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="8" y="2" width="8" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="8" y="12" width="8" height="10" rx="4" fill="currentColor" opacity="0.4" />
                <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            {/* Floating icon 4 — Heartbeat / pulse */}
            <div className="hero__float-icon hero__float-icon--4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <polyline
                  points="2,13 6,13 8,8 11,18 14,6 16,13 22,13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* -------- Stats Bar -------- */}
      <div className="hero__stats">
        <div className="hero__stats-grid">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
