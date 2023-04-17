import React, { useState } from "react";
import BarraInferior from "../components/Barra Inferior/BarraInferior";
import { Container } from "react-bootstrap";
import "./JuegoPage.css";
import MapaNocturno from "../components/Barra Inferior/MapaUniverso";
import NavMenu from "../components/NavMenu";
import JuegoContModal from "../components/juegocontaminacion/JuegoContModal";

const JuegoPage = () => {
  const [modalShow, setModalShow] = useState(false);

  // setTimeout(() => {
  //   setModalShow(true)
  // }, 120000);

  return (
    <Container>
      <JuegoContModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <NavMenu />
      <BarraInferior />
      <MapaNocturno />
    </Container>
  );
};

export default JuegoPage;
