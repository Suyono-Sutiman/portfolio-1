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
                <a href='#home' className='sos-ico' ><AiOutlineFacebook/></a>
                <a href='#home' className='sos-ico'><AiOutlineTwitter/></a>
                <a href='#home' className='sos-ico'><AiOutlineInstagram/></a>
                <a href='#home' className='sos-ico'><AiOutlineGithub/></a>
            </div>
            <p className='cr' ><span className='ijo' >Suyono </span>.Copyright <AiOutlineCopyright/>2020</p>
        </div>
    )
}

export default Footer;