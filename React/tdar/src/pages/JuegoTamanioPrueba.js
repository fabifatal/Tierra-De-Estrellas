import React from "react";
import { Container } from "react-bootstrap";
import NavMenu from "../components/NavMenu";
import MapaNocturno from "../components/Barra Inferior/MapaUniverso";
import BarraInferior from "../components/Barra Inferior/BarraInferior";

const JuegoTamanioPrueba = () => {
  return <Container bg="primary">
    <NavMenu/>
    <MapaNocturno/>
    <BarraInferior/>
  </Container>;
};

export default JuegoTamanioPrueba;
