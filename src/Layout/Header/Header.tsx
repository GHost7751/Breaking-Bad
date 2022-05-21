import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const Header = () => {
    return (
          <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/home">Breaking Bad</Navbar.Brand>
          <Nav className="me-left">
            <Link to="/home"><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to="/characters"><Nav.Link href="#features">Characters</Nav.Link></Link>
            <Link to="/episodes"><Nav.Link href="#pricing">Episodes</Nav.Link></Link>
            </Nav>
    </Container>
  </Navbar>
    );
};

export default Header;
