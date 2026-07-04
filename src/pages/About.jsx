import "./About.css";
import SectionTitle from "../components/SectionTitle";
import { useScrollAnimation } from "../hooks/useAnimations";

const values = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Excellence",
    description: "We strive for the highest standards in medical care",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Compassion",
    description: "Patient-centered approach with empathy and understanding",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 1 5 11.9V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2.1A7 7 0 0 1 12 2z" />
      </svg>
    ),
    title: "Innovation",
    description: "Leveraging cutting-edge technology and research",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Integrity",
    description: "Transparent, honest, and ethical healthcare practices",
  },
];

export default function About() {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);
  const [contentRef, isContentVisible] = useScrollAnimation(0.15);

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <SectionTitle
          subtitle="About Us"
          title="Why Choose"
          highlight="Haset Multispeciality Clinic"
          description="Founded with a vision to provide world-class healthcare, Haset Multispeciality Clinic has been a trusted name in medical excellence, delivering compassionate care to our community."
        />

        <div className="about__content">
          {/* Left Side - Image Placeholder */}
          <div
            className={`about__image-wrapper animate-on-scroll ${isSectionVisible ? "visible" : ""}`}
          >
            <div className="about__image-placeholder">
              <div className="about__image-decoration about__image-decoration--top" />
              <div className="about__image-decoration about__image-decoration--bottom" />
              <svg
                className="about__cross-icon"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="30"
                  y="8"
                  width="20"
                  height="64"
                  rx="4"
                  fill="rgba(255,255,255,0.25)"
                />
                <rect
                  x="8"
                  y="30"
                  width="64"
                  height="20"
                  rx="4"
                  fill="rgba(255,255,255,0.25)"
                />
                <rect
                  x="32"
                  y="10"
                  width="16"
                  height="60"
                  rx="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <rect
                  x="10"
                  y="32"
                  width="60"
                  height="16"
                  rx="3"
                  fill="rgba(255,255,255,0.5)"
                />
              </svg>
              <span className="about__image-label">
                Haset Multispeciality Clinic
              </span>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`about__text-content animate-on-scroll delay-2 ${isSectionVisible ? "visible" : ""}`}
            ref={contentRef}
          >
            <p className="about__mission">
              At Haset Multispeciality Clinic, we believe that every patient
              deserves access to exceptional medical care. Our team of
              experienced physicians, nurses, and healthcare professionals work
              together to deliver personalized treatment plans, ensuring the
              best possible outcomes for our patients and their families.
            </p>

            <div className="about__values-grid">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`about__value-card animate-on-scroll delay-${index + 1} ${isContentVisible ? "visible" : ""}`}
                >
                  <div className="about__value-icon">{value.icon}</div>
                  <div className="about__value-info">
                    <h4 className="about__value-title">{value.title}</h4>
                    <p className="about__value-description">
                      {value.description}
                    </p>
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
