import { useReveal } from "../../hooks/useReveal";

export default function About() {
  useReveal();

  return (
    <section className="about">
      <div className="container">
        <h3>About Me</h3>

        <p>
          I am a Full-Stack Developer specializing in <strong>React</strong> and{" "}
          <strong>Laravel</strong>, with experience building real-world systems
          such as e-commerce, order management, wishlists and reviews.
        </p>

        <p>
          I focus on clean architecture, RESTful APIs and maintainable code.
          I also explore AI projects using TensorFlow.js.
        </p>
      </div>
    </section>
  );
}
