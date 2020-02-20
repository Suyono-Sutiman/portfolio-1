import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Me from './Me';
import Hero from './Hero';

class Top extends React.Component {
    render () {
        return (
            <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            swipeable={true}
            selectedItem={1}
            emulateTouch={true}
            swipeScrollTolerance={0}
            axis='vertical'>
                <Me/>
                <Hero/>
            </Carousel>
        )
    }
}
export default Top;