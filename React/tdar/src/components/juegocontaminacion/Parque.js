import React, { useState } from "react";
import "./Parque.css";
import Caminos from "./Componentes Parque/Caminos";
import ArbustosAtras from "./Componentes Parque/ArbustosAtras";
import Bancas from "./Componentes Parque/Bancas";
import ArbustosDelante from "./Componentes Parque/ArbustosDelante";
import Arboles from "./Componentes Parque/Arboles";
import HierbaGruesa from "./Componentes Parque/HierbaGruesa";
import Lago from "./Componentes Parque/Lago";
import Hierbas from "./Componentes Parque/Hierbas";
import LineasPlantas from "./Componentes Parque/LineasPlantas";
import Luz from "./Componentes Parque/Luz";
import Luminaria from "./Componentes Parque/Luminaria";
import Estrellas from "./Componentes Parque/Estrellas";
import Oscuridad from "./Componentes Parque/Oscuridad";
import PersonajeParque from "./Componentes Parque/PersonajeParque";
import CorrectoCont from "./Componentes Parque/CorrectoCont";

const Parque = (props) => {
  const [correcto, setCorrecto] = useState(false);
  const [nivel, setNivel] = useState(0)
  const posX = props.posX;
  const posY = props.posY;
  const cantLuz = props.cantLuz;
  const colorLuz = props.colorLuz;
  const formaLuz = props.formaLuz;
  const abrirLuz = props.abrirLuz;
  const personaje = nivel;

  return (
    <div className="text-white">
          {/* {`PosX:${posX} PosY:${posY} cantLuz:${cantLuz} colorLuz:${colorLuz} formaLuz:${formaLuz} personaje:${personaje}`} */}
            <CorrectoCont 
            show={correcto}
            onHide={() => setCorrecto(false)}
            setCorrecto = {setCorrecto}
            formaLuz = {formaLuz}
            posX={posX}
            posY={posY}
            cantLuz={cantLuz}
            colorLuz={colorLuz}
            personaje={personaje}
            nivel={nivel}
            setNivel={setNivel}
            />
      <svg
        viewBox="0 0 1200 600"
        className="contenedor-parque"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          id="Cielo"
          class="cls-18"
          x="0"
          y="2.51"
          width="1200"
          height="600"
        />
        <ArbustosAtras />
        <rect
          id="Pasto"
          class="cls-13"
          y="279.72"
          width="1200"
          height="322.79"
        />
        <Caminos />
        <Bancas />
        <ArbustosDelante />
        <Arboles />
        <HierbaGruesa />
        <Lago />
        <Hierbas />
        <LineasPlantas />
        <Luminaria posX={posX} posY={posY} />
        <PersonajeParque personaje={personaje}/>
        <Luz
          posX={posX}
          posY={posY}
          cantLuz={cantLuz}
          colorLuz={colorLuz}
          formaLuz={formaLuz}
          abrirLuz={abrirLuz}
        />
        <Oscuridad
          cantLuz={cantLuz}
          posX={posX}
          posY={posY}
          formaLuz={formaLuz}
          abrirLuz={abrirLuz}
        />
        <Estrellas
          posX={posX}
          posY={posY}
          cantLuz={cantLuz}
          formaLuz={formaLuz}
          abrirLuz={abrirLuz}
          maskpersonaje={personaje}
        />
      </svg>

    </div>
  );
};

export default Parque;
