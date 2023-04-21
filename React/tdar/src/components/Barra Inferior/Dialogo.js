import React from "react";
import "./Dialogo.css";
import { Container } from "react-bootstrap";

const Dialogo = (props) => {
  const nivel = props.nivelActual;
  const dialogos = [
    "¡Bienvenido/a a tu desafío espacial aventurero/a!. Hace años que sabemos de la existencia teórica de exoplanetas (aquellos fuera de nuestro sistema solar), pero ¿serás capáz de capturar la imágen de uno?",
    "¿Sabías que en el año 1987 se descubrió desde el observatorio Las Campanas, una  supernova? ¡Anímate a buscarla!",
    "En 2019, se tomó la primera fotografía de un agujero negro supermasivo. ¿Podrás replicar este logro?",
    "En 1987 la astrónoma María Teresa Ruiz, descubrió la Enana café solitaria bautizada como Kelu. Si ella pudo ¡Tú también!",
    "En  2020 se descubrió un  exoplaneta ubicado a 4,2 años luz de la Tierra, y que tiene 6 veces la masa de la Tierra. ¿Podrás encontrar nuestro próximo hogar?",
    "¿Sabías que nuestra galaxia 'la Vía Láctea' podría tener una hermana lejana ubicada a 12.000 millones de años luz de distancia? ¿Serás capaz de encontrarla?",
    "Durante años, las y los astrónomos/as creyeron que el centro de la Vía Láctea tiene forma esférica. Sin embargo, algunos estudios indican que podría tener forma de 'X'. Ahora que lo sabes ¡encuentra el centro de nuestra galaxia!",
    "¿Sabías que 2 astrónomos chilenos, José Maza y Mario Hamuy, trabajaron en un proyecto en conjunto con sus pares estadounidenses para poder 'medir la distancia del universo'? ¿Serás capaz de encontrar la medida tu mismo/a?",
    "en 2021, el astrónomo chileno Andrés Escala descubrió cómo se originan los agujeros negros supermasivos. Encuentra uno y te contaremos su origen, ¡no podrás creerlo!",
    "Aventurero/a, por fin hemos llegado al último desafío. ¿Te has preguntado alguna vez cuál es el origen de nuestra Vía Láctea? ¡Te invitamos a descubrirlo, encuentra la estrella más importante para nosotros!"
  ];

  return (
    <Container className="contDialogo">
      <p>{dialogos[nivel]}</p>
    </Container>
  );
};

export default Dialogo;
