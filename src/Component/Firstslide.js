import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Me from './Me';
import About from './About';
import Skill from './Skill';
import Hero from './Hero';

function Firstslide() {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        swipeable={true}
        selectedItem={1}
        emulateTouch={true}
        swipeScrollTolerance={150}
        className='firstslide'
        showArrows={false}>
        <About/>
        <div className='second'>
          <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable={true}
          selectedItem={1}
          emulateTouch={true}
          swipeScrollTolerance={150}
          axis='vertical'>
            <Me/>
            <Hero/>
          </Carousel>
        </div>
        <Skill/>
      </Carousel>
    );
  }

export default Firstslide;