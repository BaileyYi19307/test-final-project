import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Campus Clearout</Navbar.Brand>
            <Nav.Link as={Link} to="/">Listings</Nav.Link>|
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
      </Container>
    </Navbar>
  );
}
