import React from "react";
import josem from "../imagenes/Josemaza.jpg"
import tere from "../imagenes/terepaneque.jpg"
import maria from "../imagenes/mariateresaruiz.jpg"
import monica from "../imagenes/monicarubio.jpg"
import izquierda from "../imagenes/leftArrow.svg"
import derecha from "../imagenes/rightArrow.svg"
import dani from "../imagenes/dani.jpg"
import fabi from "../imagenes/Fabi.jpg"
import cami from "../imagenes/Camila.jpg"
import diego from "../imagenes/diego.jpg"
import javi from "../imagenes/Javi.jpg"



const CarrucelInicio = () => {
    return (
        <div className="astronomos">
            <div className="fondoAstronomos_container container">
                <h2 className="subtitle">Astronomos reconocidos</h2>
            </div>

            <div className="descripcionAstronomos_container container">
            <img src= {izquierda} className="astronomos_arrow" id="before" />

                <section className="descripcion_body descripcion_body--show " data-id="1">
                    <div className="descripcion_text">
                        <h2 className="subtitle">José Maza Sancho <span className="testimony__course">Astrónomo Chileno</span></h2>
                        <p className="descripcion_review">Doctor en Astronomía, con mención en astrofísica. Sus estudios se centraron en el estudio de las supernovas, la ejecución de una búsqueda con prisma objetivo de objetos con líneas de emisión, energía oscura y cuásares, los cuales le llevaron a ser galardonado con el Premio Nacional de Ciencias Exactas en 1999. A partir 2017 adquirió fama con sus libros de divulgación científica y pódcast.</p>
                    </div>

                    <figure className="astronomo_picture">
                        <img src= {josem} className="astronomo_img" />
                    </figure>
                </section>

                <section className="descripcion_body descripcion_body--show " data-id="2">
                    <div className="descripcion_text">
                        <h2 className="subtitle">Teresa Paneque Carreño <span className="testimony__course">Astrónoma Chilena/Española</span></h2>
                        <p className="descripcion_review">Su área de especialización es la formación de planetas, específicamente el estudio de las condiciones químicas en los entornos de formación planetaria. En 2021 es coautora de una publicación científica que describe inestabilidades gravitacionales de la estrella Elias 2-27, entregando evidencia a la hipótesis de inestabilidad gravitacional en discos protoplanetarios.</p>
                    </div>

                    <figure className="astronomo_picture">
                        <img src= {tere} className="astronomo_img" />
                    </figure>
                </section>

                <section className="descripcion_body descripcion_body--show " data-id="3">
                    <div className="descripcion_text">
                        <h2 className="subtitle">María Teresa Ruiz <span className="testimony__course">Astrónoma Chilena</span></h2>
                        <p className="descripcion_review">Fue ganadora con el Premio Nacional de Ciencias Exactas en 1997. Especializada en el estudio de las estrellas enanas de baja masa, ha descubierto una supernova en el momento de explotar, dos nebulosas planetarias en el halo de nuestra galaxia y la enana «café» en las proximidades del sistema solar llamada Kelu (de kelü, «rojo» en mapudungún), en la Constelación de Hidra.</p>
                    </div>

                    <figure className="astronomo_picture">
                        <img src= {maria} className="astronomo_img" />
                    </figure>
                </section>

                <section className="descripcion_body descripcion_body--show " data-id="4">
                    <div className="descripcion_text">
                        <h2 className="subtitle">Mónica Rubio López <span className="testimony__course">Astrónoma Chilena</span></h2>
                        <p className="descripcion_review">directora de la Sociedad Chilena de Astronomía (SOCHIAS) entre 2019 y 2021. Por sus importantes contribuciones a la astronomía obtuvo el Premio Nacional de Ciencias Exactas del año 2021. En 2015 encabezó un estudio que fue publicado en la Revista Nature, sobre una nueva forma de maternidad estelar, descubierta tras el hallazgo de una "incubadora" de estrellas al alero de Wolf-Lundmark-Melotte (WLM), que se encuentra a tres millones de años luz del planeta Tierra</p>
                    </div>

                    <figure className="astronomo_picture">
                        <img src= {monica} className="astronomo_img" />
                    </figure>
                </section>

                <img src= {derecha} className="astronomos_arrow" id="next" />
            </div>

        </div>

    )
}

const CarrucelNosotros = () => {
    return (
        <div className="astronomos">
        <div className="fondoAstronomos_container container">
            <h2 className="subtitle">Equipo compuestop por:</h2>
        </div>

        <div className="descripcionAstronomos_container container">
            <img src= {izquierda} className="astronomos_arrow" id="before" />

            <section className="descripcion_body descripcion_body--show " data-id="1">
                <div className="descripcion_text">
                    <h2 className="subtitle">Daniela Rivas Oyarce <span className="testimony__course">Desarrolladora Full Stack</span></h2>
                    <p className="descripcion_review">inserte su descripcion</p>
                </div>

                <figure className="astronomo_picture">
                    <img src= {dani} className="astronomo_img" />
                </figure>
            </section>

            <section className="descripcion_body descripcion_body--show " data-id="2">
                <div className="descripcion_text">
                    <h2 className="subtitle">Fabian Zuñiga <span className="testimony__course">Desarrollador Full Stack</span></h2>
                    <p className="descripcion_review">inserte su descripcion</p>
                </div>

                <figure className="astronomo_picture">
                    <img src= {fabi} className="astronomo_img" />
                </figure>
            </section>

            <section className="descripcion_body descripcion_body--show " data-id="3">
                <div className="descripcion_text">
                    <h2 className="subtitle">Camila Berrios <span className="testimony__course">Desarrolladora Full Stack</span></h2>
                    <p className="descripcion_review">inserte su descripcion</p>
                </div>

                <figure className="astronomo_picture">
                    <img src= {cami} className="astronomo_img" />
                </figure>
            </section>

            <section className="descripcion_body descripcion_body--show " data-id="4">
                <div className="descripcion_text">
                    <h2 className="subtitle">Diego Alvarez <span className="testimony__course">Desarrollador Full Stack</span></h2>
                    <p className="descripcion_review">inserte su descripcion</p>
                </div>

                <figure className="astronomo_picture">
                    <img src= {diego} className="astronomo_img" />
                </figure>
            </section>

            <section className="descripcion_body descripcion_body--show " data-id="5">
                <div className="descripcion_text">
                    <h2 className="subtitle">Javiera Muñoz <span className="testimony__course">Desarrolladora Full Stack</span></h2>
                    <p className="descripcion_review">inserte su descripcion</p>
                </div>

                <figure className="astronomo_picture">
                    <img src= {javi} className="astronomo_img" />
                </figure>
            </section>

            <img src= {derecha} className="astronomos_arrow" id="next" />
        </div>

    </div>
       
    )
}

export { CarrucelInicio, CarrucelNosotros }