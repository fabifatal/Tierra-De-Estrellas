import React from "react";
import "./MapaUniverso.css";
import mapa from "../../imagenes/img-juego/mapa1.jpg";

const MapaNocturno = () => {
  return (
    <div className="contMapa">
      <div className="contContaminacion tamanioMapa">
        <div className="contaminacionlum"></div>
      </div>
      <div className="contImgMapa tamanioMapa">
        <img className="bg-img imgMapa" src={mapa} />
      </div>
    </div>
  );
};

export default MapaNocturno;
