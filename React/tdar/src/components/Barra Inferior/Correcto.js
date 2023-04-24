import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Correcto.css";
import imgCorrecto1 from "../../imagenes/img-barrainferior/correcto_1.jpg";
import imgCorrecto2 from "../../imagenes/img-barrainferior/correcto_2.jpg";
import imgCorrecto3 from "../../imagenes/img-barrainferior/correcto_3.jpg";
import imgCorrecto4 from "../../imagenes/img-barrainferior/correcto_4.jpg";
import imgCorrecto5 from "../../imagenes/img-barrainferior/correcto_5.jpg";
import imgCorrecto6 from "../../imagenes/img-barrainferior/correcto_6.jpg";
import imgCorrecto7 from "../../imagenes/img-barrainferior/correcto_7.jpg";
import imgCorrecto8 from "../../imagenes/img-barrainferior/correcto_8.jpg";
import imgCorrecto9 from "../../imagenes/img-barrainferior/correcto_9.jpeg";
import imgCorrecto10 from "../../imagenes/img-barrainferior/correcto_10.jpg";
import { Image } from "react-bootstrap";

const Correcto = (props) => {
  const nivel = props.nivelActual - 1;
  const imagenes = [
    imgCorrecto1,
    imgCorrecto2,
    imgCorrecto3,
    imgCorrecto4,
    imgCorrecto5,
    imgCorrecto6,
    imgCorrecto7,
    imgCorrecto8,
    imgCorrecto9,
    imgCorrecto10,
  ];

  const tituloCorrecto = [
    "2M1207b",
    "Supernova 1987A",
    "Agujero Negro Supermasivo",
    "Kelu",
    "Próxima Centauri c",
    "SPT0418-47",
    "La forma del centro de la Vía Láctea",
    "Expansión acelerada del universo",
    "Colapso de cúmulo de estrellas",
    "El Sol",
  ];

  const descripcionCorrecto = [
    "Fue tomada con uno de los telescopios del VLT en el observatorio Paranal, en abril de 2004. Se trata de un planeta gigante, aproximadamente cinco veces mayor que Júpiter.¿Serías capaz de darle la vuelta al mundo en un globo terráqueo? ¡Lo dejamos a tu imaginación!",
    "Fue la primera visible a simple vista y su estudio confirmó la teoría de que los elementos como el hierro fueron creados en este tipo de explosiones. ¡Imagina cuánto gas cósmico podrías encontrar dentro de ella!",
    "Gracias a la combinación de imágenes tomadas por varios telescopios se logró obtener una imagen del agujero negro que se encuentra en la galaxia Messier 87. Está ubicada a 53 millones de años luz de la tierra, ¿cuantas series podrías ver si viajas hasta allá?",
    "Kelu que en mapuzungun significa 'rojo'. Estas enanas se originan como bolas de gas y no tienen la masa necesaria para producir luz por lo que son oscuras.",
    "En composición es más parecida a nuestro planeta, para detectarlo se utilizaron instrumentos ubicados en La Silla y Paranal. Lo más llamativo es que se han descubierto 2 exoplanetas más orbitando 'Próxima Centauri', que es la estrella más cercana a nuestro planeta después del Sol. ¿Estás listo/a para mudarte de barrio?",
    "Utilizando el famoso telescopio ALMA se descubrió a 12.000 millones de años luz la hermana 'menor' de la Vía Láctea, ya que poseen características similares. Lo más increíble es que según la luz que recibimos de ella se calcula que posee una décima parte de la edad de nuestra galaxia. Si la IA nos domina, ¡ya sabes cuál es tu próximo hogar!",
    "En 2010, los estudios liderados por la astrónoma Manuela Zoccali, del Instituto de Astrofísica UC, mostraron que en realidad tiene forma de X, en otras palabras, posee una estructura central en forma de barra compuesta por estrellas, la cual contiene el núcleo de la galaxia en el centro y tiene 2 'brazos' espirales unidos a sus extremos.",
    "En 2011, astrónomos estadounidenses en su afán por descubrir la distancia del universo, notaron que éste en realidad está en constante expansión y lo que es más extraño ¡su velocidad de expansión es cada vez mayor!. Tal descubrimiento los llevó a ganar el premio Nobel de Física, sin embargo, los trabajos previos de José Maza y Mario Hamuy fueron importantísimos en la investigación y posterior galardón. ¡Todo un orgullo para la astronomía chilena!",
    "¡Excelente vista! Tu descubrimiento corresponde al agujero negro supermasivo ubicado en el centro de la galaxia Messier 87. Según Andrés Escala estos fenómenos de la naturaleza, podrían tener su origen en la colisión de cúmulos estelares, que son muchísimas estrellas cercanas entre sí. Este dato resulta impactante si consideramos que la masa de una agujero negro supermasivo es miles de millones más densa que nuestro Sol. ¿Impresionante no?",
    "La astrónoma Paula Jofré  estudió 22 estrellas pertenecientes a la Vía Láctea, incluyendo el Sol, para así desarrollar el árbol cósmico o genealógico de nuestra galaxia. Para su investigación observó que una vez que una estrella 'muere', los elementos químicos que la componen vuelven al espacio para luego dar vida a nuevas estrellas. De esta manera, pudo determinar cuáles estrellas son familiares entre sí, es decir, su patrón químico es similar, lo que indica provienen de una misma nube molecular. ¡Alucinante! ¿No lo crees aventurero/a",
  ];

  return (
    <Modal
      {...props}
      className="h-40 text-center"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">¡Correcto!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image fluid rounded src={imagenes[nivel]} className="imagencorrecta" />
        <h4>{tituloCorrecto[nivel]}</h4>
        <p className="text-start">{descripcionCorrecto[nivel]}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Siguiente</Button>
        <Button href="https://marcachile.cl/ciencia-conocimiento/grandes-descubrimientos-astronomicos-desde-chile-observatorio-natural-del-cosmos/" target="_blank">
          Más Info
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Correcto;
