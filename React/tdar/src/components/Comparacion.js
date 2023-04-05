import React from "react";
import sincontaminacion from "../imagenes/sincontaminacion.jpg"
import concontaminacion from "../imagenes/concontaminacion.jpg"
import mision from "../imagenes/mision.svg"
import vision from"../imagenes/vision.svg"

const BajoEncabezadoInicio = () => {
    return (
    <div className="comparaciongeneral">
         <section className="container bajoEncabezado">
                    <h2 className="subtitle ">La Contaminacion Luminica, el enemigo de los cielos de Chile</h2>
                    <p className="bajoEncabezado_paragraph"> Este enemigo silencioso aumenta cada año un 2%, el cual va afectando la visibilidad de los cielos <br/> A la larga si seguimos igual perderemos toda vision hacia el exterior</p>


                    <div className="comparacion">
                        <article className="imgComparacion">
                            <img src= {sincontaminacion} className="imgBajoEncabezado"/>
                                <h3 className="about__title">Sin Contaminacion Luminica</h3>
                                <p className="about__paragrah">Este es el cielo de buenos aires sin contaminacion luminica <br/> Es precioso ¿no?</p>
                        </article>

                        <article className="imgComparacion">
                            <img src= {concontaminacion} className="imgBajoEncabezado"/>
                                <h3 className="about__title">Con Contaminacion Luminica</h3>
                                <p className="about__paragrah">El mismo cielo pero ahora afectado por la contaminacion <br/> ¿Ves la diferencia?</p>
                        </article>
                    </div>
                </section>
    </div>
    )
}

const BajoEncabezadoNosotros = () => {
    return (
    <div className="comparaciongeneral">
         <section className="container bajoEncabezado">
                    <h2 className="subtitle ">La Contaminacion Luminica, el enemigo de los cielos de Chile</h2>
                    <p className="bajoEncabezado_paragraph"> Este enemigo silencioso aumenta cada año un 2%, el cual va afectando la visibilidad de los cielos <br/> A la larga si seguimos igual perderemos toda vision hacia el exterior</p>


                    <div className="comparacion">
                        <article className="imgComparacion">
                            <img src= {mision} className="imgBajoEncabezado"/>
                                <h3 className="about__title">Mision</h3>
                                <p className="about__paragrah">"Nuestra misión es difundir el conocimiento y la pasión por la astronomía a nivel global, ofreciendo una experiencia enriquecedora y educativa para todas las personas interesadas en la ciencia del universo. Buscamos fomentar la curiosidad y el asombro por el cosmos, y promover el desarrollo de una comunidad científica comprometida con la exploración responsable y sostenible del espacio exterior, incluyendo la reducción de la contaminación lumínica. Creemos que es fundamental preservar y proteger el cielo nocturno como patrimonio natural y cultural de la humanidad, y por eso abogamos por la reducción de la contaminación lumínica en las ciudades y zonas urbanas"</p>
                        </article>

                        <article className="imgComparacion">
                            <img src= {vision} className="imgBajoEncabezado"/>
                                <h3 className="about__title">Vision</h3>
                                <p className="about__paragrah">"Nuestra visión es promover la conciencia ambiental y la responsabilidad social entre la comunidad astronómica y los interesados en la astronomía, desde aficionados hasta expertos. Abogamos por una exploración responsable y sostenible del universo, fomentando el cuidado del medio ambiente y el espacio exterior. Creemos que es fundamental preservar y proteger el patrimonio astronómico de la humanidad, y por eso promovemos el uso responsable y ético de los recursos espaciales. Queremos inspirar a nuestra comunidad a tomar acciones concretas para proteger nuestro planeta y nuestro universo para las generaciones futuras"</p>
                        </article>
                    </div>
                </section>
    </div>
    )
}

export {BajoEncabezadoInicio,BajoEncabezadoNosotros}