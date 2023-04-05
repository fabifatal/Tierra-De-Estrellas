import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import  NavMenu from "../components/NavMenu";
import { EncabezadoInicio } from "../components/Encabezados";
import { BajoEncabezadoInicio } from "../components/Comparacion";
import { CarrucelInicio } from "../components/Carrucel";
import Piefinal from "../components/PieFinal";

const InicioPages = () => {

    const tituloInicio = "Inicio";

    return (
        <div>

            <NavMenu className="menux"/>

            <EncabezadoInicio titulo={tituloInicio}/>

            <BajoEncabezadoInicio/>

            <CarrucelInicio/>

            <Piefinal/>

        </div>
    )

}
export default InicioPages;

