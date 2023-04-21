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
  const [colorLuz, setColorLuz] = useState(true);
  const [formaLuz, setFormaLuz] = useState(true);
  const [abrirLuz, setAbrirLuz] = useState(15)

  return (
    <Container className="bg-dark text-white text-center justify-content-center">
      <Row>
        <Col className="position-relative">
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
      <Col>
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
    </Container>
  );
};

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
// const posicionesLectora = [
//   "center",
//   "end",
//   "start",
//   "center rh",
//   "end rh",
//   "start rh",
// ];

// useEffect(() => {
//   setPosicionLectora(posicionesLectora[getRandomInt(5)]);
// }, []);

/* <Container className={`contLuminaria justify-content-${posicion}`}>

</Container> */

/* <div className={`oscuridad opacity-${opacidad}`}></div> */

/* <Container
  className={`contLectora justify-content-${posicionLectora}`}
>
  <Image src={lectora} fluid className="lectora" />
</Container> */

/* <Image
src={luminarias[opcionLum]}
fluid
className={`luminaria opacity-${opacidad}`}
/>

<Image
src={luminariasSinLuz[orientacion][opcionLum]}
fluid
className="luminaria"
/> */

// const [posicionLectora, setPosicionLectora] = useState("");
// const [nivelContaminacion, setNivelContaminacion] = useState(4);

// useEffect(() => {
//   if (posicionLectora == posicion) {
//     setNivelContaminacion((prev) => prev - 1);
//   }
//   if (opcionLum === 0 || opcionLum === 1) {
//     setNivelContaminacion((prev) => prev - 1);
//   }
//   if (colorLuz) {
//     setNivelContaminacion((prev) => prev - 1);
//   }
//   if (opacidad === 25) {
//     setNivelContaminacion((prev) => prev - 1);
//   }
// }, [posicion, opcionLum]);

export default JuegoCont;
