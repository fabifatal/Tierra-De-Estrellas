import React from "react";
import { Button, Image, Modal } from "react-bootstrap";
import JuegoContCarrusel from "../JuegoContCarrusel";

const CorrectoCont = (props) => {
  let nivel = props.nivel;
  const formaLuz = props.formaLuz;
  const posX = props.posX;
  const posY = props.posY;
  const colorLuz = props.colorLuz;
  const cantLuz = props.cantLuz;
  const personaje = props.personaje;

  const input = [
    {
      posX: posX,
      posY: posY,
      cantLuz: cantLuz,
      colorLuz: colorLuz,
      formaLuz: formaLuz,
      personaje: personaje,
    },
  ];
  const correcto = [
    {
      posX: 22,
      posY: 35,
      cantLuz: 70,
      colorLuz: true,
      formaLuz: false,
      personaje: 0,
    },
    {
      posX: 70,
      posY: 65,
      cantLuz: 60,
      colorLuz: true,
      formaLuz: false,
      personaje: 1,
    },
    {
      posX: 88,
      posY: 55,
      cantLuz: 90,
      colorLuz: true,
      formaLuz: false,
      personaje: 2,
    },
    {
      posX: 36,
      posY: 55,
      cantLuz: 80,
      colorLuz: true,
      formaLuz: false,
      personaje: 3,
    },
    {
      posX: 36,
      posY: 35,
      cantLuz: 60,
      colorLuz: true,
      formaLuz: false,
      personaje: 4,
    },
    {
      posX: 28,
      posY: 55,
      cantLuz: 70,
      colorLuz: true,
      formaLuz: false,
      personaje: 5,
    },
    {
      posX: 58,
      posY: 60,
      cantLuz: 70,
      colorLuz: true,
      formaLuz: false,
      personaje: 6,
    },
    {
      posX: 16,
      posY: 60,
      cantLuz: 70,
      colorLuz: true,
      formaLuz: false,
      personaje: 7,
    },
    {
      posX: 76,
      posY: 45,
      cantLuz: 60,
      colorLuz: true,
      formaLuz: false,
      personaje: 8,
    },
  ];

  if (JSON.stringify(input[0]) === JSON.stringify(correcto[nivel])) {
    props.setCorrecto(true);
    if (nivel >= 0 && nivel < 8) {
      props.setNivel((prev) => prev + 1);
    }
  }

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        className="h-40 text-center"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ¡Correcto!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <JuegoContCarrusel />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Siguiente</Button>
          <Button
            href="https://luminica.mma.gob.cl"
            target="_blank"
          >
            Más Info
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CorrectoCont;
