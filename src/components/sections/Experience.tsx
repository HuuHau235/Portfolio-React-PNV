import { education, internship } from "../../data/portfolio";
import { useReveal } from "../../hooks/useReveal";

export default function Experience() {
  useReveal();

  return (
    <section id="journey" className="page-section experience">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Page 6</span>
          <h2>Education & Experience</h2>
        </div>

        <div className="timeline-grid">
          <article className="timeline-card reveal-card">
            <span className="timeline-label">Education</span>
            <h3>{education.school}</h3>
            <p className="timeline-role">{education.program}</p>
            <ul className="bullet-list">
              {education.studies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{education.summary}</p>
          </article>

          <article className="timeline-card reveal-card">
            <span className="timeline-label">Internship Experience</span>
            <h3>{internship.title}</h3>
            <p className="timeline-role">
              {internship.company} | {internship.period}
            </p>
            <p>{internship.summary}</p>
            <ul className="bullet-list">
              {internship.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{internship.closing}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
