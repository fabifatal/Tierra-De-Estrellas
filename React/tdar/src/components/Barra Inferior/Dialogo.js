import React from "react";
import "./Dialogo.css";
import { Container } from "react-bootstrap";

const Dialogo = (props) => {
  const nivel = props.nivelActual;
  const dialogos = [
    "Hace años que sabemos de la existencia teórica de exoplanetas (aquellos fuera de nuestro sistema solar), pero ¿serás capáz de capturar la imágen de uno?",
    "dialogo 2","dialogo 3","dialogo 4","dialogo 5"
  ];

  return (
    <Container className="bg-secondary p-4 contDialogo">
      <p>{dialogos[nivel]}</p>
    </Container>
  );
};

export default Dialogo;
