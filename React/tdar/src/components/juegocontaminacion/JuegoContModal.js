import React from "react";
import {
  Col,
  Row,
  Image,
  ButtonGroup,
  Button,
  Modal,
  Container,
} from "react-bootstrap";
import JuegoCont from "./JuegoCont";
import JuegoContCarrusel from "./JuegoContCarrusel";

const JuegoContModal = (props) => {
  return (
    <Modal
      fullscreen={true}
      className="text-white"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-primary">
        ¡Hay mucha luz! Es hora de ser EFICIENTES
      </Modal.Header>
      <Modal.Body className="bg-secondary">
        <JuegoContCarrusel />
      </Modal.Body>
      <Modal.Footer className="bg-secondary">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JuegoContModal;
