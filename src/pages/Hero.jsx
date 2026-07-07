import Button from "../components/Button";
import heroBackground from "../assets/hs.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="hero__overlay"></div>
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Welcome to Haset Multispecialty Clinic
          </div>

          <h1 className="hero__title">
            You Will Rejoice in Our{" "}
            <span className="hero__title-highlight">Services</span>
          </h1>

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
