import { Navbar, Container, Nav } from "react-bootstrap";
export default function NavBar() {
  return (
    <Navbar className="color-nav" expand="lg">
      <Container>
        <Navbar.Brand id="navbar-brand" href="#home">
          Medical
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="nav" className="ml-auto">
            <Nav.Link id="nav-link" href="#home">
              Services
            </Nav.Link>
            <Nav.Link id="nav-link" href="#link">
              About
            </Nav.Link>
            <Nav.Link id="nav-link" href="#link">
              Medical Camps
            </Nav.Link>
            <Nav.Link id="nav-link" href="#link">
              Team
            </Nav.Link>
            <Nav.Link id="nav-link" href="#link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
