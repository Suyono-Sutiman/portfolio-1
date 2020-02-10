import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Firstslide.css';
import Me from './Me';
import About from './About';
import Skill from './Skill';

function Firstslide() {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        swipeable={true}
      >
        <div>
          <About/>
        </div>
        <div>
        <Me/>
        </div>
        <div>
        <Skill/>
        </div>
      </Carousel>
    );
  }

export default Firstslide;