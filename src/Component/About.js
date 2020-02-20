import React from 'react';
import {IoMdBulb, IoIosSpeedometer, IoIosRocket, IoIosArrowRoundUp, IoIosArrowRoundDown} from 'react-icons/io'
import {MdDevices} from 'react-icons/md';
import './About.css';

function About () {
    return (
        <div id='work' className='about' >
            <a href='#skil' className='bawah'>
                <p>S</p>
                <p>k</p>
                <p>i</p>
                <p>l</p>
                <p>l</p>
                <IoIosArrowRoundDown className='icon'/></a>
            <a href='#about' className='atas'><p>Back</p><IoIosArrowRoundUp className='icon'/></a>
            <div className='about-cont'>
            <div className='about-d'>
                <div className='about-in'>
                    <MdDevices className='ic1'/>
                    <h4>Responsive</h4>
                    <p>
                    My layouts will work on any device, big or small.
                    </p>
                </div>
                <div className='about-in'>
                    <IoIosSpeedometer className='ic1' />
                    <h4>Fast</h4>
                    <p>
                    Fast load times and lag free interaction, my highest priority.
                    </p>
                </div>
            </div>
            <div className='about-d'>
                <div className='about-in'>
                    <IoIosRocket className='ic1' />
                    <h4>Dynamic</h4>
                    <p>
                    Websites don't have to be static, I love making pages come to life.
                    </p>
                </div>
                <div className='about-in'>
                    <IoMdBulb className='ic1' />
                    <h4>Intuitive</h4>
                    <p>
                    Strong preference for easy to use, intuitive UX/UI.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About;