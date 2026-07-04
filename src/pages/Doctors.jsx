import { useScrollAnimation } from "../hooks/useAnimations";
import SectionTitle from "../components/SectionTitle";
import drYaredTesfaye from "../assets/Doctors/dr-yared-tesfaye.png";
import drBaslielEliyas from "../assets/Doctors/dr-basliel-eliyas.png";
import "./Doctors.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Yared Tesfaye",
    initials: "YT",
    specialty: "Gyn/Obs Specialist, Maternal Fetal Medicine Subspecialist",
    photo: drYaredTesfaye,
  },
  {
    id: 2,
    name: "Dr. Ashagrachew Haile",
    initials: "AH",
    specialty: "Internist",
    photo: null,
  },
  {
    id: 3,
    name: "Dr. Basliel Elias",
    initials: "BE",
    specialty: "General Surgeon",
    photo: drBaslielEliyas,
  },
  {
    id: 4,
    name: "Dr. Miheret Kassahun",
    initials: "MK",
    specialty: "Pediatrician",
    photo: null,
  },
  {
    id: 5,
    name: "Dr. Nebiyou Damtew",
    initials: "ND",
    specialty: "Radiologist",
    photo: null,
  },
];

function DoctorCard({ doctor, delay }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <article
      ref={ref}
      className={`doctors-card ${isVisible ? "doctors-card--visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Photo placeholder */}
      <div className="doctors-card__photo">
        {doctor.photo ? (
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="doctors-card__photo-img"
          />
        ) : (
          <div className="doctors-card__initials">{doctor.initials}</div>
        )}
        <div className="doctors-card__photo-overlay" />
      </div>

      {/* Content */}
      <div className="doctors-card__content">
        <h3 className="doctors-card__name">{doctor.name}</h3>
        <span className="doctors-card__specialty">{doctor.specialty}</span>
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
            <DoctorCard key={doctor.id} doctor={doctor} delay={index * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
