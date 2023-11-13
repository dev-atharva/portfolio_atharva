import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfoilo from "./components/Portfoilo";
import Skills from "./components/Skills";
import { Element } from "react-scroll";
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skill">
        <Skills />
      </Element>
      <Element name="portfolio">
        <Portfoilo />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
