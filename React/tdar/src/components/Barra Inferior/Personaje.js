import React, { useRef, useState } from "react";
import "./Personaje.css";
import npc from "../../imagenes/img-juego/4x/Profe Maza Vector.png";
import { Button, Container, Overlay } from "react-bootstrap";
import Dialogo from "./Dialogo";

const Personaje = (props) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const nivelActual = props.nivelActual;

  return (
    <Container className="d-flex align-items-center justify-content-center gap-4 pt-2">
      <div className="contPersonaje ">
        <img src={npc} alt="profeMaza" />
      </div>
      <Button variant="primary" ref={target} onClick={() => setShow(!show)}>
        ...
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: "absolute",
              backgroundColor: "rgba(0, 0, 0, 0.70)",
              padding: "2px 10px",
              color: "white",
              width: "60%",
              borderRadius: 3,
              ...props.style,
            }}
          >
            <Dialogo nivelActual={nivelActual} />
          </div>
        )}
      </Overlay>
    </Container>
  );
};

export default Personaje;
