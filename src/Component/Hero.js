import React from 'react';
import {IoIosArrowRoundDown, IoIosArrowRoundForward} from 'react-icons/io';
import './Hero.css';

function Hero () {
    return (
        <div className='jumbo' id='home'>
            <h1 className='slide-in-left' >Hello, I'm <span>Suyono</span></h1>
            <p className='slide-in-right' >Front-End . Web-Designer</p>
            <a href='#about' className='kanan'><p>Who am I</p>
            <IoIosArrowRoundForward className='icon'/></a>
            <a href='#contact' className='bawah'>
                <p>C</p>
                <p>o</p>
                <p>n</p>
                <p>t</p>
                <p>a</p>
                <p>c</p>
                <p>t</p><IoIosArrowRoundDown className='icon'/></a>
        </div>
    )
}

export default Hero;