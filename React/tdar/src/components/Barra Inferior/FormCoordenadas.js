import React, { useState } from "react";
import "./FormCoordenadas.css";
import { Button } from "react-bootstrap";

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
    <div className="formCoordenadas text-center bg-secondary p-4 ">
      <h3>Ingrese Coordenadas</h3>
      <form onSubmit={submitHandler}> 
        <div className="inCoord">
          <label>X</label>
          <input type="number" onChange={xHandler}/>
        </div>
        <div className="inCoord">
          <label>Y</label>
          <input type="number" onChange={yHandler}/>
        </div>
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};

export default FormCoordenadas;
