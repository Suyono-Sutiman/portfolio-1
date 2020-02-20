import React from 'react';
import {IoIosArrowRoundForward, IoIosArrowRoundDown, IoIosArrowRoundBack} from 'react-icons/io';
import './Me.css';

function Me () {
    return (
        <div className='cont satu'>
        <div className='me' id='about'>
            <div className='pic'></div>
            <h3>Who Am I?</h3>
            <p>
            I'm the Front-End Developer.<br/>
            I have serious passion for UI effects,<br/>
            animations and creating intuitive, dynamic user experiences.<br/>
            <span>Let's make something special.</span>
            </p>
            <a href='#project' className='kanan'>
                <p>Project</p><IoIosArrowRoundForward className='icon'/></a>
            <a href='#work' className='bawah'>
                <p>W</p>
                <p>o</p>
                <p>r</p>
                <p>k</p>
                <IoIosArrowRoundDown className='icon'/></a>
            <a href='#home' className='kirii'><IoIosArrowRoundBack className='icon'/>
            <p>Back</p></a>
        </div>
        </div>
    )
}
export default Me;