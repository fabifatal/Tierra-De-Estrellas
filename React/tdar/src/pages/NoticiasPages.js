import React from "react";
import  NavMenu from "../components/NavMenu";
import { EncabezadoNoticias } from "../components/Encabezados";
import Piefinal from "../components/PieFinal";
import noticia1 from "../imagenes/noticia1museodelaluna.jpg"
import noticia2 from "../imagenes/noticias2profemaza.jpg"
import noticia3 from "../imagenes/noticia3observaabierto.jpg"
import noticia4 from "../imagenes/noticia4cata.jpg"


const NoticiasPages = () => {
    return (
        <div className="NoticiasGeneral">

            <NavMenu />

            <EncabezadoNoticias />

            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src= {noticia1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><strong>El impresionante museo de la luna llega a Chile</strong></h5>
                            <p class="card-text">Ahí podrás ver una réplica en 3D de la Luna, de siete metros de diámetro, con increíbles detalles de sus cráteres y valles, y que es parte de un espectáculo que también incluye música en vivo.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src= {noticia2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><strong>Semana de la astronomía</strong></h5>
                            <p class="card-text">Charla abierta con el profesor Jose Maza en la explanda de Plaza de Maipú</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src= {noticia3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><strong>Puertas abiertas</strong></h5>
                            <p class="card-text">El dia viernes tanto tendrán las puertas de la casa abierta el observatorio eso alma</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src= {noticia4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><strong>Actividad dia de la astronomía</strong></h5>
                            <p class="card-text"> Este fin de semana podrás observar gratis el universo desde el observatorio Manuel Foster.</p>
                        </div>
                    </div>
                </div>
            </div>


            <Piefinal />

        </div>
    )

}

export default NoticiasPages;