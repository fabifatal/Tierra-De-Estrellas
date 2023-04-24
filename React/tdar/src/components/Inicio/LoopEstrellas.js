import React from "react";
import "./LoopEstrellas.css";

const LoopEstrellas = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const estrellas = [];

  for (let i = 0; i < 2000; i++) {
    const estrella = (
      <circle
        fill="#fff"
        cx={getRandomInt(1440)}
        cy={getRandomInt(1000)}
        r={Math.random() * 0.5}
      />
    );
    estrellas.push(estrella);
  }

  return <svg className="loopestrellas">{estrellas}</svg>;
};

export default LoopEstrellas;
