import React from "react";
import josem from "../imagenes/Josemaza.jpg";
import tere from "../imagenes/terepaneque.jpg";
import maria from "../imagenes/mariateresaruiz.jpg";
import monica from "../imagenes/monicarubio.jpg";
import izquierda from "../imagenes/leftArrow.svg";
import derecha from "../imagenes/rightArrow.svg";
import dani from "../imagenes/dani.jpg";
import fabi from "../imagenes/Fabi.jpg";
import cami from "../imagenes/Camila.jpg";
import diego from "../imagenes/diego.jpg";
import javi from "../imagenes/Javi.jpg";

const CarrucelInicio = () => {
  return (
    <div id="carouselExample" className="carousel slide testimony">
    <div class="carousel-inner">
      <div class="carousel-item active">
      <section className="testimony__body testimony__body--show " data-id="1">
                 <div className="testimony__texts">
                     <h2 className="subtitle">José Maza Sancho <span className="testimony__course">Astrónomo Chileno</span></h2>
                     <p className="testimony__review">Doctor en Astronomía, con mención en astrofísica. Sus estudios se centraron en el estudio de las supernovas, la ejecución de una búsqueda con prisma objetivo de objetos con líneas de emisión, energía oscura y cuásares, los cuales le llevaron a ser galardonado con el Premio Nacional de Ciencias Exactas en 1999. A partir 2017 adquirió fama con sus libros de divulgación científica y pódcast.</p>
                 </div>

                 <figure className="testimony__picture">
                     <img src={josem} className="testimony__img" />
                 </figure>
             </section>
      </div>
      <div class="carousel-item">
      <section className="testimony__body testimony__body--show" data-id="2">
                 <div className="testimony__texts">
                     <h2 className="subtitle">Teresa Paneque Carreño <span className="testimony__course">Astrónoma Chilena/Española</span></h2>
                     <p className="testimony__review">Su área de especialización es la formación de planetas, específicamente el estudio de las condiciones químicas en los entornos de formación planetaria. En 2021 es coautora de una publicación científica que describe inestabilidades gravitacionales de la estrella Elias 2-27, entregando evidencia a la hipótesis de inestabilidad gravitacional en discos protoplanetarios.</p>
                 </div>

                 <figure className="testimony__picture">
                     <img src={tere} className="testimony__img" />
                 </figure>
             </section>
      </div>
      <div class="carousel-item">
      <section className="testimony__body testimony__body--show" data-id="3">
                 <div className="testimony__texts">
                     <h2 className="subtitle">María Teresa Ruiz <span className="testimony__course">Astrónoma Chilena</span></h2>
                     <p className="testimony__review">Fue ganadora con el Premio Nacional de Ciencias Exactas en 1997. Especializada en el estudio de las estrellas enanas de baja masa, ha descubierto una supernova en el momento de explotar, dos nebulosas planetarias en el halo de nuestra galaxia y la enana «café» en las proximidades del sistema solar llamada Kelu (de kelü, «rojo» en mapudungún), en la Constelación de Hidra.</p>
                 </div>

                 <figure className="testimony__picture">
                     <img src={maria} className="testimony__img" />
                 </figure>
             </section>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    // <div className="testimony">

    //     <div className="testimony__container container">
    //         <img src={izquierda} className="testimony__arrow" id="before" />

    //         <section className="testimony__body testimony__body--show " data-id="1">
    //             <div className="testimony__texts">
    //                 <h2 className="subtitle">José Maza Sancho <span className="testimony__course">Astrónomo Chileno</span></h2>
    //                 <p className="testimony__review">Doctor en Astronomía, con mención en astrofísica. Sus estudios se centraron en el estudio de las supernovas, la ejecución de una búsqueda con prisma objetivo de objetos con líneas de emisión, energía oscura y cuásares, los cuales le llevaron a ser galardonado con el Premio Nacional de Ciencias Exactas en 1999. A partir 2017 adquirió fama con sus libros de divulgación científica y pódcast.</p>
    //             </div>

    //             <figure className="testimony__picture">
    //                 <img src={josem} className="testimony__img" />
    //             </figure>
    //         </section>

    //         <section className="testimony__body " data-id="2">
    //             <div className="testimony__texts">
    //                 <h2 className="subtitle">Teresa Paneque Carreño <span className="testimony__course">Astrónoma Chilena/Española</span></h2>
    //                 <p className="testimony__review">Su área de especialización es la formación de planetas, específicamente el estudio de las condiciones químicas en los entornos de formación planetaria. En 2021 es coautora de una publicación científica que describe inestabilidades gravitacionales de la estrella Elias 2-27, entregando evidencia a la hipótesis de inestabilidad gravitacional en discos protoplanetarios.</p>
    //             </div>

    //             <figure className="testimony__picture">
    //                 <img src={tere} className="testimony__img" />
    //             </figure>
    //         </section>

    //         <section className="testimony__body " data-id="3">
    //             <div className="testimony__texts">
    //                 <h2 className="subtitle">María Teresa Ruiz <span className="testimony__course">Astrónoma Chilena</span></h2>
    //                 <p className="testimony__review">Fue ganadora con el Premio Nacional de Ciencias Exactas en 1997. Especializada en el estudio de las estrellas enanas de baja masa, ha descubierto una supernova en el momento de explotar, dos nebulosas planetarias en el halo de nuestra galaxia y la enana «café» en las proximidades del sistema solar llamada Kelu (de kelü, «rojo» en mapudungún), en la Constelación de Hidra.</p>
    //             </div>

    //             <figure className="testimony__picture">
    //                 <img src={maria} className="testimony__img" />
    //             </figure>
    //         </section>

    //         <section className="testimony__body " data-id="4">
    //             <div className="testimony__textst">
    //                 <h2 className="subtitle">Mónica Rubio López <span className="testimony__course">Astrónoma Chilena</span></h2>
    //                 <p className="testimony__review">directora de la Sociedad Chilena de Astronomía (SOCHIAS) entre 2019 y 2021. Por sus importantes contribuciones a la astronomía obtuvo el Premio Nacional de Ciencias Exactas del año 2021. En 2015 encabezó un estudio que fue publicado en la Revista Nature, sobre una nueva forma de maternidad estelar, descubierta tras el hallazgo de una "incubadora" de estrellas al alero de Wolf-Lundmark-Melotte (WLM), que se encuentra a tres millones de años luz del planeta Tierra</p>
    //             </div>

    //             <figure className="testimony__picture">
    //                 <img src={monica} className="testimony__img" />
    //             </figure>
    //         </section>

    //         <img src={derecha} className="testimony__arrow" id="next" />
    //     </div>

    // </div>
  );
};

