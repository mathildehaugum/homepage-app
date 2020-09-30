import React from "react";
import { Navbar, Nav } from "react-bootstrap"; //remember import in index.js

function NavBar() {
  return (
    <div>
      <div>
        <div>
          <Navbar bg="transparent" expand="lg" overflow="hidden">
            <Navbar.Brand href="/" className="navbar-brand">
              <span className="navbrand-page">Mathilde Haukø Haugum</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto px-3">
                <Nav.Link href="/about" className="px-4">
                  <span className="navlink-page">Om meg</span>
                </Nav.Link>
                <Nav.Link href="/work" className="px-4" bg="light">
                  <span className="navlink-page">Arbeid</span>
                </Nav.Link>
                <Nav.Link href="/cv" className="px-4">
                  <span className="navlink-page">CV</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
