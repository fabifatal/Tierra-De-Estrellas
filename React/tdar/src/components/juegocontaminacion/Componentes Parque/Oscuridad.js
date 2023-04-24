import React from "react";
import MaskLuz from "./MaskLuz";

const Oscuridad = (props) => {
  const maxX = 1200;
  const maxY = 600;
  const posX = props.posX / 100;
  const posY = props.posY / 100;

  // let formaLuz = "url(#gradient-mask)";
  // if (props.formaLuz){
  //   formaLuz = "url(#gradient-mask)"
  // }else if (!props.formaLuz) {
  //   formaLuz = "url(#myMask)";
  // }

  return (
    <svg>
      <defs>
        <radialGradient
          id="abiertoGradiente"
          cx="50%"
          cy="50%"
          r="30%"
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
        <linearGradient id="cerradoGradiente" x1="0" y1="0%" x2="0" y2="100%">
          <stop offset="0" stop-color="black" stop-opacity="1" />
          <stop
            offset={`${props.cantLuz}%`}
            stop-color="black"
            stop-opacity="0"
          />
        </linearGradient>

        <mask id="maskAbierto">
          <rect
            x="0"
            y="0"
            width="1200"
            height="600"
            fill="white"
            opacity="0.9"
          />
          <circle
            cx={`${props.posX}%`}
            cy={`${props.posY}%`}
            r="100%"
            fill="url(#abiertoGradiente)"
          />
        </mask>

        <mask id="maskCerrado">
          <rect
            x="0"
            y="0"
            width="1200"
            height="600"
            fill="white"
            opacity="0.9"
          />

          <polygon
            points={`${maxX * posX} ${maxY * posY}, ${
              maxX * (posX + props.abrirLuz / 100)
            } 
            ${maxY * posY + 240}, ${maxX * (posX - props.abrirLuz / 100)} ${
              maxY * posY + 240
            } `}
            fill="url(#cerradoGradiente)"
          />
        </mask>
      </defs>
      <rect
        id="Cielo"
        class="cls-18"
        x="0"
        y="2.51"
        width="1200"
        height="600"
        mask={`${props.formaLuz ? "url(#maskAbierto)" : "url(#maskCerrado)"}`}
      />
    </svg>
  );
};

export default Oscuridad;
