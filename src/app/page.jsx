import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
