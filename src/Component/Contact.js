import React from 'react';
import {IoIosArrowBack, IoIosArrowForward, IoLogoWhatsapp, IoIosMail} from 'react-icons/io';
import {FaPhone} from 'react-icons/fa';
import './Contact.css'

function Contact () {
    return (
        <div id='contact'>
        <div className='contact'></div>
        <div className='contact-1' >
            <h2 className='h-con' ><IoIosArrowBack/>Contact<IoIosArrowForward/></h2>
            <p className='ijo'>
            Have a question or want to work together?
            </p>
            <a href='https://wa.me/6281219013721/?text=Name%3A%0AAddress%3A%0AI%20am%20interested%20in%20your%20work.' target='blank' className='wa'>
            <IoLogoWhatsapp className='ico2'/>
            </a>
            <a href='tel:+6281219013721' className='phone'>
            <FaPhone className='ico2'/>
            </a>
            <a href='mailto:yonoraphael@gmail.com?subject=Please type your name&body=I am interested in your work.' className='mail'>
            <IoIosMail className='ico2'/>
            </a>
        </div>
        </div>
    )
}

export default Contact;