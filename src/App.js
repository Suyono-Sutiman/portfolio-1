import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Component/Hero';
const Navibar = React.lazy(() => import('./Component/Navibar'));
const About = React.lazy(() => import('./Component/About'));
const Project = React.lazy(() => import('./Component/Project'));
const Contact = React.lazy(() => import('./Component/Contact'));
const Footer = React.lazy(() => import('./Component/Footer'));

function App() {
  return (
    <div className="App" data-spy="scroll" data-target="#navibar" data-offset="50">
      <Hero/>
      <React.Suspense fallback={<div>Loading...</div>} >
      <Navibar/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
      </React.Suspense>
    </div>
  );
}

export default App;
