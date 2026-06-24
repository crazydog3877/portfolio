import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
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
            color2="#050508"
            color3="#1a0a2e"
            timeSpeed={0.15}
            warpStrength={0.6}
            warpFrequency={3.0}
            warpSpeed={1.0}
            warpAmplitude={80.0}
            blendAngle={35.0}
            blendSoftness={0.08}
            rotationAmount={300.0}
            noiseScale={1.5}
            grainAmount={0.04}
            grainScale={1.5}
            contrast={1.3}
            saturation={1.0}
            zoom={1.0}
          />
        </div>
        <div className="content-sections">
          <About />
          <Timeline />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}
