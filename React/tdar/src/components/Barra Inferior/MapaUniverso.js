import React from "react";
import "./MapaUniverso.css";
import mapa from "../../imagenes/img-juego/imagen-1-menos-80h.png";

const MapaNocturno = () => {
  return (
    <div className="contMapa">
      <div className="contContaminacion tamanio">
        <div className="contaminacionlum"></div>
      </div>
      <div className="contImgMapa tamanio">
        <img className="bg-img imgMapa" src={mapa} />
      </div>
    </div>
  );
};

export default MapaNocturno;
