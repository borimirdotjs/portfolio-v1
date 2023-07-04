import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";
import Widget from "./components/Widget/Widget";
import Projects from "./components/Projects/Projects";
import { Toaster } from "react-hot-toast";
import { useRef } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Widget />
      <Toaster />
      <Nav
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Hero contactRef={contactRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
