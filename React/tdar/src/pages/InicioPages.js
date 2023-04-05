import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import  { NavMenuInicio } from "../components/NavMenu";
import { EncabezadoInicio } from "../components/Encabezados";
import { BajoEncabezadoInicio } from "../components/Comparacion";
import { CarrucelInicio } from "../components/Carrucel";
import Piefinal from "../components/PieFinal";

const InicioPages = () => {
    return (
        <div className="InicioGeneral">

            <NavMenuInicio/>

            <EncabezadoInicio/>

            <BajoEncabezadoInicio/>

            <CarrucelInicio/>

            <Piefinal/>

        </div>
    )

}
export default InicioPages;

