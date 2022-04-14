import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/Mehedi_Hasan.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSingOut = () =>{
    signOut(auth)
  }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
        <Navbar.Brand as={Link} to="/">
            <img height={50} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='fw-bold' as={Link} to="home">Home</Nav.Link>
            <Nav.Link className='fw-bold' as={Link} to="shop">Shop</Nav.Link>
            <Nav.Link className='fw-bold' as={Link} to="about">About</Nav.Link>
            <Nav.Link className='fw-bold' as={Link} to="contact">Contact</Nav.Link>
          </Nav>
          <Nav>

            {
              user? 
              <button onClick={handleSingOut} className='h_btn'>Sing Out</button>
              :
              <Nav.Link className='p-1' as={Link} to="login"><button className='h_btn'>Log In</button> </Nav.Link>
            }
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;