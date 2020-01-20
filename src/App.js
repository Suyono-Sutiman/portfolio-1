import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Component/Hero';
import Navibar from './Component/Navibar';
import About from './Component/About';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App" data-spy="scroll" data-target="#navibar" data-offset="50">
      <Hero/>
      <Navibar/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
