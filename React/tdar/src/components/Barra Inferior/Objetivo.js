import React from "react";
import "./Objetivo.css";
import objetivo1 from "../../imagenes/img-barrainferior/objetivo 1.png";
import objetivo2 from "../../imagenes/img-barrainferior/objetivo 2.png";
import objetivo3 from "../../imagenes/img-barrainferior/objetivo 3.png";
import objetivo4 from "../../imagenes/img-barrainferior/objetivo 4.png";
import objetivo5 from "../../imagenes/img-barrainferior/objetivo 5.png";
import objetivo6 from "../../imagenes/img-barrainferior/objetivo 6.png";
import objetivo7 from "../../imagenes/img-barrainferior/objetivo 7.png";
import objetivo8 from "../../imagenes/img-barrainferior/objetivo 8.png";
import objetivo9 from "../../imagenes/img-barrainferior/objetivo 9.png";
import objetivo10 from "../../imagenes/img-barrainferior/objetivo 10.png";
import { Container, Image } from "react-bootstrap";

const Objetivo = (props) => {
  const nivel = props.nivelActual;
  const objetivo = [objetivo1, objetivo2, objetivo3, objetivo4, objetivo5, objetivo6, objetivo7, objetivo8, objetivo9, objetivo10];

  return (
    <Container className="border-bottom border-3 border-white pb-2 pt-2 text-center">
      <h5>Objetivo</h5>
      <Image fluid rounded src={objetivo[nivel]} alt="objetivo"/>
    </Container>
  );
};


// className="d-flex align-items-center  gap-4"
export default Objetivo;
