import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { redirect } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Piefinal from "../components/PieFinal";
import "../css/style.css"

const HistoriaPages = () => {
  return (
    <div>
      <NavMenu />

      <div
        id="carouselExampleFade"
        className="mt-2 colorCa carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">

            <div class="container text-center">
              <div class="row align-items-center">
                <div class="col">
                  <img
                    className=" imagenCa imagene d-block w-100"
                    src={require("../imagenes/1h.png")}
                    alt="..."
                  ></img>
                </div>
                <div class="col">
                  <p>Ana era una pequeña niña que amaba mirar el cielo , cada noche
                    antes de dormir se asomaba por la ventana de su habitacion para contemplar
                    la inmensidad del cielo. Ana estaba facinada por las estrellas ,cada punto
                    brillante en la gran oscuridad del cielo nocturno.
                    Ella se comenzo a preguntar ¿cuantas estrellas habran?, la curiosidad la llevo
                    a hacerse la misma pregunta repetidas veces , sin caber que es imposible de
                    contar .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="container text-center">
              <div class="row align-items-center">
                <div class="col">
                  <img
                    className="imagenCa imagene d-block w-100"
                    src={require("../imagenes/2h.png")}
                    alt="..."
                  ></img>
                </div>
                <div class="col">
                  <p>su abuelo era el gran responsable de que Ana sintiera esa gran cuiriosidad
                    y admiracion. El solia platicarle de la belleza y lo desconocido del cielo,
                    le contaba de las inumerables cosas que no lograba ver a simple vista y sus
                    marabilas.</p>
                </div>

              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="container text-center">
              <div class="row align-items-center">
                <div class="col">
                  <img
                    className="imagenCa imagene d-block w-100"
                    src={require("../imagenes/3h.png")}
                    alt="..."
                  ></img>
                </div>
                <div class="col">
                  <p>La fascinación de Ana, hicieron que sus abuelos decidieran realizar un viaje a Chile.
                    “Los ojos del mundo”, le llamaban.
                    Allí conocieron los más grandes observatorio del mundo y vieron los más
                    hermosos cielos estrellados. Lo más especial de esta experiencia eran las veces que su Abuelo señalaba un punto brillante en el cielo, con sus ojos que brillaban con una luz igual a la inmensidad del universo. Ana no podía evitar sentirse contagiada por su entusiasmo y su amor por la ciencia.</p>
                </div>

              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="container text-center">
              <div class="row align-items-center">
                <div class="col">
                  <img
                    className="imagenCa imagene d-block w-100"
                    src={require("../imagenes/4h.png")}
                    alt="..."
                  ></img>
                </div>
                <div class="col">
                  <p>Fue durante esas noches mágicas en Chile que su abuelo le contó de su propia pasión por la astronomía, y de cómo había soñado con ser un astrónomo desde que era joven.
                    Gracias a la pasión que su abuelo le transmitió, Ana encontró su camino en la vida y su propósito en la astronomía. Y aunque su abuelo ya no estaba físicamente presente, su legado vivía en las enseñanzas y los momentos que compartieron bajo el cielo estrellado.
                    Cada vez que observaba el cielo nocturno, sentía la presencia de su abuelo a su lado, guiándola y  alentándola. </p>
                </div>

              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="container text-center">
              <div class="row align-items-center">
                <div class="col">
                  <img
                    className="imagenCa imagene d-block w-100"
                    src={require("../imagenes/5h.png")}
                    alt="..."
                  ></img>
                </div>
                <div class="col">
                  <p>Años después, Ana sentía que había llegado el momento de regresar a Chile, donde había avivado su pasión por la astronomía y había compartido momentos inolvidables con sus abuelos.
                    Junto a su abuela  emprendieron el viaje a Chile, solo para ver el cielo nocturno estaba ya no era igual. Las luces de la ciudad opacaban las luces del cielo. Ya no estaban esos puntos brillantes que se reflejaban en los ojos de su abuelo.  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="container text-center">
              <div class="row align-items-center">
                <div class="col">
                  <img
                    className="imagenCa imagene d-block w-100"
                    src={require("../imagenes/6h.png")}
                    alt="..."
                  ></img>
                </div>
                <div class="col">
                  <p>Con el mismo espíritu de pasión y determinación que la había llevado a dedicar su vida a la astronomía, Ana decidió que su nueva meta sería generar conciencia en la gente sobre la importancia de cuidar el medio ambiente y reducir la contaminación lumínica. Quería mostrarles a todos la belleza que se escondía en un cielo nocturno despejado, como aquel que había visto en su infancia junto a su abuelo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div class="container text-center">
              <div class="row align-items-center">
                <div class="col">
                  <img
                    className="imagenCa imagene d-block w-100"
                    src={require("../imagenes/7h.png")}
                    alt="..."
                  ></img>
                </div>
                <div class="col">
                  <div class="colorL card w-1075">
                    <div class="colorL card-body">
                      <h5 class=" card-title">No más luces innecesarias</h5>
                      <p class="card-text">Ahora es tu turno de proteger los cielos</p>
                      <a href="/Juego" class="btn btn-primary" >Juega y aprende más</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Piefinal />
    </div>
  )
}

export default HistoriaPages;
