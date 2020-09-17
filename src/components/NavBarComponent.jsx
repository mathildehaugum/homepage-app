import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBarComponent() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="#home">Mathilde Haugum</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto px-3">
          <Nav.Link href="#home" className="px-4">
            Om meg
          </Nav.Link>
          <Nav.Link href="#link" className="px-4">
            Arbeid
          </Nav.Link>
          <Nav.Link href="#link" className="px-4">
            CV
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarComponent;
