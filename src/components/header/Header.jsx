import { useState } from "react";
import Navbar from "./navbar/Navbar";
import {
  Container,
  Navbar as BootstrapNavbar,
  Nav,
  Button,
} from "react-bootstrap";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <BootstrapNavbar
      bg="light"
      expand="lg"
      expanded={expanded}
      className="animate__animated animate__fadeIn"
    >
      <Container fluid>
        <BootstrapNavbar.Brand
          href="#"
          className="animate__animated animate__fadeInLeft"
        >
          Ship<span style={{ color: "red" }}>Up</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleNavbar}
          className="animate__animated animate__fadeInDown"
        />
        <BootstrapNavbar.Collapse
          id="basic-navbar-nav"
          className="animate__animated animate__fadeIn"
        >
          <Nav className="ms-auto animate__animated animate__fadeInRight">
            <Navbar />
          </Nav>
          <Nav className="gap-2 ms-auto d-flex animate__animated animate__fadeInUp">
            <Button variant="outline-primary" className="me-2">
              Request Quote
            </Button>
            <Button variant="outline-success">Join Now</Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Header;
