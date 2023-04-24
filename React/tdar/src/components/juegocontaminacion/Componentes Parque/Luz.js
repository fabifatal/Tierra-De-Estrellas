import React from "react";
import "./Luz.css";
import MaskLuz from "./MaskLuz";

const Luz = (props) => {
  const luzFria = "rgba(0, 250, 250, 0.2)";
  const luzCalida = "rgba(250, 250, 0, 0.2)";
  const maxX = 1200;
  const maxY = 600;
  const posX = props.posX / 100;
  const posY = props.posY / 100;
  return (
    <svg>
      <defs>
        <radialGradient
          id="myGradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop
            offset="0%"
            stop-color={`${props.colorLuz ? luzCalida : luzFria}`}
          />
          <stop offset={`${props.cantLuz}%`} stop-color="transparent" />
        </radialGradient>
        <clipPath id="corteluz">
        <polygon points={`${maxX*(posX)} ${maxY*(posY)}, ${maxX*(posX+0.15)} ${(maxY*posY)+240}, ${maxX*(posX-0.15)} ${(maxY*posY)+240} `} />
        </clipPath>
      </defs>
      <circle
        cx={`${props.posX}%`}
        cy={`${props.posY}%`}
        r="100%"
        fill="url('#myGradient')"
        clipPath={`${!props.formaLuz && " url('#corteluz')"}`}
      />
      {/* <polygon points="600 0, 0 600, 1200 600" fill="red" /> */}
    </svg>
  );
};

export default Luz;
