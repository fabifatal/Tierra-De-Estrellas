import React, { useState } from "react";
import "./FormCoordenadas.css";
import { Button, Container } from "react-bootstrap";

const FormCoordenadas = (props) => {
  const [respX, setRespX] = useState(1);
  const [respY, setRespY] = useState(0);

  const xHandler = (event) => {
    setRespX(event.target.value);
  };

  const yHandler = (event) => {
    setRespY(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const respuesta = [respX, respY];
    props.onRespuesta(respuesta);
  };

  return (
    <Container className="formCoordenadas text-center border-bottom border-3 border-white">
      <h5>Coordenadas</h5>
      <form onSubmit={submitHandler}>
        <div className="d-flex gap-10">
          <div className="inCoord w-100">
            <label>X</label>
            <input type="number" onChange={xHandler} />
          </div>
          <div className="inCoord w-100">
            <label>Y</label>
            <input type="number" onChange={yHandler} />
          </div>
        </div>
        <Button size="sm" type="submit">
          Enviar
        </Button>
      </form>
    </Container>
  );
};

export default FormCoordenadas;