const CarrucelNosotros = () => {
  return (
    <div className="testimony">
      <div className="testimony__container container">
        <img src={izquierda} className="testimony__arrow" id="before" />

        <section className="testimony__body testimony__body--show" data-id="1">
          <div className="testimony__texts">
            <h2 className="subtitle">
              Daniela Rivas Oyarce{" "}
              <span className="testimony__course">
                Desarrolladora Full Stack
              </span>
            </h2>
            <p className="testimony__review">inserte su descripcion</p>
          </div>

          <figure className="testimony__picture">
            <img src={dani} className="testimony__img" />
          </figure>
        </section>

        <section className="testimony__body " data-id="2">
          <div className="testimony__texts">
            <h2 className="subtitle">
              Fabian Zuñiga{" "}
              <span className="testimony__course">
                Desarrollador Full Stack
              </span>
            </h2>
            <p className="testimony__review">inserte su descripcion</p>
          </div>

          <figure className="testimony__picture">
            <img src={fabi} className="testimony__img" />
          </figure>
        </section>

        <section className="testimony__body " data-id="3">
          <div className="testimony__texts">
            <h2 className="subtitle">
              Camila Berrios{" "}
              <span className="testimony__course">
                Desarrolladora Full Stack
              </span>
            </h2>
            <p className="testimony__review">inserte su descripcion</p>
          </div>

          <figure className="testimony__picture">
            <img src={cami} className="testimony__img" />
          </figure>
        </section>

        <section className="testimony__body " data-id="4">
          <div className="testimony__texts">
            <h2 className="subtitle">
              Diego Alvarez{" "}
              <span className="testimony__course">
                Desarrollador Full Stack
              </span>
            </h2>
            <p className="testimony__review">inserte su descripcion</p>
          </div>

          <figure className="testimony__picture">
            <img src={diego} className="testimony__img" />
          </figure>
        </section>

        <section className="testimony__body " data-id="5">
          <div className="testimony__texts">
            <h2 className="subtitle">
              Javiera Muñoz{" "}
              <span className="testimony__course">
                Desarrolladora Full Stack
              </span>
            </h2>
            <p className="testimony__review">inserte su descripcion</p>
          </div>

          <figure className="testimony__picture">
            <img src={javi} className="testimony__img" />
          </figure>
        </section>

        <img src={derecha} className="testimony__arrow" id="next" />
      </div>
    </div>
  );
};

export { CarrucelInicio, CarrucelNosotros };
