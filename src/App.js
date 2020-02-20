import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Component/Hero';
import Skill from './Component/Skill';
import Me from './Component/Me';
import About from './Component/About';
import Contact from './Component/Contact';
import Project from './Component/Project';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Contact/>
      <Me/>
      <About/>
      <Skill/>
      <Project/>
    </div>
  );
}

export default App;
