import React from 'react';
import tiga from '../Image/tiga.png';
import empat from '../Image/empat.png';
import foodshop from '../Image/foodshop.png';
import landing from '../Image/landingpage.png';
import {IoIosArrowRoundDown, IoIosArrowRoundBack, IoIosArrowRoundUp} from 'react-icons/io';
import './Project.css';

function Project () {
    return (
        <div id='project' >
            <div className='row-pro' >
                <div className='pro'>
                <a href='https://suyono-sutiman.github.io/foodshop/' target='blank'>
                    <img src={foodshop} alt='siji' className='gambar' />
                </a>
                    <a href='#project_1'className='bawah'>
                <p>N</p>
                <p>e</p>
                <p>x</p>
                <p>t</p>
                <IoIosArrowRoundDown className='icon'/></a>
                    <a href='#about'className='kirii'><IoIosArrowRoundBack className='icon'/>
            <p>Back</p></a>
                </div>
                <div className='pro' id='project_1'>
                <a href='https://suyono-sutiman.github.io/landingpage/' target='blank' >
                    <img src={landing} alt='siji' className='gambar'/>
                </a>
                    <a href='#project_2'className='bawah'>
                    <p>N</p>
                <p>e</p>
                <p>x</p>
                <p>t</p>
                <IoIosArrowRoundDown className='icon'/></a>
                    <a href='#project'className='atas'><p>Back</p><IoIosArrowRoundUp className='icon'/></a>
                </div>
                <div className='pro' id='project_2'>
                <a href='https://suyono-sutiman.github.io/landingpage/' target='blank' >
                    <img src={tiga} alt='siji' className='gambar'/>
                </a>
                    <a href='#project_3'className='bawah'>
                    <p>N</p>
                <p>e</p>
                <p>x</p>
                <p>t</p>
                <IoIosArrowRoundDown className='icon'/></a>
                    <a href='#project_1'className='atas'><p>Back</p><IoIosArrowRoundUp className='icon'/></a>
                </div>
                <div className='pro' id='project_3'>
                <a href='https://suyono-sutiman.github.io/landingpage/' target='blank' >
                    <img src={empat} alt='siji' className='gambar'/>
                </a>
                    <a href='#project_2'className='atas'><p>Back</p><IoIosArrowRoundUp className='icon'/></a>
                </div>
            </div>
        </div>
    )
}

export default Project;