import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import JuegoCont from "./JuegoCont";
import causa1 from "../../imagenes/img-juego/noche1.jpg";
import causa2 from "../../imagenes/img-juego/noche2.jpg";
import causa3 from "../../imagenes/img-juego/noche3.jpg";
import "./JuegoContCarrusel.css"

const JuegoContCarrusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel className="contCarrusel" activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item className="text-center p-5">
        <h3>¿Cómo evitar la contaminación luminíca?</h3>
        <p>
          El uso inadecuado de la luz es una de las causas principales de la
          perdida de visibilidad del cielo nocturno. A continuación te
          presentamos la tres causas principales
        </p>
      </Carousel.Item>
      <Carousel.Item className="text-center p-3">
        <img  src={causa1} />
        <h1>Mala Iluminación</h1>
        <p>
          Porque las luces iluminan directamente hacia el cielo o al horizonte.
        </p>
      </Carousel.Item>
      <Carousel.Item className="text-center p-3">
        <img src={causa2} />
        <h1>Espectro No Visible</h1>
        <p>
          Porque la luz emite en un espectro que no es visible para el ojo
          humano, pero afecta a otros seres vivos o a la observación
          astronómica. Las lámparas que emiten más proporción de luz azul
          producen un mayor resplandor luminoso nocturno que aquellas con
          emisiones superiores en la banda del rojo de longitudes de onda más
          largas.
        </p>
      </Carousel.Item>
      <Carousel.Item className="text-center p-3">
        <img src={causa3} />
        <h1>Por Sobreiluminación</h1>
        <p>
          Porque las luces iluminan directamente hacia el cielo o al horizonte.
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <JuegoCont />
      </Carousel.Item>
    </Carousel>
  );
};

export default JuegoContCarrusel;
