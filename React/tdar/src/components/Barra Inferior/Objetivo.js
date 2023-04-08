import React from "react";
import "./Objetivo.css";
import objetivo from "../../imagenes/img-barrainferior/objetivo 1.png";
import { Container, Image } from "react-bootstrap";

const Objetivo = () => {
  return (
      <Container className="text-center bg-secondary contObjetivo">
      <h3>Objeto a Encontrar</h3>
      <img src={objetivo}/>
    </Container>
  );
};

export default Objetivo;
