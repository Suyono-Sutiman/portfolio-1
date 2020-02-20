import React from 'react';
import {IoLogoWhatsapp, IoIosMail, IoIosArrowRoundUp} from 'react-icons/io';
import {AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub} from 'react-icons/ai';
import {FaPhone} from 'react-icons/fa';
import './Contact.css'

function Contact () {
    return (
        <div id='contact'>
        <div className='contact-1' >
        <a href='#home' className='atas'>
            <p>Back</p><IoIosArrowRoundUp className='icon'/></a>
            <p>
            Have a question or want to work together?
            </p>
            <a href='https://wa.me/6281219013721' target='blank' className='wa'>
            <IoLogoWhatsapp className='ico2'/>
            </a>
            <a href='tel:+6281219013721' className='phone'>
            <FaPhone className='ico2'/>
            </a>
            <a href='mailto:yonoraphael@gmail.com?subject=Please type your name&body=I am interested in your work.' className='mail'>
            <IoIosMail className='ico2'/>
            </a>
        </div>
        <div className='sos'>
                <a href='https://www.facebook.com/synwebdev' target='blank' className='sos-ico' >
                    <AiOutlineFacebook/></a>
                <a href='https://twitter.com/Syn_WebDev' target='blank' className='sos-ico'>
                    <AiOutlineTwitter/></a>
                <a href='https://www.instagram.com/syn_web_dev' target='blank' className='sos-ico'>
                    <AiOutlineInstagram/></a>
                <a href='https://github.com/Suyono-Sutiman' target='blank' className='sos-ico'>
                    <AiOutlineGithub/></a>
            </div>
        </div>
    )
}

export default Contact;