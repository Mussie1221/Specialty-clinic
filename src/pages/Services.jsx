import './Services.css';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useAnimations';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M12 11V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
        <path d="M6 11V5a2 2 0 0 1 2-2h0" />
        <line x1="12" y1="15" x2="12" y2="17" />
        <line x1="11" y1="16" x2="13" y2="16" />
      </svg>
    ),
    title: 'Emergency Care',
    description:
      '24/7 emergency medical services with rapid response teams and state-of-the-art trauma care facilities.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
    title: 'Outpatient Services',
    description:
      'Comprehensive outpatient consultations with experienced specialists across multiple disciplines.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    title: 'Surgery',
    description:
      'Advanced surgical procedures using minimally invasive techniques and cutting-edge equipment.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h.01" />
        <path d="M15 12h.01" />
        <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
        <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5.5 5 1.5" />
        <path d="M2 12h1" />
        <path d="M21 12h1" />
      </svg>
    ),
    title: 'Pediatrics',
    description:
      'Specialized healthcare for infants, children, and adolescents in a child-friendly environment.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.78.77L12 20.65l7.65-7.65.77-.77a5.4 5.4 0 0 0 0-7.65z" />
        <path d="M12 6l-1 6 3-2-1 6" />
      </svg>
    ),
    title: 'Cardiology',
    description:
      'Complete cardiac care including diagnostics, treatment, and rehabilitation programs.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31" />
        <path d="M14 9.3V1.99" />
        <path d="M8.5 2h7" />
        <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
        <path d="M5.52 16h12.96" />
      </svg>
    ),
    title: 'Laboratory',
    description:
      'Modern diagnostic laboratory services with accurate and timely test results.',
  },
];

export default function Services() {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);

  return (
    <section id="services" className="section section--light services" ref={sectionRef}>
      <div className="container">
        <SectionTitle
          subtitle="Our Services"
          title="Comprehensive"
          highlight="Medical Care"
          description="We offer a wide range of medical services designed to meet the diverse healthcare needs of our community with excellence and compassion."
        />

        <div className="services__grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`services__card animate-on-scroll delay-${index + 1} ${isSectionVisible ? 'visible' : ''}`}
            >
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">{service.description}</p>
              <a href="#" className="services__card-link">
                Learn More
                <svg
                  className="services__card-arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
