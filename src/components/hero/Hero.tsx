import TypingText from "./TypingText";
import avatar from "../../assets/images/avatar.jpg";
import { useReveal } from "../../hooks/useReveal";

export default function Hero() {
  useReveal();

  return (
    <header className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-tag">Full-Stack Developer</p>
          <h1>
            Hi, I'm <span>Huu Hau</span>
          </h1>
          <TypingText />
          <p className="hero-desc">
            I build clean, scalable web applications with modern frontend
            and well-structured backend systems.
          </p>
          <a href="#contact" className="btn-primary">Contact Me</a>
        </div>

        <div className="hero-avatar">
          <img src={avatar} alt="Huu Hau" />
        </div>
      </div>
    </header>
  );
}
