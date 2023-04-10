import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Correcto.css";
import imgCorrecto1 from "../../imagenes/img-barrainferior/correcto_1.jpg";
import imgCorrecto2 from "../../imagenes/img-barrainferior/correcto_2.jpg";
import imgCorrecto3 from "../../imagenes/img-barrainferior/correcto_3.jpg";
import imgCorrecto4 from "../../imagenes/img-barrainferior/correcto_4.jpg";
import imgCorrecto5 from "../../imagenes/img-barrainferior/correcto_5.jpg";
import { Image } from "react-bootstrap";

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
    "Supernova 1987A",
    "Agujero Negro Supermasivo",
    "Kelu",
    "Centauri c",
    "SPT0418-47",
    "La forma del centro de la Vía Láctea"
  ];
  const descripcionCorrecto = [
    "Fue tomada con uno de los telescopios del VLT en el observatorio Paranal, en abril de 2004. Se trata de un planeta gigante, aproximadamente cinco veces mayor que Júpiter.",
    "Fue la primera visible a simple vista y su estudio confirmó la teoría de que los elementos como el hierro fueron creados en este tipo de explosiones.",
    "Gracias a la combinación de imágenes tomadas por varios telescopios Se logró obtener una imagen del agujero negro que se encuentra en la galaxia Messier 87.",
    "Kelu que en mapudungun significa 'rojo'. Estas enanas se originan como bolas de gas y no tienen la masa necesaria para producir luz por lo que son oscuras.",
    "En composición es más parecida a nuestro planeta, para detectarlo se utilizaron instrumentos ubicados en La Silla y Paranal.",
    "Utilizando el telescopio ALMA se descubrió a 12.000 millones de años luz la galaxia más distante de características similares a la Vía Láctea.",
    "En 2010, los estudios liderados por la astrónoma Manuela Zoccali, del Instituto de Astrofísica UC, mostraron que en realidad tiene forma de X."
  ];
  return (
    <Modal
      className="modCorrecto text-white"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-primary">
        <Modal.Title id="contained-modal-title-vcenter">¡Correcto!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-secondary">
        <Image src={imagenes[nivel]} />
        <h4>{tituloCorrecto[nivel]}</h4>
        <p>{descripcionCorrecto[nivel]}</p>
      </Modal.Body>
      <Modal.Footer className="bg-secondary">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Correcto;
