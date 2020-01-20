import React from 'react';
import {Carousel, Container, Button, Row, Col} from 'react-bootstrap';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import dua from '../Image/dua.png';
import tiga from '../Image/tiga.png';
import empat from '../Image/empat.png';
import './Project.css';

function Project () {
    return (
        <Container id='project' >
            <h2><IoIosArrowBack/>Project<IoIosArrowForward/></h2>
            <Carousel className='car'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={tiga}
                alt="First slide"
                />
                <Carousel.Caption className='car-cap'>
                <p className='ijo'>Landing Page</p>
                <Button variant='success'>Detail</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={dua}
                alt="First slide"
                />
                <Carousel.Caption className='car-cap'>
                <p className='ijo'>Company Profile</p>
                <Button variant='success'>Detail</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={tiga}
                alt="First slide"
                />
                <Carousel.Caption className='car-cap'>
                <p className='ijo'>Busines</p>
                <Button variant='success'>Detail</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={empat}
                alt="First slide"
                />
                <Carousel.Caption className='car-cap'>
                <p className='ijo'>Online Shop</p>
                <Button variant='success'>Detail</Button>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <Row className='row-pro' >
                <Col md={4} className='gambar1'>
                    <img src={tiga} alt='siji' className='gambar' />
                    <div className='ket' >
                    <p className='ijo'>Landing Page</p>
                    <Button variant='success'>Detail</Button>
                    </div>
                </Col>
                <Col md={4} className='gambar1'>
                    <img src={dua} alt='siji' className='gambar'/>
                    <div className='ket' >
                    <p className='ijo'>Landing Page</p>
                    <Button variant='success'>Detail</Button>
                    </div>
                </Col>
                <Col md={4} className='gambar1'>
                    <img src={tiga} alt='siji' className='gambar'/>
                    <div className='ket' >
                    <p className='ijo'>Landing Page</p>
                    <Button variant='success'>Detail</Button>
                    </div>
                </Col>
                <Col md={4}className='gambar1'>
                    <img src={empat} alt='siji' className='gambar'/>
                    <div className='ket' >
                    <p className='ijo'>Landing Page</p>
                    <Button variant='success'>Detail</Button>
                    </div>
                </Col>
                <Col md={4} className='gambar1'>
                    <img src={tiga} alt='siji' className='gambar'/>
                    <div className='ket' >
                    <p className='ijo'>Landing Page</p>
                    <Button variant='success'>Detail</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Project;