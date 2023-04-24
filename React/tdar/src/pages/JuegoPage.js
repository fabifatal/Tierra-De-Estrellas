import React, { useState } from "react";
import MenuJuego from "../components/Barra Inferior/MenuJuego";
import { Col, Container, Row } from "react-bootstrap";
import "./JuegoPage.css";
import MapaNocturno from "../components/Barra Inferior/MapaUniverso";
import NavMenu from "../components/NavMenu";
import JuegoContModal from "../components/juegocontaminacion/JuegoContModal";

const JuegoPage = () => {
  const [nivel, setNivel] = useState(0);
  const [modalShow, setModalShow] = useState(true)

  setTimeout(() => {
    setModalShow(true)
  }, 120000);

  return (
    <div className="bg-body vh-100" data-bs-theme="dark">
      <JuegoContModal 
              show={modalShow}
              onHide={() => setModalShow(false)}
      />
      <NavMenu />
      <Container fluid className="mt-4">
        <Row>
          <Col sm={2}>
            <MenuJuego
              nivelActual={nivel}
              setNivel={setNivel}
            />
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
