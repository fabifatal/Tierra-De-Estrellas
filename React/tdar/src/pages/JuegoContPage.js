import React, { useState } from "react";
import NavBar from "../components/NavBar";
import {
  Col,
  Container,
  Row,
  Image,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import lumUp from "../assets/2x/Lum up@2x.png";
import lum45Up from "../assets/2x/Lum 45 up@2x.png";
import lum90 from "../assets/2x/Lum 90@2x.png";
import lum45Down from "../assets/2x/Lum 45 down@2x.png";
import lumDown from "../assets/2x/Lum down@2x.png";

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
      <NavBar></NavBar>
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
