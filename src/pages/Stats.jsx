import { useCounter, useScrollAnimation } from '../hooks/useAnimations';
import './Stats.css';

const stats = [
  {
    id: 1,
    value: 150,
    suffix: '+',
    label: 'Doctors At Work',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
  },
  {
    id: 2,
    value: 1200,
    suffix: '+',
    label: 'Satisfied Patients',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 3,
    value: 600,
    suffix: '+',
    label: 'Bed Facility',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16" />
        <path d="M2 8h18a2 2 0 0 1 2 2v10" />
        <path d="M2 17h20" />
        <path d="M6 8v9" />
      </svg>
    ),
  },
  {
    id: 4,
    value: 50,
    suffix: '+',
    label: 'Specialties',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

const achievements = [
  {
    id: 1,
    label: 'JCI Accredited',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    label: 'ISO 9001:2015',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 3,
    label: 'WHO Standards',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

function StatItem({ stat }) {
  const [ref, count] = useCounter(stat.value, 2200);

  return (
    <div className="stats-item" ref={ref}>
      <div className="stats-item__icon">
        {stat.icon}
      </div>
      <span className="stats-item__number">
        {count}{stat.suffix}
      </span>
      <span className="stats-item__label">{stat.label}</span>
    </div>
  );
}

export default function Stats() {
  const [badgeRef, badgeVisible] = useScrollAnimation(0.2);

  return (
    <section id="stats" className="section stats">
      <div className="stats__overlay" />
      <div className="container stats__container">
        {/* Stats grid */}
        <div className="stats__grid">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>

        {/* Achievement badges */}
        <div
          ref={badgeRef}
          className={`stats__badges ${badgeVisible ? 'stats__badges--visible' : ''}`}
        >
          {achievements.map((achievement) => (
            <div key={achievement.id} className="stats-badge">
              <span className="stats-badge__icon">{achievement.icon}</span>
              <span className="stats-badge__label">{achievement.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
