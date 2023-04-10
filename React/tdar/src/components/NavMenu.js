import React from "react";
import { Container , Navbar , Nav , NavDropdown} from "react-bootstrap";


const NavMenu = () => {
  return (
    <Navbar sticky="top" bg="primary" variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">Tierra De Estrellas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/Noticias">Noticias</Nav.Link>
            <Nav.Link href="/Historia">JUGAR</Nav.Link>
            <Nav.Link href="/InicioSesion">Inicio Sesión</Nav.Link>
            <NavDropdown title="Información" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Astronomia">Astronomía</NavDropdown.Item>
              <NavDropdown.Item href="/ContaminacionLuminica">
                Contaminación Lumínica
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavMenu;
