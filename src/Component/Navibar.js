import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

function Navibar () {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky='top'>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" id='navibar'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navibar;