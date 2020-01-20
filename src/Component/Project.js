import React from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import dua from '../Image/dua.png';
import tiga from '../Image/tiga.png';
import empat from '../Image/empat.png';
import './Project.css';

function Project () {
    return (
        <Container id='project' >
            <h2><IoIosArrowBack/>Project<IoIosArrowForward/></h2>
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