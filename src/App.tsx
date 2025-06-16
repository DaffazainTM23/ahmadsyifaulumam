import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Internship from './components/Internship';
import Organizations from './components/Organizations';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Internship />
      <Organizations />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;