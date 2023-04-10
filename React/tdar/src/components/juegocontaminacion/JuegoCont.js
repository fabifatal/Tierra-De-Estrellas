import React, { useState } from "react";
import {
  Container,
  Col,
  ButtonGroup,
  Button,
  Row,
  Image,
} from "react-bootstrap";

import "./JuegoCont.css";

import lumUp from "../../imagenes/img-juego/2x/Lum Up.png";
import lum45Up from "../../imagenes/img-juego/2x/Lum 45 Up.png";
import lum90 from "../../imagenes/img-juego/2x/Lum 90.png";
import lum45Down from "../../imagenes/img-juego/2x/Lum 45 Down.png";
import lumDown from "../../imagenes/img-juego/2x/Lum Down.png";

import lumFriaUp from "../../imagenes/img-juego/2x/Fria_Lum Up.png";
import lumFria45Up from "../../imagenes/img-juego/2x/Fria_Lum 45 Up.png";
import lumFria90 from "../../imagenes/img-juego/2x/Fria_Lum 90.png";
import lumFria45Down from "../../imagenes/img-juego/2x/Fria_Lum 45 Down.png";
import lumFriaDown from "../../imagenes/img-juego/2x/Fria_Lum Down.png";

import lumUpSinLuz from "../../imagenes/img-juego/2x/SinLuz_Lum Up.png";
import lum45UpSinLuz from "../../imagenes/img-juego/2x/SinLuz_Lum 45 Up.png";
import lum90SinLuz from "../../imagenes/img-juego/2x/SinLuz_Lum 90.png";
import lum45DownSinLuz from "../../imagenes/img-juego/2x/SinLuz_Lum 45 Down.png";
import lumDownSinLuz from "../../imagenes/img-juego/2x/SinLuz_Lum Down.png";

const JuegoCont = () => {
  const [opcionLum, setOpcionLum] = useState(2);
  const [opacidad, setOpacidad] = useState(100);
  const [colorLuz, setColorLuz] = useState(false);

  const luminariasCalidas = [lumDown, lum45Down, lum90, lum45Up, lumUp];
  const luminariasSinLuz = [
    lumDownSinLuz,
    lum45DownSinLuz,
    lum90SinLuz,
    lum45UpSinLuz,
    lumUpSinLuz,
  ];
  const luminariasFrias = [
    lumFriaDown,
    lumFria45Down,
    lumFria90,
    lumFria45Up,
    lumFriaUp,
  ];

  let luminarias = [];

  if (colorLuz) {
    luminarias = luminariasCalidas;
  } else {
    luminarias = luminariasFrias;
  }

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

  const luzFria = () => {
    setColorLuz(false);
  };

  const luzCalida = () => {
    setColorLuz(true);
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
        <ButtonGroup>
          <Button onClick={luzFria} variant="secondary">
            Fria
          </Button>
          <Button onClick={luzCalida} variant="secondary">
            Amarilla
          </Button>
        </ButtonGroup>
      </Col>
      <Row>
        <Col className="contLuminaria p-5">
          <Container className="contLuminaria">
            <Image
              src={luminarias[opcionLum]}
              fluid
              className={`luminaria opacity-${opacidad}`}
            />

            <Image
              src={luminariasSinLuz[opcionLum]}
              fluid
              className="luminariaSinLuz"
            />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default JuegoCont;
