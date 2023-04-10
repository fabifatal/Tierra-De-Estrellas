import React from "react";

const EncabezadoInicio = () => {
  return (
    <div className="encabezado text-center">
      <div className="encabezado_container contenedor">
        <h1 className="encabezado_title">Aprende jugando</h1>
        <p className="encabezado_paragraph">¿Quieres saber cuánto afecta la Contaminación Lumínica a la astronomía en Chile?</p>
        <a href="/Historia"><button type="button" className="btn btn-info">Juega y Aprende</button></a>
      </div>
    </div>
  )
}
const EncabezadoNosotros = () => {
  return (
    <div className="encabezadoNosotros">
      <div className="encabezado_container container">
        <h1 className="encabezado_title">Nosotros</h1>
        <p className="encabezado_paragraph">Nuestro equipo está formado por personas con diferentes orígenes y habilidades, pero con un propósito en común: difundir la fascinante belleza del universo y concientizar sobre la importancia de proteger nuestro cielo nocturno.</p>
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
        Descubrimientos cósmicos:
        <br/>
        Lo último en noticias de astronomía que desafían nuestra comprensión del universo.
        </p>
      </div>
    </div>
  );
};

const EncabezadoAstronomia = () => {
  return (
    <div className="encabezadoAstronomia">
      <div className="encabezado_container container">
        <h1 className="encabezado_title">Conceptos</h1>
        <p className="encabezado_paragraph">
        Explorando los misterios del universo: 
        <br/>
        Conceptos fundamentales de astronomía para comprender el cosmos.
        </p>
      </div>
    </div>
  );
};

const EncabezadoContaminacion = () => {
  return (
    <div className="encabezadoContaminacion">
      <div className="encabezado_container container">
        <h1 className="encabezado_title">Contaminación Luminíca</h1>
        <p className="encabezado_paragraph">
        Te invito a saber sobre la Contaminación Luminíca
        <br/>
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
  EncabezadoContaminacion,
};