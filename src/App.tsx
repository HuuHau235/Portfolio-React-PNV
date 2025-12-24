import ScrollProgress from "./components/common/ScrollProgress";
import ThemeToggle from "./components/common/ThemeToggle";
import BackToTop from "./components/common/BackToTop";
import Toast from "./components/common/Toast";

import Hero from "./components/hero/Hero";
import About from "./components/sections/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <ThemeToggle />
      <BackToTop />
      <Toast />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
