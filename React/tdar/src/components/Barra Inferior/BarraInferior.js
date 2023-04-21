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
  const correcto = ["10,5", "10,8", "5,8", "6,6", "2,1", "2,4", "6,3", "5,4","1,2","6,7"];


  const addInput = (input) => {
    if (correcto[nivel] == input) {
      setModalShow(true);
      console.log(correcto.length)
      console.log(nivel)
      if (nivel >= 0 && nivel+1 < correcto.length)
      setNivel((prevNivel) => prevNivel + 1);
    }
  };

  return (
    <Row className="CardJuego contBarra bg-primary text-white gap-2">
      <Correcto
        nivelActual={nivel}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Col className="text-center CardJuego bg-secondary contNivel">
        <p>nivel</p>
        <h3>{nivel + 1}</h3>
      </Col>

      <Col className="CardJuego bg-secondary">
        <Objetivo nivelActual={nivel} />
      </Col>

      <Col className="CardJuego bg-secondary">
        <FormCoordenadas onRespuesta={addInput} />
      </Col>

      <Col xs={4} className="CardJuego bg-secondary">
        <Dialogo nivelActual={nivel} />
      </Col>

      <Col>
        <Personaje />
      </Col>
    </Row>
  );
};

export default BarraInferior;
