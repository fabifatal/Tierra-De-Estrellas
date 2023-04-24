import React, { useState } from "react";
import MenuJuego from "../components/Barra Inferior/MenuJuego";
import { Col, Container, Row } from "react-bootstrap";
import "./JuegoPage.css";
import MapaNocturno from "../components/Barra Inferior/MapaUniverso";
import NavMenu from "../components/NavMenu";
import JuegoContModal from "../components/juegocontaminacion/JuegoContModal";

const JuegoPage = () => {
  const [nivel, setNivel] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  if (nivel > 2) {
    setTimeout(() => {
      setModalShow(true);
    }, 30000);
  }

  return (
    <div className="fondoBody vh-100" data-bs-theme="dark">
      <JuegoContModal show={modalShow} onHide={() => setModalShow(false)} />
      <NavMenu />
      <Container fluid className="mt-4">
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={2}>
            <MenuJuego nivelActual={nivel} setNivel={setNivel} />
          </Col>
          <Col sm={10}>
            <MapaNocturno nivelActual={nivel} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JuegoPage;
