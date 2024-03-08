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
    <BootstrapNavbar bg="light" expand="lg" expanded={expanded}>
      <Container fluid>
        <BootstrapNavbar.Brand href="#">
          Ship<span style={{ color: "red" }}>Up</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleNavbar}
        />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Navbar />
          </Nav>
          <Nav className="gap-2 ms-auto d-flex">
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
