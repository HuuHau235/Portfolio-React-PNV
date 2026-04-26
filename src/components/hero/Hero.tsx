import TypingText from "./TypingText";
import avatar from "../../assets/images/avatar.jpg";
import { useReveal } from "../../hooks/useReveal";
import { personal, serviceHighlights, stats } from "../../data/portfolio";
import { downloadCv } from "../../utils/cvBuilder";

export default function Hero() {
  useReveal();

  const copyEmail = () => navigator.clipboard.writeText(personal.email);
  const printPortfolio = () => window.print();
  const handleDownloadCv = () => downloadCv();

  return (
    <header id="cover" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="section-kicker">Page 1</span>
          <div className="hero-utility-row">
            <span className="hero-availability">Open to internships and projects</span>
            <span className="hero-availability hero-availability-secondary">
              Based in {personal.location}
            </span>
          </div>
          <p className="hero-tag">{personal.role}</p>
          <h1>{personal.name}</h1>
          <TypingText />
          <p className="hero-desc">{personal.tagline}</p>
          <p className="hero-intro">{personal.intro}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
            <button type="button" className="btn-secondary" onClick={copyEmail}>
              Copy Email
            </button>
            <button type="button" className="btn-secondary" onClick={printPortfolio}>
              Print / PDF
            </button>
            <button type="button" className="btn-secondary" onClick={handleDownloadCv}>
              Download CV
            </button>
          </div>

          <div className="hero-meta">
            <span>{personal.location}</span>
            <span>{personal.email}</span>
            <span>{personal.phone}</span>
          </div>
        </div>

        <div className="hero-avatar">
          <div className="hero-photo-card reveal-card">
            <img src={avatar} alt={personal.name} />
            <div className="hero-links">
              <a href={`https://${personal.github}`} target="_blank" rel="noreferrer">
                {personal.github}
              </a>
              <a
                href={`https://${personal.linkedin}`}
                target="_blank"
                rel="noreferrer"
              >
                {personal.linkedin}
              </a>
              <button
                type="button"
                className="hero-link-button"
                onClick={() =>
                  window.dispatchEvent(new Event("portfolio:open-palette"))
                }
              >
                Launch Quick Actions
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container stats-grid">
        {stats.map((item) => (
          <div key={item.label} className="stat-card reveal-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="container service-grid">
        {serviceHighlights.map((item) => (
          <article key={item.title} className="service-card reveal-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </header>
  );
}
