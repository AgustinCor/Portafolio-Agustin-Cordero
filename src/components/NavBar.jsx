import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
<Navbar bg="light" expand="lg"  fixed="bottom">
    <Container className='container'>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
             <i className="fa-solid fa-house"></i>
             <b>Home</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/aboutme">
             <i className="fa-solid fa-user"></i>
             <b>About Me</b>
            </Nav.Link>
          <Nav.Link as={Link} to="/skills">
          <i className="fa-solid fa-user"></i>
             <b>Skills</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/projects">
            <i className="fa-solid fa-flask"></i>
            <b>Projects</b>
          </Nav.Link>
        </Nav>
    </Container>

  </Navbar>
    );
};

export default NavBar;