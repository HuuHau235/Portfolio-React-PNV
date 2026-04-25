import { useReveal } from "../../hooks/useReveal";
import { aboutParagraphs, careerObjective } from "../../data/portfolio";

export default function About() {
  useReveal();

  return (
    <section id="about" className="page-section about">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Page 2</span>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="panel-card">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="panel-card objective-card">
            <h3>Career Objective</h3>
            <p>{careerObjective.headline}</p>
            <ul className="bullet-list">
              {careerObjective.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{careerObjective.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
