import React from 'react';
import {AiFillCaretUp, AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub, AiOutlineCopyright, } from 'react-icons/ai';
import './Footer.css';

function Footer () {
    return (
        <div className='foot'>
            <div className='d-up' >
            <a href='#home'><AiFillCaretUp className='up'/></a>
            </div>
            <div className='sos'>
                <a href='https://www.facebook.com/synwebdev' target='blank' className='sos-ico' ><AiOutlineFacebook/></a>
                <a href='https://twitter.com/Syn_WebDev' target='blank' className='sos-ico'><AiOutlineTwitter/></a>
                <a href='https://www.instagram.com/syn_web_dev' target='blank' className='sos-ico'><AiOutlineInstagram/></a>
                <a href='https://github.com/Suyono-Sutiman' target='blank' className='sos-ico'><AiOutlineGithub/></a>
            </div>
            <p className='cr' ><span className='ijo' >Suyono </span>.Copyright <AiOutlineCopyright/>2020</p>
        </div>
    )
}

export default Footer;