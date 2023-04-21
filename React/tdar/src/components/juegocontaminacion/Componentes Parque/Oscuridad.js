import React from "react";

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
        <clipPath id="corteluz">
          <polygon
            points={`${maxX * (props.posX / 100)} ${
              maxY * (props.posY / 100)
            }, ${maxX * 0.35} ${maxY * 1}, ${maxX * 0.65} ${maxY * 1} `}
            fill="red"
          />
        </clipPath>
        <linearGradient id="lineal" x1="0" y1="0%" x2="0" y2="100%">
          <stop offset="0" stop-color="black" stop-opacity="1" />
          <stop
            offset={`${props.cantLuz}%`}
            stop-color="black"
            stop-opacity="0"
            clipPath="url('#corteluz')"
          />
        </linearGradient>
        <radialGradient
          id="gradient"
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
            clipPath="url('#corteluz')"
          />
        </radialGradient>

        <mask id="gradient-mask">
          <rect
            x="0"
            y="0"
            width="1200"
            height="600"
            fill="white"
            opacity="0.8"
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
            points={`${maxX * posX} ${maxY * posY}, ${maxX * (posX + (props.abrirLuz/100))} 
            ${(maxY*posY)+240}, ${maxX*(posX-(props.abrirLuz/100))} ${(maxY*posY)+240} `}
            fill="url(#lineal)"
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
        mask={`${props.formaLuz ? "url(#gradient-mask)" : "url(#myMask)"}`}
      />
    </svg>
  );
};

export default Oscuridad;
