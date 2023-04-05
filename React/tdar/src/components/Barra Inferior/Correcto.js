import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Correcto.css";
import imgCorrecto1 from "../../imagenes/img-barrainferior/correcto_1.jpg";
import imgCorrecto2 from "../../imagenes/img-barrainferior/correcto_2.jpg";
import imgCorrecto3 from "../../imagenes/img-barrainferior/correcto_3.jpg";
import imgCorrecto4 from "../../imagenes/img-barrainferior/correcto_4.jpg";
import imgCorrecto5 from "../../imagenes/img-barrainferior/correcto_5.jpg";

const Correcto = (props) => {
  const nivel = props.nivelActual - 1;
  const imagenes = [
    imgCorrecto1,
    imgCorrecto2,
    imgCorrecto3,
    imgCorrecto4,
    imgCorrecto5,
  ];
  const tituloCorrecto = [
    "2M1207b",
    "Proyecto Calán-Tololo",
    "Supernova 1987A",
    " Agujero Negro Supermasivo",
    "Kelu",
  ];
  const descripcionCorrecto = [
    "Fue tomada con uno de los telescopios del VLT en el observatorio Paranal, en abril de 2004. Se trata de un planeta gigante, aproximadamente cinco veces mayor que Júpiter.",
  ];
  return (
    <Modal
      className="modCorrecto text-white"
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-primary">
        <Modal.Title id="contained-modal-title-vcenter">¡Correcto!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-secondary">
        <img src={imagenes[nivel]} />
        <h4>{tituloCorrecto[nivel]}</h4>
        <p>{descripcionCorrecto}</p>
      </Modal.Body>
      <Modal.Footer className="bg-secondary">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Correcto;
