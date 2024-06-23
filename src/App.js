import React from 'react';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact.js';
import Nav from "./components/Nav";
import About from './components/About';
import WorkExperience from './components/WorkExperience.js';

function App() {
  
  return (
    <div className='overflow-hidden'>
      <Nav />
      <About/>
      <Skills/>
      <WorkExperience />
      <Project/>
      <Contact />
    </div>
  );
};

export default App;
