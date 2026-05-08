import Background from "./components/Background";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import { motion } from "framer-motion";


import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";

import BadgeScroller from "./components/BadgeScroller";
import Contact from "./sections/Contact";

function App() {

  return (
    <div className="scroll-smooth">

      {/* Background */}
      <Background />
      <CursorGlow />

      {/* Navbar */}
      <Navbar />


      {/* OTHER SECTIONS */}
      <div className="relative z-10">

        <Hero />
        <About />

        <Skills />

        <Experience />

        <Projects />

        <Certifications />

        {/* OPEN SOURCE BADGES */}
        <BadgeScroller />
        <Contact />

      </div>

    </div>
  );
}

export default App;