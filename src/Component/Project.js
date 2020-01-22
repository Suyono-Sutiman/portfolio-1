import React from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';
import {IoIosArrowBack, IoIosArrowForward,} from 'react-icons/io';
import tiga from '../Image/tiga.png';
import empat from '../Image/empat.png';
import foodshop from '../Image/foodshop.png';
import landing from '../Image/landingpage.png';
import './Project.css';

function Project () {
    return (
        <Container id='project' >
            <h2><IoIosArrowBack/>Project<IoIosArrowForward/></h2>
            <Row className='row-pro' >
                <Col md={4} className='gambar1'>
                    <img src={foodshop} alt='siji' className='gambar' />
                    <div className='ket' >
                    <h4>Restaurant Business</h4>
                    <p className='ijo'>React Bootstrap</p>
                    <a href='https://suyono-sutiman.github.io/foodshop/' target='blank'>
                        <Button variant='success'>Visit Site</Button>
                    </a>
                    </div>
                </Col>
                <Col md={4} className='gambar1'>
                    <img src={landing} alt='siji' className='gambar'/>
                    <div className='ket' >
                    <h4>Landing Page</h4>
                    <p className='ijo'>React HTML CSS</p>
                    <a href='https://suyono-sutiman.github.io/landingpage/' target='blank' >
                    <Button variant='success'>Visit Site</Button>
                    </a>
                    </div>
                </Col>
                <Col md={4} className='gambar1'>
                    <img src={tiga} alt='siji' className='gambar'/>
                    <div className='ket' >
                    <h4>Landing Page</h4>
                    <p className='ijo'>React HTML CSS</p>
                    <Button variant='success'>Visit Site</Button>
                    </div>
                </Col>
                <Col md={4}className='gambar1'>
                    <img src={empat} alt='siji' className='gambar'/>
                    <div className='ket' >
                    <h4>Landing Page</h4>
                    <p className='ijo'>React HTML CSS</p>
                    <Button variant='success'>Visit Site</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Project;