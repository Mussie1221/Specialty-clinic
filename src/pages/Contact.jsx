import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import "./Contact.css";

const contactInfo = [
  {
    id: "address",
    label: "Address",
    value: "Haset Multispeciality Clinic, Ayat, Addis Ababa",
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
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: "phone",
    label: "Phone",
    value: "+251 970676767",
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "Email",
    value: "Hasethealthcare2018@gmail.com",
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
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: "hours",
    label: "Working Hours",
    value: "Sat-Sun: 24/7",
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = async (item) => {
    try {
      await navigator.clipboard.writeText(item.value);
      setCopiedItem(item.id);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
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
          {/* Info Cards */}
          <div className="contact__info">
            {contactInfo.map((item) => (
              <div
                className="contact__info-card"
                key={item.id}
                onClick={() => handleCopy(item)}
                style={{ cursor: "pointer" }}
              >
                <div className="contact__info-icon">{item.icon}</div>
                <div className="contact__info-content">
                  <span className="contact__info-label">{item.label}</span>
                  <span className="contact__info-value">
                    {item.value}
                    {copiedItem === item.id && (
                      <span
                        className="contact__copied"
                        style={{
                          marginLeft: "8px",
                          color: "#10b981",
                          fontSize: "0.875rem",
                        }}
                      >
                        ✓ Copied!
                      </span>
                    )}
                  </span>
                </div>
                <div
                  className="contact__copy-icon"
                  style={{ opacity: "0.5", marginLeft: "auto" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
