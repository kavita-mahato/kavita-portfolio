import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Activities from './components/Activities';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Experience/>
      <Activities/>
      <Contact/>
    </>
  )
}

export default App;