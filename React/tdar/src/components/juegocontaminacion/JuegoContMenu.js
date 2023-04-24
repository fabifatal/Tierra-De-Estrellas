import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const JuegoContMenu = (props) => {
  // const controlLuz = (up) => {
  //   const modLuz = 4;
  //   const maxLuz = props.maxLuz;
  //   if (up && props.cantLuz >= 0 && props.cantLuz < maxLuz) {
  //     props.setCantLuz((prevCantLuz) => prevCantLuz + modLuz);
  //   } else if (!up && props.cantLuz > 0 && props.cantLuz <= maxLuz) {
  //     props.setCantLuz((prevCantLuz) => prevCantLuz - modLuz);
  //   }
  // };

  const controlParametroBinario = (
    condicion,
    mod,
    min,
    max,
    estado,
    setEstado
  ) => {
    if (condicion && estado >= min && estado < max) {
      setEstado((prev) => prev + mod);
    } else if (!condicion && estado > min && estado <= max) {
      setEstado((prev) => prev - mod);
    }
  };

  const controlLuz = (aumLuz) => {
    controlParametroBinario(
      aumLuz,
      10,
      0,
      props.maxLuz,
      props.cantLuz,
      props.setCantLuz
    );
  };

  const controlPosX = (aumX) => {
    controlParametroBinario(aumX, 2, 0, 100, props.posX, props.setPosX);
  };

  const controlPosY = (aumY) => {
    controlParametroBinario(aumY, 5, 35, 75, props.posY, props.setPosY);
  };

  const controlFormaLuz = (abierto) => {
    if (abierto) {
      props.setFormaLuz(true);
    } else if (!abierto) {
      props.setFormaLuz(false);
    }
  };

  const controlAbrirLuz = (abrir) => {
    controlParametroBinario(
      abrir,
      5,
      15,
      50,
      props.abrirLuz,
      props.setAbrirLuz
    );
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3 h-100">
      <ButtonGroup>
        <Button onClick={() => controlFormaLuz(true)} variant="secondary">
          Abierto
        </Button>
        <Button onClick={() => controlFormaLuz(false)} variant="secondary">
          Cerrado
        </Button>
        {/* <Button onClick={() => controlAbrirLuz(true)} variant="secondary">
          + Abierto
        </Button>
        <Button onClick={() => controlAbrirLuz(false)} variant="secondary">
          - Cerrado
        </Button> */}
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => controlLuz(true)} variant="secondary">
          + Luz
        </Button>
        <Button onClick={() => controlLuz(false)} variant="secondary">
          - Luz
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => props.setColorLuz(false)} variant="secondary">
          Fria
        </Button>
        <Button onClick={() => props.setColorLuz(true)} variant="secondary">
          Amarilla
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => controlPosY(false)} variant="secondary">
          Arriba
        </Button>
        <Button onClick={() => controlPosY(true)} variant="secondary">
          Abajo
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => controlPosX(false)} variant="secondary">
          Izquierda
        </Button>
        <Button onClick={() => controlPosX(true)} variant="secondary">
          Derecha
        </Button>
      </ButtonGroup>
      {/* <p>Nivel Contaminación: {nivelContaminacion * 25}</p> */}
    </div>
  );
};

export default JuegoContMenu;
