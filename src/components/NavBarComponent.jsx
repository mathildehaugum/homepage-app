import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./index.css";

function NavBarComponent() {
  return (
    <div>
      <div className="navbar-image">
        <div>
          <Navbar bg="transparent" expand="lg" overflow="hidden">
            <Navbar.Brand href="#home" className="navbar-brand">
              <span className="navbrand-styling">Mathilde Haukø Haugum</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto px-3">
                <Nav.Link href="#home" className="px-4">
                  <span className="navlink-styling">Om meg</span>
                </Nav.Link>
                <Nav.Link href="#link1" className="px-4" bg="light">
                  <span className="navlink-styling">Arbeid</span>
                </Nav.Link>
                <Nav.Link href="#link2" className="px-4">
                  <span className="navlink-styling">CV</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default NavBarComponent;
