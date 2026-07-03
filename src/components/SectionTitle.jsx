import './SectionTitle.css';

export default function SectionTitle({ subtitle, title, highlight, description, light = false }) {
  return (
    <div className={`section-title ${light ? 'section-title--light' : ''}`}>
      {subtitle && <span className="section-title__subtitle">{subtitle}</span>}
      <h2 className="section-title__heading">
        {title} {highlight && <span className="section-title__highlight">{highlight}</span>}
      </h2>
      {description && <p className="section-title__description">{description}</p>}
    </div>
  );
}
