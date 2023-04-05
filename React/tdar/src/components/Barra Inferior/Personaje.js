import React from "react";
import "./Personaje.css";
import npc from "../../imagenes/img-barrainferior/NPC.png"


const Personaje = () => {
    return (<div className="contPersonaje">
        <img src={npc}/>
    </div>)
}

export default Personaje;