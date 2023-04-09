import React from "react";
import "./Dialogo.css";
import { Container } from "react-bootstrap";

const Dialogo = (props) => {
  const nivel = props.nivelActual;
  const dialogos = [
    "Hace años que sabemos de la existencia teórica de exoplanetas (aquellos fuera de nuestro sistema solar), pero ¿serás capáz de capturar la imágen de uno?",
    "¿Sabías que en el año 1987 se descubrió desde el observatorio Las Campanas, una  supernova? ¡Anímate a buscarla!",
    "En 2019, se tomó la primera fotografía de un agujero negro supermasivo. ¿Podrás replicar este logro?",
    "En 1987 la astrónoma María Teresa Ruiz, descubrió la Enana café solitaria bautizada como Kelu. Si ella pudo ¡Tú también!",
    "En  2020 se descubrió un  exoplaneta ubicado a 4,2 años luz de la Tierra, y que tiene 6 veces la masa de la Tierra."
  ];

  return (
    <Container className="contDialogo">
      <p>{dialogos[nivel]}</p>
    </Container>
  );
};

export default Dialogo;
