import React from "react";
import "./InicioPages.css";
import logo from "../imagenes/Logo/2x/Recurso 13@2x.png"
import LoopEstrellas from "../components/Inicio/LoopEstrellas";
import { Link } from "react-router-dom";

const InicioPages = () => {
  const tituloInicio = "Inicio";

  return (
    <div className="inicioDiv">
      <div className="estrellasinicio"><LoopEstrellas/></div>
      <div className="inicioTitle">
        <Link to="/Juego"> 
        <img src={logo} alt="logo" className="inicio-boton"/>
        </Link>
      </div>
    </div>
  );
};
export default InicioPages;
