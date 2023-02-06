import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-3 shadow-sm rounded">
        <Container>
          <Navbar.Brand href="/">Waiter.app</Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;