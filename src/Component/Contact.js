import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
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
            <Form className='fom'>
            <Form.Group>
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group> 
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
                <Form.Control as="textarea" rows="3" placeholder="Your message..." />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
            </Form>
        </div>
        </div>
    )
}

export default Contact;