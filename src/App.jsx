import { useEffect } from 'react';
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
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the section is visible
      rootMargin: "0px 0px -50px 0px" // Triggers slightly before the element hits the bottom
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // If you want it to only animate once, uncomment the line below:
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Grab all elements with the 'reveal' class
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ParticlesBackground />
      <Navbar/>
      {/* Wrap your sections in div with 'reveal' class */}
      <div className="reveal"><HeroSection/></div>
      <div className="reveal"><About/></div>
      <div className="reveal"><Skills/></div>
      <div className="reveal"><Projects/></div>
      <div className="reveal"><Education/></div>
      <div className="reveal"><Experience/></div>
      <div className="reveal"><Activities/></div>
      <div className="reveal"><Contact/></div>
      <Footer/>
      <BackToTop/>
    </>
  )
}

export default App;