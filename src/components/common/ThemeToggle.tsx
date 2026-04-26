import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark");
      setDark(true);
    }

    const onToggle = () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      setDark(isDark);
    };

    window.addEventListener("portfolio:toggle-theme", onToggle);
    return () => window.removeEventListener("portfolio:toggle-theme", onToggle);
  }, []);

  const toggle = () => {
    window.dispatchEvent(new Event("portfolio:toggle-theme"));
  };

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      {dark ? "Light" : "Dark"}
    </button>
  );
}
