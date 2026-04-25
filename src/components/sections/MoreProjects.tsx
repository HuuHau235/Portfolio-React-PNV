import { supportingProjects } from "../../data/portfolio";
import { useReveal } from "../../hooks/useReveal";

export default function MoreProjects() {
  useReveal();

  return (
    <section id="more-projects" className="page-section more-projects">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Page 5</span>
          <h2>More Projects</h2>
          <p>
            Supporting modules and system parts that strengthened product depth,
            user flow and administrative operations.
          </p>
        </div>

        <div className="support-grid">
          {supportingProjects.map((project, index) => (
            <article key={project.title} className="support-card reveal-card">
              <span className="support-index">0{index + 3}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="chip-row">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
              <ul className="bullet-list">
                {project.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="support-focus">{project.focus}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
