import React from "react";
import "./Objetivo.css";
import objetivo1 from "../../imagenes/img-barrainferior/objetivo 1.png";
import objetivo2 from "../../imagenes/img-barrainferior/objetivo 2.png";
import objetivo3 from "../../imagenes/img-barrainferior/objetivo 3.png";
import objetivo4 from "../../imagenes/img-barrainferior/objetivo 4.png";
import objetivo5 from "../../imagenes/img-barrainferior/objetivo 5.png";
import { Container, Image } from "react-bootstrap";

const Objetivo = (props) => {
  const nivel = props.nivelActual;
  const objetivo = [objetivo1, objetivo2, objetivo3, objetivo4, objetivo5];

  return (
    <Container className="contObjetivo gap-4">
      <p>Objeto a Encontrar</p>
      <img src={objetivo[nivel]} />
    </Container>
  );
};

export default Objetivo;
