import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Grainient from './components/Grainient';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="grainient-bg-wrapper">
          <Grainient
            color1="#FF7023"
            color2="#0a0b0f"
            color3="#2d1b69"
            timeSpeed={0.15}
            warpStrength={1.0}
            warpFrequency={4.0}
            warpSpeed={1.5}
            warpAmplitude={60.0}
            blendAngle={35.0}
            blendSoftness={0.12}
            rotationAmount={400.0}
            noiseScale={2.0}
            grainAmount={0.06}
            grainScale={2.0}
            contrast={1.5}
            saturation={1.2}
            zoom={1.0}
          />
        </div>
        <div className="content-sections">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}
