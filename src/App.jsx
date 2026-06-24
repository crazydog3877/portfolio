import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="content-wrapper">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
