import Navbar from "./navbar/Navbar";
import {
  Container,
  Navbar as BootstrapNavbar,
  Nav,
  Button,
} from "react-bootstrap";

function Header() {
  return (
    <BootstrapNavbar bg="light" expand="lg" fixed="top" className="z-10">
      <Container className="d-flex justify-content-center align-items-center">
        <BootstrapNavbar.Brand href="#home">
          Ship<span style={{ color: "red" }}>Up</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-center"
        >
          <Nav className="me-auto">
            <Navbar />
          </Nav>
          <Button variant="primary" className="mr-2" style={{ color: "black" }}>
            Request Quote
          </Button>
          <Button variant="success" style={{ color: "black" }}>
            Join Now
          </Button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Header;
