import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import {FaArrowDown} from 'react-icons/fa';
import './Hero.css';

function Hero () {
    return (
        <Jumbotron className='jumbo' id='home'>
            <h1 className='slide-in-left' >Hello, I'm <span>Suyono</span></h1>
            <p className='slide-in-right' >Front-End . Web-Designer</p>
            <div className='shake-vertical'>
            <div className='bounce-top'>
                <Button variant="outline-success" className='btn-1' href='#about' >
                My Work <br/>
                <FaArrowDown/>
                </Button>
            </div>
            </div>
        </Jumbotron>
    )
}

export default Hero;