type ProjectCardProps = {
  index: string;
  title: string;
  badge: string;
  stack: string[];
  summary: string;
  responsibilities: string[];
  features: string[];
  contributions: string;
  learned: string[];
  onSpotlight?: () => void;
};

export default function ProjectCard({
  index,
  title,
  badge,
  stack,
  summary,
  responsibilities,
  features,
  contributions,
  learned,
  onSpotlight,
}: ProjectCardProps) {
  return (
    <article className="project-card reveal-card">
      <div className="project-topline">
        <span className="project-index">{index}</span>
        <span className="project-badge">{badge}</span>
      </div>

      <h3>{title}</h3>
      <p className="project-desc">{summary}</p>

      <div className="chip-row">
        {stack.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>

      <div className="project-details">
        <div className="project-column">
          <h4>Responsibilities</h4>
          <ul className="bullet-list">
            {responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="project-column">
          <h4>Key Features</h4>
          <ul className="bullet-list">
            {features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-footer-grid">
        <div className="project-note">
          <h4>Contributions</h4>
          <p>{contributions}</p>
        </div>
        <div className="project-note">
          <h4>What I Learned</h4>
          <ul className="bullet-list">
            {learned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-actions">
        <button type="button" className="btn-secondary" onClick={onSpotlight}>
          Open Spotlight
        </button>
      </div>
    </article>
  );
}
