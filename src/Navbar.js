import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
export default function NavbarLg() {
  return (
    <Navbar expand="lg" className=" bg-white navbar-height">
      <>
        <Navbar.Brand href="#home">
          <img
            src="/images/logo.jpeg"
            width="30"
            height="30"
            style={{ marginLeft: "30px" }}
            className="d-inline-block align-top navbar-logo-height "
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home" className="navbar-margin-left">
              Shop by Bike
            </Nav.Link>
            <Nav.Link href="#home" className="navbar-margin-left">
              Motorcycle Accessories
            </Nav.Link>
            <Nav.Link href="#home" className="navbar-margin-left">
              Combos
            </Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="navbar-margin-both">
              Shop By Bike
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="navbar-margin-both">
              Motocycle Accessories
            </Nav.Link>
            <Nav.Link href="#deets" className="navbar-margin-both">
              Combos & Offers
            </Nav.Link>

            <Navbar.Brand href="#home">
              {/* <img
            src="/images/logo.jpeg"
            width="30"
            height="30"
            className="d-inline-block align-top navbar-logo-height "
            alt="React Bootstrap logo"
          /> */}
              <FaInstagram style={{ margin: "0 10px" }} />
              <FaFacebook style={{ margin: "0 10px" }} />
              <FaYoutube style={{ margin: "0 10px" }} />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}
