import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import './Contact.css';

const contactInfo = [
  {
    id: 'address',
    label: 'Address',
    value: '123 Health Avenue, Addis Ababa, Ethiopia',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+251 11 234 5678',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    value: 'info@hassetclinic.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: 'hours',
    label: 'Working Hours',
    value: 'Mon-Fri: 8AM-8PM | Sat-Sun: 9AM-5PM',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          subtitle="Get In Touch"
          title="Contact"
          highlight="Us"
          description="We are here to help. Reach out to us through any of the channels below."
        />

        <div className="contact__grid">
          {/* Left – Info Cards */}
          <div className="contact__info">
            {contactInfo.map((item) => (
              <div className="contact__info-card" key={item.id}>
                <div className="contact__info-icon">{item.icon}</div>
                <div className="contact__info-content">
                  <span className="contact__info-label">{item.label}</span>
                  <span className="contact__info-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right – Form */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="contact-name">Full Name</label>
              <input
                className="contact__input"
                id="contact-name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-row">
              <div className="contact__form-group">
                <label className="contact__label" htmlFor="contact-email">Email</label>
                <input
                  className="contact__input"
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__form-group">
                <label className="contact__label" htmlFor="contact-phone">Phone</label>
                <input
                  className="contact__input"
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="+251 ..."
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label className="contact__label" htmlFor="contact-subject">Subject</label>
              <select
                className="contact__input contact__select"
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="appointment">Book Appointment</option>
                <option value="emergency">Emergency</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div className="contact__form-group">
              <label className="contact__label" htmlFor="contact-message">Message</label>
              <textarea
                className="contact__input contact__textarea"
                id="contact-message"
                name="message"
                placeholder="Tell us how we can help..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <Button variant="primary" size="large" className="contact__submit" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
