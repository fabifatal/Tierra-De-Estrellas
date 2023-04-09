import React from "react";
import BarraInferior from "../components/Barra Inferior/BarraInferior";
import { Container } from "react-bootstrap";
import "./JuegoPage.css";
import MapaNocturno from "../components/Barra Inferior/MapaUniverso";
import NavMenu from "../components/NavMenu";

const JuegoPage = () => {
  return (
    <Container>
      <NavMenu />
      <MapaNocturno />
      <BarraInferior />
    </Container>
  );
};

export default JuegoPage;
