import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {IoIosArrowBack, IoIosArrowForward, IoMdBulb, IoIosSpeedometer, IoIosRocket} from 'react-icons/io'
import res from '../Image/res.png';
import './About.css';
import Skill from './Skill';

function About () {
    return (
        <Container id='about' >
            <h2><IoIosArrowBack/>About<IoIosArrowForward/></h2>
            <Row>
                <Col xs={6} md={3} >
                    <div className='hexagon'>
                        <img src={res} alt='res' className='ic2' />
                    </div>
                    <h4>Responsive</h4>
                    <p>
                    My layouts will work on any device, big or small.
                    </p>
                </Col>
                <Col xs={6} md={3} >
                    <div className='hexagon'>
                        <IoIosSpeedometer className='ic1' />
                    </div>
                    <h4>Fast</h4>
                    <p>
                    Fast load times and lag free interaction, my highest priority.
                    </p>
                </Col>
                <Col xs={6} md={3} >
                    <div className='hexagon'>
                        <IoIosRocket className='ic1' />
                    </div>
                    <h4>Dynamic</h4>
                    <p>
                    Websites don't have to be static, I love making pages come to life.
                    </p>
                </Col>
                <Col xs={6} md={3} >
                    <div className='hexagon'>
                        <IoMdBulb className='ic1' />
                    </div>
                    <h4>Intuitive</h4>
                    <p>
                    Strong preference for easy to use, intuitive UX/UI.
                    </p>
                </Col>
            </Row>
            <Skill/>
        </Container>
    )
}

export default About;