import React, { useEffect, useState } from "react";
import {
  Container,
  Col,
  ButtonGroup,
  Button,
  Row,
  Image,
} from "react-bootstrap";

import "./JuegoCont.css";
import flechaizq from "../../imagenes/img-juego/circulo-de-flecha-izq.png";
import flechader from "../../imagenes/img-juego/circulo-de-flecha-der.png";

import lectora from "../../imagenes/img-juego/Lectora.png";

import lumUp from "../../imagenes/img-juego/Luminarias/Lum Up.png";
import lumDown from "../../imagenes/img-juego/Luminarias/Lum Down.png";
import lum90I from "../../imagenes/img-juego/Luminarias/Lum 90 Izq.png";
import lum90D from "../../imagenes/img-juego/Luminarias/Lum 90 Der.png";
import lum45UpI from "../../imagenes/img-juego/Luminarias/Lum 45 Up Izq.png";
import lum45UpD from "../../imagenes/img-juego/Luminarias/Lum 45 Up Der.png";
import lum45DownI from "../../imagenes/img-juego/Luminarias/Lum 45 Down Izq.png";
import lum45DownD from "../../imagenes/img-juego/Luminarias/Lum 45 Down Der.png";
import CalLumUp from "../../imagenes/img-juego/Luminarias/Calida Lum Up.png";
import CalLumDown from "../../imagenes/img-juego/Luminarias/Calida Lum Down.png";
import CalLum90I from "../../imagenes/img-juego/Luminarias/Calida Lum 90 Izq.png";
import CalLum90D from "../../imagenes/img-juego/Luminarias/Calida Lum 90 Der.png";
import CalLum45UpI from "../../imagenes/img-juego/Luminarias/Calida Lum 45 Up Izq.png";
import CalLum45UpD from "../../imagenes/img-juego/Luminarias/Calida Lum 45 Up Der.png";
import CalLum45DownI from "../../imagenes/img-juego/Luminarias/Calida Lum 45 Down Izq.png";
import CalLum45DownD from "../../imagenes/img-juego/Luminarias/Calida Lum 45 Down Der.png";
import FriaLumUp from "../../imagenes/img-juego/Luminarias/Fria Lum Up.png";
import FriaLumDown from "../../imagenes/img-juego/Luminarias/Fria Lum Down.png";
import FriaLum90I from "../../imagenes/img-juego/Luminarias/Fria Lum 90 Izq.png";
import FriaLum90D from "../../imagenes/img-juego/Luminarias/Fria Lum 90 Der.png";
import FriaLum45UpI from "../../imagenes/img-juego/Luminarias/Fria Lum 45 Up Izq.png";
import FriaLum45UpD from "../../imagenes/img-juego/Luminarias/Fria Lum 45 Up Der.png";
import FriaLum45DownI from "../../imagenes/img-juego/Luminarias/Fria Lum 45 Down Izq.png";
import FriaLum45DownD from "../../imagenes/img-juego/Luminarias/Fria Lum 45 Down Der.png";

const JuegoCont = () => {
  const [opcionLum, setOpcionLum] = useState(4);
  const [opacidad, setOpacidad] = useState(100);
  const [colorLuz, setColorLuz] = useState(false);
  const [orientacion, setOrientacion] = useState(0);
  const [posicion, setPosicion] = useState("center");
  const [nivelContaminacion, setNivelContaminacion] = useState(4);

  const luminariasSinLuzD = [lumDown, lum45DownD, lum90D, lum45UpD, lumUp];
  const luminariasSinLuzI = [lumDown, lum45DownI, lum90I, lum45UpI, lumUp];
  const luminariasSinLuz = [luminariasSinLuzD, luminariasSinLuzI];

  const luminariasCalidasD = [
    CalLumDown,
    CalLum45DownD,
    CalLum90D,
    CalLum45UpD,
    CalLumUp,
  ];
  const luminariasCalidasI = [
    CalLumDown,
    CalLum45DownI,
    CalLum90I,
    CalLum45UpI,
    CalLumUp,
  ];
  const luminariasCalidas = [luminariasCalidasD, luminariasCalidasI];

  const luminariasFriasD = [
    FriaLumDown,
    FriaLum45DownD,
    FriaLum90D,
    FriaLum45UpD,
    FriaLumUp,
  ];
  const luminariasFriasI = [
    FriaLumDown,
    FriaLum45DownI,
    FriaLum90I,
    FriaLum45UpI,
    FriaLumUp,
  ];
  const luminariasFrias = [luminariasFriasD, luminariasFriasI];

  let luminarias = [];

  if (colorLuz) {
    luminarias = luminariasCalidas[orientacion];
  } else {
    luminarias = luminariasFrias[orientacion];
  }

  const controlOpcion = (up) => {
    if (up && opcionLum >= 0 && opcionLum < 4) {
      setOpcionLum((prevOpcion) => prevOpcion + 1);
    }else if (!up && opcionLum > 0 && opcionLum <= 4){
      setOpcionLum((prevOpcion) => prevOpcion - 1)
    } 
  };

  const controlLuz = (up) => {
    if (up && opacidad >= 0 && opacidad < 100) {
      setOpacidad((prevOpacidad) => prevOpacidad + 25);
    }else if (!up && opacidad > 0 && opacidad <= 100){
      setOpacidad((prevOpacidad) => prevOpacidad - 25);
    }
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const posicionesLectora = ["center","end","start"]


  return (
    <Container className="bg-dark text-white text-center justify-content-center">
      <Col>
      {nivelContaminacion}
        <ButtonGroup>
          <Button onClick={() => controlOpcion(true)} variant="secondary">
            Arriba
          </Button>
          <Button onClick={() => controlOpcion(false)} variant="secondary">
            Abajo
          </Button>
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
          <Button onClick={() => setColorLuz(false)} variant="secondary">
            Fria
          </Button>
          <Button onClick={() => setColorLuz(true)} variant="secondary">
            Amarilla
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={() => setPosicion("start")} variant="secondary">
            Izquierda
          </Button>
          <Button onClick={() => setPosicion("center")} variant="secondary">
            Centro
          </Button>
          <Button onClick={() => setPosicion("end")} variant="secondary">
            Derecha
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            onClick={() => setOrientacion(1)}
            variant="secondary"
            className="p-0"
          >
            <Image src={flechaizq} className="botonOrientacion" />
          </Button>
          <Button
            onClick={() => setOrientacion(0)}
            variant="secondary"
            className="p-0"
          >
            <Image src={flechader} className="botonOrientacion" />
          </Button>
        </ButtonGroup>
      </Col>
      <Row>
        <Col className="contLumLect p-5">
          <Container className={`contLectora justify-content-${posicionesLectora[1]}`}>
            <Image src={lectora} fluid className="lectora" />
          </Container>
          <Container className={`contLuminaria justify-content-${posicion}`}>
            <Image
              src={luminarias[opcionLum]}
              fluid
              className={`luminaria opacity-${opacidad}`}
            />

            <Image
              src={luminariasSinLuz[orientacion][opcionLum]}
              fluid
              className="luminaria"
            />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default JuegoCont;
