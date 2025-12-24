import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("section, .skill-card, .project-card");

    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.2 }
    );

    els.forEach(el => observer.observe(el));
  }, []);
}
