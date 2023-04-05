import React from "react";
import NavBar from "../components/NavBar";
import Contlum from "../imagenes/contaminacion-luminica88398.jpg"
import "./ContaminacionLuminicaPage.css"

const ContaminacionLuminica = () => {
  return (<div className="container-fluid">
    <NavBar />
    <h1>
      Contaminacion Luminica
    </h1>
    <div className="contcontaminacion">
      <div id="parrafo">
        <h1>¿QUÉ ES LA CONTAMINACIÓN LUMÍNICA?</h1>
        <p>
          La contaminación lumínica corresponde a la alteración de la oscuridad natural de la noche, provocada por luz desaprovechada, innecesaria o inadecuada, generada por el alumbrado de exteriores, la cual genera impactos en la salud y en la vida de los seres vivos.
          Es un problema global, que afecta en especial a las ciudades, pero no de manera exclusiva.
          La contaminación lumínica involucra siempre un desperdicio de luz:
          <ul>
            <li type="disc">Ya sea porque no se ilumina el objetivo: suelo, construcción, etc. y por ello la luz se escapa o dispersa al horizonte o al cielo directamente.</li>
            <li type="disc">Porque se ocupa en momentos innecesarios o en la cantidad innecesaria.</li>
            <li type="disc">Porque se emite en un espectro no útil para la visión humana, pero que afecta a otros seres vivos o actividades como la observación astronómica.</li>
          </ul>
        </p>
      </div>
      <div id="centrador">
        <img id="imagen" src={Contlum} />
      </div>
    </div>
  </div>

  )
}

export default ContaminacionLuminica;