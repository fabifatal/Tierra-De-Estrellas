import React from "react";
import "./Objetivo.css";
import objetivo from "../../imagenes/img-barrainferior/objetivo 1.png";
import { Container, Image } from "react-bootstrap";

const Objetivo = () => {
  return (
      <Container className="contObjetivo gap-4">
      <p>Objeto a Encontrar</p>
      <img src={objetivo}/>
    </Container>
  );
};

export default Objetivo;
