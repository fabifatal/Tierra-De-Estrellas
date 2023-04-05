import React from "react";
import BarraInferior from "../components/Barra Inferior/BarraInferior";
import { Container } from "react-bootstrap";
import "./JuegoPage.css";
import MapaNocturno from "../components/Barra Inferior/MapaUniverso";
import NavMenu from "../components/NavMenu";

const JuegoPage = () => {
  return (
    <div className="bg-dark">
      <Container>
        <NavMenu />
        <div className="contJuego">
          <MapaNocturno />
          <BarraInferior />
        </div>
      </Container>
    </div>
  );
};

export default JuegoPage;
