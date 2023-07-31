import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import logo from "../images/logo.png";

function Menu() {
  return (
    <div className="menuSec">
      <ReactBootstrap.Navbar expand="lg" className="navBg fixed-top">

        <ReactBootstrap.Container>

          <ReactBootstrap.Navbar.Brand href="#Home" className="logoTlt"><img src={logo} className="img-fluid " alt="prathiba" title="prathiba" width="15%"/> Prathiba</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
          
            <ReactBootstrap.Nav className="ms-auto">

              <ReactBootstrap.Nav.Link href="#Home" >Home</ReactBootstrap.Nav.Link>

              <ReactBootstrap.Nav.Link href="#About">About</ReactBootstrap.Nav.Link>

              <ReactBootstrap.Nav.Link href="#Services">Works</ReactBootstrap.Nav.Link>

              <ReactBootstrap.Nav.Link href="#Experience">Experience</ReactBootstrap.Nav.Link>

              <ReactBootstrap.Nav.Link href="#Portfolio">Portfolio</ReactBootstrap.Nav.Link>

              <ReactBootstrap.Nav.Link href="#Contact">Contact</ReactBootstrap.Nav.Link>
              
            </ReactBootstrap.Nav>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>
    </div>
  );
}

export default Menu;
