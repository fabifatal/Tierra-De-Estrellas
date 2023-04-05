import React from "react";
import { Container, Image } from "react-bootstrap";
import imgInicio from "../imagenes/Inicio.jpg";

const EncabezadoInicio = () => {
    return (
    <div className="encabezado text-center">
        <div className="encabezado_container contenedor">
            <h1 className="encabezado_title">Aprende jugando</h1>
            <p className="encabezado_paragraph">¿Quieres saber cuanto afecta la Contaminacion Luminica a la astronomia en Chile?</p>
            <a href="#"><button type="button" className="btn btn-info">Juega y Aprende</button></a>
        </div>
    </div>
    )
}
const EncabezadoNosotros = () => {
  return (
    <div className="encabezadoNosotros">
      <div className="encabezado_container container">
        <h1 className="encabezado_title">Nosotros</h1>
        <p className="encabezado_paragraph">Conoce quienes estan detras</p>
      </div>
    </div>
  );
};
const EncabezadoNoticias = () => {
  return (
    <div className="encabezadoNoticias">
      <div className="encabezado_container container">
        <h1 className="encabezado_title">Noticias</h1>
        <p className="encabezado_paragraph">
          Enterate de las novedades que hay sobre la astronomia
        </p>
      </div>
    </div>
  );
};

const EncabezadoAstronomia = () => {
  return (
    <div className="encabezadoNoticias">
      <div className="encabezado_container container">
        <h1 className="encabezado_title">Conceptos</h1>
        <p className="encabezado_paragraph">
          Conoce mas sobre temas generales de astronomia{" "}
        </p>
      </div>
    </div>
  );
};

export {
  EncabezadoInicio,
  EncabezadoNosotros,
  EncabezadoNoticias,
  EncabezadoAstronomia,
};
