import React from "react";
import Contlum from "../imagenes/contaminacion-luminica88398.jpg"
import EclipseChile from "../imagenes/eclipse-chile.jpg"
import NavMenu from "../components/NavMenu";
import { EncabezadoContaminacion } from "../components/Encabezados";
import Piefinal from "../components/PieFinal";

const ContaminacionLuminica = () => {
  return (<div className="container-fluid">

    <NavMenu />

    <EncabezadoContaminacion />

    <div class="card mb-3">
      <div class="card-body">
        <h2 class="card-title">¿QUÉ ES LA CONTAMINACIÓN LUMÍNICA?</h2>
        <p class="card-text">La contaminación lumínica es la emisión excesiva o ineficiente de luz artificial en exteriores, alterando la oscuridad natural de la noche con efectos negativos en la salud y la vida de los seres vivos. Es un problema global que desperdicia luz y afecta la economía, el medio ambiente y la astronomía. Es vital reducir la emisión de luz artificial para proteger los cielos nocturnos.</p>
        <h5 class="card-title">Visita la página del Ministerio del Medio Ambiente para más información sobre la Contaminación Lumínica.
          <a href="https://luminica.mma.gob.cl/" class="btn btn-primary">Pincha Aquí</a>
        </h5>
      </div>
      <img src={Contlum} class="card-img-top" alt="..." />
    </div>
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">La Contaminación Lumínica y su Impacto en Chile</h2>
        <p class="card-text">Chile es afectado por la contaminación lumínica debido a su rol en la observación astronómica. La calidad de los cielos nocturnos es fundamental para el turismo y la economía del país, y la contaminación lumínica puede interferir con la operación de los observatorios astronómicos, poniendo en peligro la posición de liderazgo de Chile en la comunidad astronómica mundial. Se están tomando medidas para minimizar el impacto, como la regulación de la iluminación y la promoción de ciudades inteligentes.</p>

        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Revisa aqui el informe del ministerio del medio ambiente</h5>
                <p class="card-text">Informe 2019</p>
                <a href="https://sinia.mma.gob.cl/wp-content/uploads/2019/12/Contaminaci%C3%B3n-Lum%C3%ADnica-REMA-2019.pdf" class="btn btn-primary">Pincha Aquí</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Revisa aqui el informe del ministerio del medio ambiente</h5>
                <p class="card-text">Informe 2020</p>
                <a href="https://sinia.mma.gob.cl/wp-content/uploads/2021/04/11-contaminacion-luminica.pdf" class="btn btn-primary">Pincha Aquí</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={EclipseChile} class="card-img-bottom" alt="..." />
    </div>


    <Piefinal />

  </div>
  )
}

export default ContaminacionLuminica;