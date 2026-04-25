import ScrollProgress from "./components/common/ScrollProgress";
import ThemeToggle from "./components/common/ThemeToggle";
import BackToTop from "./components/common/BackToTop";
import Toast from "./components/common/Toast";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/hero/Hero";
import About from "./components/sections/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import MoreProjects from "./components/sections/MoreProjects";
import Experience from "./components/sections/Experience";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <ThemeToggle />
      <BackToTop />
      <Toast />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <MoreProjects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
