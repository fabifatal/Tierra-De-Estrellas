import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import causa1 from "../../imagenes/img-juego/noche1.jpg";
import causa2 from "../../imagenes/img-juego/noche2.jpg";
import causa3 from "../../imagenes/img-juego/noche3.jpg";
import "./JuegoContCarrusel.css";

const JuegoContCarrusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      variant="dark"
      className="contCarrusel"
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
    >
      <Carousel.Item className="text-center p-5">
        <h3>¿Cómo evitar la contaminación luminíca?</h3>
        <p>
          El uso inadecuado de la luz es una de las causas principales de la
          perdida de visibilidad del cielo nocturno. A continuación te
          presentamos la tres causas principales.
        </p>
      </Carousel.Item>
      <Carousel.Item className="text-center p-3">
        <img src={causa1} />
        <h1>Mala Iluminación</h1>
        <p>
          Esto ocurre cuándo las luces iluminan directamente hacia el cielo o al
          horizonte, en lugar de a donde deben alumbrar.
        </p>
      </Carousel.Item>
      <Carousel.Item className="text-center p-3">
        <img src={causa2} />
        <h1>Espectro No Visible</h1>
        <p>
          La luz emite en un espectro que no es visible para el ojo humano, pero
          afecta a otros seres vivos o a la observación astronómica. Las
          lámparas que emiten más proporción de luz azul producen un mayor
          resplandor luminoso nocturno que aquellas con emisiones superiores en
          la banda del rojo de longitudes de onda más largas.
        </p>
      </Carousel.Item>
      <Carousel.Item className="text-center p-3">
        <img src={causa3} />
        <h1>Sobreiluminación</h1>
        <p>
          Se refiere a un flujo luminoso excesivo. Además, dado que la luz se
          refleja al chocar contra la superficie de un cuerpo, dependiendo de la
          superficie del cuerpo esta reflexión puede ser mayor y por lo tanto,
          más luz se dispersa hacia el cielo.
        </p>
      </Carousel.Item>
    </Carousel>
  );
};

export default JuegoContCarrusel;
