import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/Mehedi_Hasan.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
        <Navbar.Brand href="#home">
            <img height={50} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='fw-bold' href="#home">Home</Nav.Link>
            <Nav.Link className='fw-bold' href="#shop">Shop</Nav.Link>
            <Nav.Link className='fw-bold' href="#about">About</Nav.Link>
            <Nav.Link className='fw-bold' href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='p-1' href="#deets"><button className='h_btn'>Log In</button> </Nav.Link>
            <Nav.Link className='p-1' href="#deets"><button className='h_btn'>Sing Up</button> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;