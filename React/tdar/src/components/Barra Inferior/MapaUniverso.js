import React from "react";
import "./MapaUniverso.css";
import mapagrande from "../../imagenes/img-juego/mapa grid.png";
import ScrollContainer from "react-indiana-drag-scroll";

const MapaNocturno = (props) => {

  return (
    <div className="d-flex justify-content-center position-relative tamanioMapa">
      <ScrollContainer className="scroll-container border border-white border-2 rounded">
        <div>
          <div className={`contaminacionlum ${props.nivelActual > 2 && "contaminar"}`}></div>
          <img className={`imgMapa ${props.nivelActual > 2 && "desvanecer"}`} src={mapagrande} alt="mapa grande" />
        </div>
      </ScrollContainer>
    </div>
  );
};

export default MapaNocturno;
