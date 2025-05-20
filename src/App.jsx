import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css'
import Hero from './components/hero';
import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contacts';
import Footer from './components/footer';
import Skills from './components/skills';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
