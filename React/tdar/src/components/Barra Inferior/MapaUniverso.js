import React from "react";
import "./MapaUniverso.css";
import mapagrande from "../../imagenes/img-juego/mapa grid.png";
import ScrollContainer from "react-indiana-drag-scroll";

const MapaNocturno = () => {

  return (
    <div className="contMapa tamanioMapa">
      <ScrollContainer className="scroll-container">
        <div>
          {/* <div className="contaminacionlum"></div> */}
          <img className="imgMapa" src={mapagrande} alt="mapa grande" />
        </div>
      </ScrollContainer>
    </div>
  );
};

export default MapaNocturno;
