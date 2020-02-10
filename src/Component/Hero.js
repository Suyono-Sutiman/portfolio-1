import React from 'react';
import {FaArrowDown} from 'react-icons/fa';
import './Hero.css';

function Hero () {
    return (
        <div className='jumbo' id='home'>
            <h1 className='slide-in-left' >Hello, I'm <span>Suyono</span></h1>
            <p className='slide-in-right' >Front-End . Web-Designer</p>
            <div className='bounce-top'>
                <div className='btn-1'><a href='#skil'>
                My Work<br/>
                <span><FaArrowDown/></span></a>
                </div>
            </div>
        </div>
    )
}

export default Hero;