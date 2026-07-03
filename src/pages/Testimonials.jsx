import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Abebe Tadesse',
    text: 'The care I received at Hasset Clinic was exceptional. The doctors were attentive and the facilities are world-class.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Maria Santos',
    text: 'From the moment I walked in, I felt welcomed and cared for. The staff went above and beyond.',
    stars: 5,
  },
  {
    id: 3,
    name: 'David Mensah',
    text: 'The surgical team was outstanding. My recovery was smooth thanks to their expertise and follow-up care.',
    stars: 5,
  },
  {
    id: 4,
    name: 'Fatima Al-Hassan',
    text: 'Hasset Clinic combines modern technology with genuine compassion. I highly recommend their services.',
    stars: 4,
  },
];

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="section section--light">
      <div className="container">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Patients"
          highlight="Say"
          description="Hear from patients who have experienced our care"
        />

        <div className="testimonials__carousel">
          <div className="testimonials__card" key={current.id}>
            {/* Decorative quote icon */}
            <svg
              className="testimonials__quote-icon"
              viewBox="0 0 48 48"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 34h6l4-8V14H10v12h6zm16 0h6l4-8V14H26v12h6z" />
            </svg>

            <p className="testimonials__text">{current.text}</p>

            <div className="testimonials__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`testimonials__star ${i < current.stars ? 'testimonials__star--filled' : ''}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill={i < current.stars ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <div className="testimonials__author">
              <div className="testimonials__avatar">
                {getInitials(current.name)}
              </div>
              <span className="testimonials__name">{current.name}</span>
            </div>
          </div>

          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === activeIndex ? 'testimonials__dot--active' : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
