import { finalNote, personal, serviceHighlights } from "../../data/portfolio";
import { useReveal } from "../../hooks/useReveal";
import { downloadCv } from "../../utils/cvBuilder";

export default function Contact() {
  useReveal();

  const copy = () => {
    navigator.clipboard.writeText(personal.email);
    window.alert("Email copied.");
  };

  const handleDownloadCv = () => {
    downloadCv();
  };

  return (
    <section id="contact" className="page-section contact">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Page 8</span>
          <h2>Final Note</h2>
        </div>

        <div className="contact-grid">
          <div className="panel-card">
            {finalNote.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="availability-panel">
              <h3>What I Can Contribute</h3>
              <div className="availability-list">
                {serviceHighlights.map((item) => (
                  <article key={item.title} className="availability-item">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="panel-card contact-card">
            <h3>Contact</h3>
            <button type="button" className="contact-action" onClick={copy}>
              Email: {personal.email}
            </button>
            <p>Phone: {personal.phone}</p>
            <p>GitHub: {personal.github}</p>
            <p>LinkedIn: {personal.linkedin}</p>
            <p>{personal.location}</p>
            <div className="contact-actions-row">
              <button
                type="button"
                className="btn-secondary"
                onClick={handleDownloadCv}
              >
                Download CV
              </button>
              <a
                className="btn-secondary"
                href={`https://${personal.github}`}
                target="_blank"
                rel="noreferrer"
              >
                Open GitHub
              </a>
              <a
                className="btn-secondary"
                href={`https://${personal.linkedin}`}
                target="_blank"
                rel="noreferrer"
              >
                Open LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
