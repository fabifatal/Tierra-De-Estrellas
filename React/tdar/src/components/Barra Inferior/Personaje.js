import React from "react";
import "./Personaje.css";
import npc from "../../imagenes/img-juego/4x/Profe Maza Vector.png"


const Personaje = () => {
    return (<div className="contPersonaje">
        <img src={npc}/>
    </div>)
}

export default Personaje;