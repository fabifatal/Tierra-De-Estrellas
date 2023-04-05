import React from "react";
import  { NavMenuNoticias } from "../components/NavMenu";
import { EncabezadoNoticias } from "../components/Encabezados";
import Piefinal from "../components/PieFinal";
import noticia1 from "../imagenes/noticia1museodelaluna.jpg"
import noticia2 from "../imagenes/noticias2profemaza.jpg"
import noticia3 from "../imagenes/noticia3observaabierto.jpg"
import noticia4 from "../imagenes/noticia4cata.jpg"

const NoticiasPages = () => {
    return (
        <div className="NoticiasGeneral">

            <NavMenuNoticias />

            <EncabezadoNoticias />

            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src= {noticia1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">El impresionante museo de la luna llega a Chile</h5>
                            <p class="card-text">Ahí podrás ver una réplica en 3D de la Luna, de siete metros de diámetro, con increíbles detalles de sus cráteres y valles, y que es parte de un espectáculo que también incluye música en vivo.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src= {noticia2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Semana de la astronomia</h5>
                            <p class="card-text">Charla abierta con el profesor Jose Maza</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src= {noticia3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Puertas abiertas</h5>
                            <p class="card-text">El dia viernes tanto tenran las puertas de la casa abierta el obserbatorio eso alma</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src= {noticia4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Actividad dia de la astronomia</h5>
                            <p class="card-text">Este fin de semanapodras obserbar gratis el universo desde el observatorio manuel foster.</p>
                        </div>
                    </div>
                </div>
            </div>


            <Piefinal />

        </div>
    )

}

export default NoticiasPages;