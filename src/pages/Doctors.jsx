import { useScrollAnimation } from '../hooks/useAnimations';
import SectionTitle from '../components/SectionTitle';
import './Doctors.css';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    initials: 'SJ',
    specialty: 'Cardiologist',
    experience: '15+ years experience',
    bio: 'Specializing in interventional cardiology, Dr. Johnson has performed over 3,000 cardiac procedures and is renowned for her compassionate patient care.',
    phone: '+1 (555) 201-0001',
    email: 'sarah.johnson@hassetclinic.com',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    initials: 'MC',
    specialty: 'Neurologist',
    experience: '12+ years experience',
    bio: 'A leading expert in neurodegenerative disorders, Dr. Chen combines cutting-edge research with personalized treatment plans for every patient.',
    phone: '+1 (555) 201-0002',
    email: 'michael.chen@hassetclinic.com',
  },
  {
    id: 3,
    name: 'Dr. Amara Desta',
    initials: 'AD',
    specialty: 'Pediatrician',
    experience: '10+ years experience',
    bio: 'Passionate about child wellness, Dr. Desta brings warmth and expertise to every consultation, ensuring young patients feel safe and cared for.',
    phone: '+1 (555) 201-0003',
    email: 'amara.desta@hassetclinic.com',
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    initials: 'JW',
    specialty: 'Orthopedic Surgeon',
    experience: '18+ years experience',
    bio: 'With expertise in joint reconstruction and sports medicine, Dr. Wilson has helped thousands of patients regain mobility and quality of life.',
    phone: '+1 (555) 201-0004',
    email: 'james.wilson@hassetclinic.com',
  },
];

function DoctorCard({ doctor, delay }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <article
      ref={ref}
      className={`doctors-card ${isVisible ? 'doctors-card--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Photo placeholder */}
      <div className="doctors-card__photo">
        <div className="doctors-card__initials">{doctor.initials}</div>
        <div className="doctors-card__photo-overlay" />
      </div>

      {/* Content */}
      <div className="doctors-card__content">
        <h3 className="doctors-card__name">{doctor.name}</h3>
        <span className="doctors-card__specialty">{doctor.specialty}</span>
        <span className="doctors-card__experience">
          {/* Clock icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {doctor.experience}
        </span>
        <p className="doctors-card__bio">{doctor.bio}</p>

        {/* Social links */}
        <div className="doctors-card__socials">
          {/* Phone */}
          <a href={`tel:${doctor.phone}`} className="doctors-card__social-link" aria-label="Call">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          {/* Email */}
          <a href={`mailto:${doctor.email}`} className="doctors-card__social-link" aria-label="Email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>

          {/* LinkedIn-style */}
          <a href="#" className="doctors-card__social-link" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Twitter/X-style */}
          <a href="#" className="doctors-card__social-link" aria-label="Twitter">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768" />
              <path d="M20 4l-6.768 6.768" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Doctors() {
  return (
    <section id="doctors" className="section doctors">
      <div className="container">
        <SectionTitle
          subtitle="Our Team"
          title="Meet Our Expert"
          highlight="Doctors"
          description="Our team of experienced medical professionals is dedicated to providing the highest quality care with compassion and expertise."
        />

        <div className="doctors__grid">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              delay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
