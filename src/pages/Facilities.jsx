import "./Facilities.css";
import digitalXRay from "../assets/eqipments/Digital-x-ray.jpg";
import geUltrasound from "../assets/eqipments/Ge-healthcare-ultrasound.jpg";

const FACILITIES = [
  {
    id: 1,
    name: "Samsung HS40 4th Gen 3D/4D Ultrasound",
    description:
      "Advanced ultrasound system for detailed fetal imaging and diagnostic scans",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=samsung%20HS40%20ultrasound%20machine%20in%20hospital%20setting&image_size=square_hd",
  },
  {
    id: 2,
    name: "GE Healthcare Ultrasound",
    description:
      "High-performance ultrasound for comprehensive diagnostic imaging",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=GE%20healthcare%20ultrasound%20device%20in%20clinic&image_size=square_hd",
      // geUltrasound,
  },
  {
    id: 3,
    name: "Digital X-Ray",
    description:
      "State-of-the-art digital radiography for fast, high-quality imaging",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=digital%20x-ray%20machine%20in%20hospital&image_size=square_hd",
      // digitalXRay,
  },
  {
    id: 4,
name: "Mindray Fully Automated Chemistry Analyzer",
description:
  "High-performance laboratory equipment capable of running up to 240 tests per hour. Provides accurate biochemistry, hormonal, and electrolyte (including sodium) .",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=mindray%20fully%20automated%20medical%20machine%20in%20hospital&image_size=square_hd",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="section facilities">
      <div className="facilities__overlay" />

      <div className="container facilities__container">
        <div className="facilities__header">
          <h2 className="facilities__title">
            Our <span className="facilities__title-highlight">Facilities</span>
          </h2>
          <p className="facilities__subtitle">
            Equipped with the latest medical technology for accurate diagnostics
            and treatment
          </p>
        </div>

        <div className="facilities__grid">
          {FACILITIES.map((facility) => (
            <div key={facility.id} className="facility-card">
              <img
                src={facility.image}
                alt={facility.name}
                className="facility-card__image"
              />
              <div className="facility-card__content">
                <h3 className="facility-card__name">{facility.name}</h3>
                <p className="facility-card__description">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
