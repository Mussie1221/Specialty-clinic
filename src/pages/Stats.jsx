import { useCounter, useScrollAnimation } from "../hooks/useAnimations";
import "./Stats.css";

const stats = [
  {
    id: 1,
    value: 20,
    suffix: "+",
    label: "Doctors At Work",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
  },
  {
    id: 2,
    value: 80000,
    suffix: "+",
    label: "Satisfied Patients",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 3,
    value: 1000,
    suffix: "+",
    label: "Maternal Deliveries",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 4v16" />
        <path d="M2 8h18a2 2 0 0 1 2 2v10" />
        <path d="M2 17h20" />
        <path d="M6 8v9" />
      </svg>
    ),
  },
  {
    id: 4,
    value: 5,
    suffix: "+",
    label: "Specialties",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

// ✅ FACILITIES SECTION
const facilities = [
  {
    id: 1,
    label: "Modern Laboratory",
    icon: "🧪",
  },
  {
    id: 2,
    label: "Fully Automated Chemistry Machine",
    icon: "⚗️",
  },
  {
    id: 3,
    label: "Digital X-Ray",
    icon: "🩻",
  },
];

function StatItem({ stat }) {
  const [ref, count] = useCounter(stat.value, 2200);

  return (
    <div className="stats-item" ref={ref}>
      <div className="stats-item__icon">{stat.icon}</div>

      <span className="stats-item__number">
        {count}
        {stat.suffix}
      </span>

      <span className="stats-item__label">{stat.label}</span>
    </div>
  );
}

function FacilityItem({ item }) {
  return (
    <div className="stats-badge">
      <span className="stats-badge__icon">{item.icon}</span>
      <span className="stats-badge__label">{item.label}</span>
    </div>
  );
}

export default function Stats() {
  const [badgesRef, badgesVisible] = useScrollAnimation(0.3);

  return (
    <section id="stats" className="section stats">
      <div className="stats__overlay" />

      <div className="container stats__container">
        {/* STATS */}
        <div className="stats__grid">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>

        {/* FACILITIES */}
        <div
          ref={badgesRef}
          className={`stats__badges ${badgesVisible ? "stats__badges--visible" : ""}`}
        >
          {facilities.map((item) => (
            <FacilityItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
