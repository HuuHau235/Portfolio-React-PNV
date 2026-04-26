import type { MouseEvent } from "react";

type ProjectSpotlightModalProps = {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    badge: string;
    stack: string[];
    summary: string;
    responsibilities: string[];
    features: string[];
    contributions: string;
    learned: string[];
  } | null;
};

export default function ProjectSpotlightModal({
  open,
  onClose,
  project,
}: ProjectSpotlightModalProps) {
  if (!open || !project) {
    return null;
  }

  const stopPropagation = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="spotlight-shell" onClick={onClose}>
      <div className="spotlight-modal" onClick={stopPropagation}>
        <div className="spotlight-topline">
          <span className="project-badge">{project.badge}</span>
          <button type="button" className="spotlight-close" onClick={onClose}>
            Close
          </button>
        </div>
        <h2>{project.title}</h2>
        <p className="project-desc">{project.summary}</p>
        <div className="chip-row">
          {project.stack.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
        <div className="spotlight-grid">
          <div className="project-column">
            <h4>Responsibilities</h4>
            <ul className="bullet-list">
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="project-column">
            <h4>Key Features</h4>
            <ul className="bullet-list">
              {project.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="project-note">
            <h4>Contributions</h4>
            <p>{project.contributions}</p>
          </div>
          <div className="project-note">
            <h4>What I Learned</h4>
            <ul className="bullet-list">
              {project.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
