import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Component/Hero';
import Navibar from './Component/Navibar';
import About from './Component/About';
import Project from './Component/Project';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Navibar/>
      <About/>
      <Project/>
    </div>
  );
}

export default App;
