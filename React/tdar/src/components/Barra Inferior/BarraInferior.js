import React, { useState } from "react";
import "./BarraInferior.css";
import { Col, Row } from "react-bootstrap";
import Dialogo from "./Dialogo";
import FormCoordenadas from "./FormCoordenadas";
import Objetivo from "./Objetivo";
import Personaje from "./Personaje";
import Correcto from "./Correcto";

const BarraInferior = () => {
  const [modalShow, setModalShow] = useState(false);
  const [nivel, setNivel] = useState(0);
  const correcto = ["4,3", "6,8", "1,9", "3,5", "7,2"];

  const addInput = (input) => {
    if (correcto[nivel] == input) {
      setModalShow(true);
      setNivel((prevNivel) => prevNivel + 1);
    }
  };

  return (
    <Row className="CardJuego contBarra bg-primary text-white ">
      <Correcto
        nivelActual={nivel}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Col>
        <Objetivo nivelActual={nivel} />
      </Col>

      <Col className="contNivelYForm">
        <h3 className="contNivel CardJuego bg-secondary">Nivel {nivel + 1}</h3>
      </Col>

      <Col>
        <FormCoordenadas onRespuesta={addInput} />
      </Col>

      <Col xs={4}>
        <Dialogo nivelActual={nivel} />
      </Col>

      <Col>
        <Personaje />
      </Col>
    </Row>
  );
};

export default BarraInferior;
