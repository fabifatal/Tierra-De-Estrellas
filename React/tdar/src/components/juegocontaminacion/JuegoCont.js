import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import "./JuegoCont.css";

import JuegoContMenu from "./JuegoContMenu";
import Parque from "./Parque";

const JuegoCont = () => {
  const maxLuz = 100;
  const [posX, setPosX] = useState(50);
  const [posY, setPosY] = useState(60);
  const [cantLuz, setCantLuz] = useState(maxLuz);
  const [colorLuz, setColorLuz] = useState(false);
  const [formaLuz, setFormaLuz] = useState(true);
  const [abrirLuz, setAbrirLuz] = useState(15)

  return (
    <Container fluid className="d-flex bg-dark text-white text-center justify-content-center">
      <Row>
      <Col sm={4}>
        <JuegoContMenu
          cantLuz={cantLuz}
          setCantLuz={setCantLuz}
          setColorLuz={setColorLuz}
          posX={posX}
          posY={posY}
          setPosX={setPosX}
          setPosY={setPosY}
          maxLuz={maxLuz}
          setFormaLuz={setFormaLuz}
          abrirLuz={abrirLuz}
          setAbrirLuz={setAbrirLuz}
        />
      </Col>
        <Col className="position-relative">

        </Col>
      </Row>
    </Container>
  );
};

export default JuegoCont;
