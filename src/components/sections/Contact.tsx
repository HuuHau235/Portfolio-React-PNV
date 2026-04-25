import { finalNote, personal } from "../../data/portfolio";
import { useReveal } from "../../hooks/useReveal";

export default function Contact() {
  useReveal();

  const copy = () => {
    navigator.clipboard.writeText(personal.email);
    window.alert("Email copied.");
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
          </div>
        </div>
      </div>
    </section>
  );
}
