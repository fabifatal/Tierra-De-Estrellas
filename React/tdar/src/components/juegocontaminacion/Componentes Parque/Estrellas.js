import React, { useEffect } from "react";
import ArbustosAtras from "./ArbustosAtras";
import MaskEstrellas from "./MaskEstrellas";
import EstrellasSVG from "./EstrellasSVG";

const Estrellas = (props) => {
  const maxX = 1200;
  const maxY = 600;
  const posX = props.posX/100;
  const posY = props.posY/100;
  return (
    <svg>
      <defs>
        <radialGradient
          id="gradiente-estrellas"
          cx="50%"
          cy="50%"
          r="100%"
          fr={`${props.cantLuz / 10}%`}
          fx="50%"
          fy="50%"
        >
          <stop offset="0" stop-color="black" stop-opacity="1" />
          <stop
            offset={`${props.cantLuz}%`}
            stop-color="black"
            stop-opacity="0"
          />
        </radialGradient>
        <mask id="mask-abierto">
          <rect
            x="0"
            y="0"
            width="1200"
            height="600"
            fill="white"
            opacity="1"
          />
          <circle
            cx={`${props.posX}%`}
            cy={`${props.posY}%`}
            r="100%"
            fill="url(#gradiente-estrellas)"
          />
          <MaskEstrellas personaje={props.maskpersonaje}/>
        </mask>

        <mask id="mask-cerrado">
          <rect
            x="0"
            y="0"
            width="1200"
            height="600"
            fill="white"
            opacity="1"
          />
          <polygon
            points={`${maxX * posX} ${maxY * posY}, ${maxX * (posX + (props.abrirLuz/100))} 
            ${(maxY*posY)+240}, ${maxX*(posX-(props.abrirLuz/100))} ${(maxY*posY)+240} `}
            fill="url(#lineal)"
          />
          <MaskEstrellas personaje={props.maskpersonaje}/>
        </mask>
      </defs>
      <svg
        mask={`${
          props.formaLuz ? "url(#mask-abierto)" : "url(#mask-cerrado)"
        }`}
      >
        <EstrellasSVG />
      </svg>
    </svg>
  );
};

export default Estrellas;
