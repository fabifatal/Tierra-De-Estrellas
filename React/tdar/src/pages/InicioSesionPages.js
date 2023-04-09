import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import NavMenu from "../components/NavMenu";
import Piefinal from "../components/PieFinal";

const InicioSesionPages = () => {

    return (
        <div>
            <NavMenu className="menux" />

            <div className="box">
                <div className="iniciosesion">
                    <div className="top-header">
                        <header>Inicio Sesion</header>
                    </div>

                    <div className="input-field">
                        <input type="text" className="input" placeholder="Nombre" required />
                        <i className="bx bx-user"></i>
                    </div>

                    <div className="input-field">
                        <input type="password" className="input" placeholder="Contraseña" required />
                        <i className="bx bx-lock-alt"></i>
                    </div>

                    <div className="input-field">
                        <input type="submit" className="submit" value="Login" />
                    </div>

                    <div className="bottom">
                        <div className="left">
                            <input type="checkbox" id="check" />
                            <label for="check"> Recordar </label>
                        </div>

                        <div className="right">
                            <label><a href="/registrate">Registrate</a></label>

                        </div>
                    </div>
                </div>
            </div>
            <Piefinal />
        </div>
    )
}
export default InicioSesionPages;
