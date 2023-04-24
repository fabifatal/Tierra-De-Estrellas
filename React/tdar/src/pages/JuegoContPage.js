import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JuegoCont from "../components/juegocontaminacion/JuegoCont";
import "./JuegoContPage.css";
import NavMenu from "../components/NavMenu";
import JuegoContMenu from "../components/juegocontaminacion/JuegoContMenu";
import Parque from "../components/juegocontaminacion/Parque";

const JuegoContPage = () => {
  const maxLuz = 100;
  const [posX, setPosX] = useState(50);
  const [posY, setPosY] = useState(60);
  const [cantLuz, setCantLuz] = useState(maxLuz);
  const [colorLuz, setColorLuz] = useState(true);
  const [formaLuz, setFormaLuz] = useState(true);
  const [abrirLuz, setAbrirLuz] = useState(15);

  return (
    <div className="bg-dark vh-100" data-bs-theme="dark">
      <NavMenu />
      <Container fluid className="mt-4">
        <Row>
          <Col sm={2}>
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
          <Col sm={10}>
            <Parque
              posX={posX}
              posY={posY}
              cantLuz={cantLuz}
              colorLuz={colorLuz}
              formaLuz={formaLuz}
              abrirLuz={abrirLuz}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JuegoContPage;
