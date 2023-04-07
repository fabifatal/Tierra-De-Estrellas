import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import NavMenu from "../components/NavMenu";
import Piefinal from "../components/PieFinal";

const RegistratePage = () => {

    return (
        <div>
            <NavMenu className="menux" />
            <div className="box">
            <div className="form-register">
                <h4>Registrate</h4>
                <input className="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre" />
                <input className="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido" />
                <input className="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo" />
                <input className="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña" />
                <input className="botons" type="submit" value="Registrar" />
                <p><a href="/InicioSesion">Ya tengo cuenta</a></p>

            </div>
            </div>

            <Piefinal />

        </div>
    )

}
export default RegistratePage;
