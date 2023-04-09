import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Image,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import lumUp from "../imagenes/img-juego/2x/Lum Up.png";
import lum45Up from "../imagenes/img-juego/2x/Lum 45 Up.png";
import lum90 from "../imagenes/img-juego/2x/Lum 90.png";
import lum45Down from "../imagenes/img-juego/2x/Lum 45 Down.png";
import lumDown from "../imagenes/img-juego/2x/Lum Down.png";
import NavMenu from "../components/NavMenu";

const JuegoContPage = () => {
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
    <Container>
      <NavMenu/>
      <Row className="bg-primary text-white">
        <Col xs={6} md={3} className="contLuminaria">
          <Image
            src={luminarias[opcionLum]}
            fluid
            className={`opacity-${opacidad}`}
          />
          <p>{opcionLum}</p>
        </Col>
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
              Más Luz
            </Button>
            <Button onClick={dimLuz} variant="secondary">
              Menos Luz
            </Button>
            <p>{opacidad}</p>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default JuegoContPage;
