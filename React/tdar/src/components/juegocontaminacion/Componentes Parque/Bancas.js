import React from "react";

const Bancas = (props) => {
  const x = 480;
  const y = 440;
  const w = 2;
  const h = 73;
  return (
    <svg viewBox="0 0 1200 600">
      <g id="Bancas">
        <g id="banca1">
          <rect
            class="cls-23"
            x={x}
            y={y}
            width={w}
            height={h}
            rx=".1"
            ry=".1"
          />
          <rect
            class="cls-23"
            x={x+93.62}
            y={y}
            width={w}
            height={h}
            rx=".1"
            ry=".1"
          />
          <rect
            class="cls-23"
            x={x-4.46}
            y={y+42.3}
            width="107"
            height={w}
          />
          <rect
            class="cls-20"
            x={x-6.69}
            y={y-2.23}
            width="111.45"
            height="5.51"
            rx=".25"
            ry=".25"
          />
          <rect
            class="cls-20"
            x={x-6.69}
            y={y+6.04}
            width="111.45"
            height="5.51"
            rx=".25"
            ry=".25"
          />
          <rect
            class="cls-20"
            x={x-6.69}
            y={y+14.31}
            width="111.45"
            height="5.51"
            rx=".25"
            ry=".25"
          />
          <rect
            class="cls-20"
            x={x-6.69}
            y={y+22.58}
            width="111.45"
            height="5.51"
            rx=".25"
            ry=".25"
          />
          <rect
            class="cls-20"
            x={x-6.69}
            y={y+36.79}
            width="111.45"
            height="5.51"
            rx=".25"
            ry=".25"
          />
        </g>
      </g>
    </svg>
  );
};

export default Bancas;
