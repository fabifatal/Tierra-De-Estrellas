import React, { useState } from "react";
import {
  Container,
  Col,
  ButtonGroup,
  Button,
  Row,
  Image,
} from "react-bootstrap";
import lumUp from "../../imagenes/img-juego/2x/Lum Up.png";
import lum45Up from "../../imagenes/img-juego/2x/Lum 45 Up.png";
import lum90 from "../../imagenes/img-juego/2x/Lum 90.png";
import lum45Down from "../../imagenes/img-juego/2x/Lum 45 Down.png";
import lumDown from "../../imagenes/img-juego/2x/Lum Down.png";

const JuegoCont = () => {
  const [opcionLum, setOpcionLum] = useState(2);
  const [opacidad, setOpacidad] = useState(100);

  const luminarias = [lumDown, lum45Down, lum90, lum45Up, lumUp];

  const aumOpcion = () => {
    if (opcionLum >= 0 && opcionLum < 4) {
      setOpcionLum((prevOpcion) => prevOpcion + 1);
    }
  };

  const dimOpcion = () => {
    if (opcionLum > 0 && opcionLum <= 4) {
      setOpcionLum((prevOpcion) => prevOpcion - 1);
    }
  };

  const aumLuz = () => {
    if (opacidad >= 0 && opacidad < 100) {
      setOpacidad((prevOpacidad) => prevOpacidad + 25);
    }
  };

  const dimLuz = () => {
    if (opacidad > 0 && opacidad <= 100) {
      setOpacidad((prevOpacidad) => prevOpacidad - 25);
    }
  };

  return (
    <Container className="bg-primary text-white text-center justify-content-center">
      <Col>
        <ButtonGroup>
          <Button onClick={aumOpcion} variant="secondary">
            Arriba
          </Button>
          <Button onClick={dimOpcion} variant="secondary">
            Abajo
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={aumLuz} variant="secondary">
            + Luz
          </Button>
          <Button onClick={dimLuz} variant="secondary">
            - Luz
          </Button>
        </ButtonGroup>
      </Col>
      <Row>
        <Col className="contLuminaria p-5">
          <Image
            src={luminarias[opcionLum]}
            fluid
            className={`opacity-${opacidad}`}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default JuegoCont;
