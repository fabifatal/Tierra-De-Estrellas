import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import  { NavMenuNosotros } from "../components/NavMenu";
import { EncabezadoNosotros } from "../components/Encabezados";
import { BajoEncabezadoNosotros } from "../components/Comparacion";
import { CarrucelNosotros } from "../components/Carrucel";
import Piefinal from "../components/PieFinal";


const NosotrosPages =( ) =>{
return(
    <div className="NosotrosGeneral">

    <NavMenuNosotros/>

    <EncabezadoNosotros/>

    <BajoEncabezadoNosotros/>

    <CarrucelNosotros/>

    <Piefinal/>

</div>

)


}

export default NosotrosPages;