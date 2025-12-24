import { useReveal } from "../../hooks/useReveal";

export default function Experience() {
  useReveal();

  return (
    <section className="experience">
      <div className="container">
        <h3>Highlights</h3>

        <ul className="experience-list">
          <li>Designed scalable REST APIs</li>
          <li>Built reusable React components</li>
          <li>Handled real-world edge cases</li>
          <li>Deployed full-stack applications</li>
        </ul>
      </div>
    </section>
  );
}
