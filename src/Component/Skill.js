import React from 'react';
import {Row, Col, ProgressBar, Container} from 'react-bootstrap';
import './Skill.css';

function Skill () {
    return (
        <Container>
        <Row>
            <Col md={6} className='col4' >
                <div className='rot'></div>
                <h3>Who Am I?</h3>
                <p>
                I'm the Front-End Developer.<br/>
                I have serious passion for UI effects,<br/>
                animations and creating intuitive, dynamic user experiences.<br/>
                <span className='ijo' >Let's make something special.</span>
                </p>
            </Col>
            <Col md={6} className='colskill' >
                <ProgressBar animated variant="success" now={85} label='CSS' className='prog'/>
                <ProgressBar animated variant="success" now={90} label='HTML' className='prog'/>
                <ProgressBar animated variant="success" now={93} label='REACT' className='prog'/>
                <ProgressBar animated variant="success" now={75} label='JAVASCRIPT' className='prog'/>
                <ProgressBar animated variant="success" now={62} label='NODE.JS' className='prog'/>
                <ProgressBar animated variant="success" now={80} label='BOOTSTRAP' className='prog'/>
                <ProgressBar animated variant="success" now={78} label='UI DESIGN' className='prog'/>
                <ProgressBar animated variant="success" now={70} label='ADOBE XD' className='prog'/>
            </Col>
        </Row>
        </Container>
    )
}

export default Skill;