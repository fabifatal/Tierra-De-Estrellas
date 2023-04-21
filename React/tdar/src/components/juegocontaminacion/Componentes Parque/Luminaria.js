import React from "react";

const Luminaria = (props) => {
  const correctorX = 0;
  const posX = props.posX;
  const posY = props.posY;
  const w = 0.5*((posY*2)/100);
  const hPoste = 100*((posY*2)/100)
  const rLampara = 12.5*((posY*2)/100)

  return (
    <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg">
      <rect
        fill="#3f2108"
        x={`${(posX)-(w/2)+correctorX}%`}
        y={`${posY}%`}
        width={`${w}%`}
        height={hPoste}
      />

      <circle fill="#fff" cx={`${posX-(w-w)+correctorX}%`} cy={`${posY}%`} r={rLampara} />
    </svg>
  );
};

export default Luminaria;
