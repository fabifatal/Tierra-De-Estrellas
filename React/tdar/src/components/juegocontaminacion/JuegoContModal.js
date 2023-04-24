import React from "react";
import { Button, Modal } from "react-bootstrap";
import JuegoCont from "./JuegoCont";
import JuegoContCarrusel from "./JuegoContCarrusel";

const JuegoContModal = (props) => {
  return (
    <Modal
      className="text-white"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-primary text-center">
        ¡Ya no se ve nada!
      </Modal.Header>
      <Modal.Body className="bg-secondary">
        <p>
          Es hora de aprender sobre contaminación lumínica para poder seguir con
          la investigación astronómica.
        </p>
      </Modal.Body>
      <Modal.Footer className="bg-secondary">
        <Button onClick={props.onHide}>Cerrar</Button>
        <Button href="/JuegoCont">Vamos!</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JuegoContModal;
