import React, { useRef, useState } from "react";
import "./MenuJuego.css";
import {
  Button,
  Col,
  Container,
  Overlay,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import Dialogo from "./Dialogo";
import FormCoordenadas from "./FormCoordenadas";
import Objetivo from "./Objetivo";
import Personaje from "./Personaje";
import Correcto from "./Correcto";

const MenuJuego = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const correcto = [
    "10,5",
    "10,8",
    "5,8",
    "6,6",
    "2,1",
    "2,4",
    "6,3",
    "5,4",
    "1,2",
    "6,7",
  ];
  const nivel = props.nivelActual;
  const addInput = (input) => {
    if (correcto[nivel] == input) {
      setModalShow(true);
      if (nivel >= 0 && nivel + 1 < correcto.length)
        props.setNivel((prevNivel) => prevNivel + 1);
    }
  };

  return (
    <Container className="fondoMenu shadow-lg border border-white border-4 rounded text-white p-2 gap-2">
      <Correcto
        nivelActual={nivel}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Col className="d-flex align-items-center justify-content-center border-bottom border-3 border-white">
        <h3>Nivel {nivel + 1}</h3>
      </Col>

      <Col>
        <Objetivo nivelActual={nivel} />
      </Col>

      <Col>
        <FormCoordenadas onRespuesta={addInput} />
      </Col>

      <Col className="">
        <Personaje nivelActual={nivel} />
      </Col>
    </Container>
  );
};

export default MenuJuego;
