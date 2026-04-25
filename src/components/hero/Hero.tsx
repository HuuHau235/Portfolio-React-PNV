import TypingText from "./TypingText";
import avatar from "../../assets/images/avatar.jpg";
import { useReveal } from "../../hooks/useReveal";
import { personal, stats } from "../../data/portfolio";

export default function Hero() {
  useReveal();

  return (
    <header id="cover" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="section-kicker">Page 1</span>
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
              <span>{personal.github}</span>
              <span>{personal.linkedin}</span>
              <span>{personal.portfolio}</span>
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
    </header>
  );
}
