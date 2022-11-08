import './NavbarLinks.css'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarLinks() {
  return (
    <div className='my-4'>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Ajeuter">Ajeuter</Nav.Link>
            <Nav.Link href="/Suprime">Suprime</Nav.Link>
            <Nav.Link href="/Modifier">Modifier</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarLinks