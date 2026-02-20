import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <>
      <ParticlesBackground />
      <Navbar/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Experience/>
      <Activities/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </>
  )
}

export default App;