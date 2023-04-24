import React from "react";

const MaskLuz = (props) => {
  const maxX = 1200;
  const maxY = 600;
  const posX = props.posX / 100;
  const posY = props.posY / 100;

  return (
    <svg>
      <radialGradient
        id={"openGrad"+props.idOpenGrad}
        cx="50%"
        cy="50%"
        r="30%"
        fx="50%"
        fy="50%"
      >
        <stop offset="0" stop-color={props.colorOpenGrad1} stop-opacity="1" />
        <stop
          offset={`${props.cantLuz}%`}
          stop-color={props.colorOpenGrad2}
          stop-opacity="0"
          clipPath="url('#corteluz')"
        />
      </radialGradient>

      <linearGradient id={"closedGrad"+props.idClosedGrad} x1="0" y1="0%" x2="0" y2="100%">
        <stop offset="0" stop-color={props.colorClosedGrad1} stop-opacity="1" />
        <stop
          offset={`${props.cantLuz}%`}
          stop-color={props.colorClosedGrad2}
          stop-opacity="0"
          clipPath="url('#corteluz')"
        />
      </linearGradient>

      <mask id="gradient-mask">
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
          fill="url(#gradient)"
        />
      </mask>

      <mask id="myMask">
        <rect
          x="0"
          y="0"
          width="1200"
          height="600"
          fill="white"
          opacity="0.8"
        />

        <polygon
          points={`${maxX * posX} ${maxY * posY}, ${
            maxX * (posX + props.abrirLuz / 100)
          } 
            ${maxY * posY + 240}, ${maxX * (posX - props.abrirLuz / 100)} ${
            maxY * posY + 240
          } `}
          fill="url(#lineal)"
        />
      </mask>
    </svg>
  );
};

export default MaskLuz;
