import Button from "../components/Button";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Welcome to Haset Multispeciality Clinic
          </div>

          <h1 className="hero__title">
            You Will Rejoice in Our{" "}
            <span className="hero__title-highlight">Services</span>
          </h1>

          <p className="hero__description">
            At Haset Multispeciality Clinic, we are dedicated to providing
            compassionate, high-quality healthcare through experienced
            professionals, modern medical technology, and patient-centered
            treatment. Your health, comfort, and well-being are at the heart of
            everything we do.
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
      </div>
    </section>
  );
}
