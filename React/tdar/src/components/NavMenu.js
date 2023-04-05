import React from "react";
import x from "../imagenes/close.svg"
import menu from "../imagenes/menu.svg"
import { Link } from "react-router-dom";


const NavMenuInicio = () => {
    return (
        <div className="menux">
            <nav className="menu container">
                <div className="menu_logo">

                    <h2 className="menu_title">Tierra De Estrellas</h2>
                    <br />
                </div>

                <ul className="menu_link">

                    <li className="menu_items">
                        <Link to="/" className="menu_links">Inicio</Link>
                    </li>
                    <li className="menu_items">
                        <Link to="/Nosotros" className="menu_links">Nosotros</Link>
                    </li>
                    <li className="menu_items">
                    <Link to="/Astronomia" className="menu_links">Astronomia</Link>
                    </li>
                    <li className="menu_items">
                        <Link to="/Noticias" className="menu_links">Noticias</Link>
                    </li>
                    <li className="menu_items">
                        <a href="#" className="menu_links">JUGAR</a>
                    </li>
                    <li className="menu_items">
                        <a href="#" className="menu_links">Inicio Sesion </a>
                    </li>

                    <img src={x} className="menu_close" />

                </ul>

                <div className="menu_menu">
                    <img src={menu} className="menu_img" />
                </div>

            </nav>
        </div>

    )
}

const NavMenuNosotros = () => {
    return (
        <div className="menux">
            <nav className="menu container">
                <div className="menu_logo">

                    <h2 className="menu_title">Tierra De Estrellas</h2>
                    <br />
                </div>

                <ul className="menu_link">

                    <li className="menu_items">
                        <Link to="/" className="menu_links">Inicio</Link>
                    </li>
                    <li className="menu_items">
                        <Link to="/Nosotros" className="menu_links">Nosotros</Link>
                    </li>
                    <li className="menu_items">
                    <Link to="/Astronomia" className="menu_links">Astronomia</Link>
                    </li>
                    <li className="menu_items">
                        <Link to="/Noticias" className="menu_links">Noticias</Link>
                    </li>
                    <li className="menu_items">
                        <a href="#" className="menu_links">JUGAR</a>
                    </li>
                    <li className="menu_items">
                        <a href="#" className="menu_links">Inicio Sesion </a>
                    </li>

                    <img src={x} className="menu_close" />

                </ul>

                <div className="menu_menu">
                    <img src={menu} className="menu_img" />
                </div>

            </nav>
        </div>

    )
}

const NavMenuNoticias = () => {
    return (
        <div className="menux">
            <nav className="menu container">
                <div className="menu_logo">

                    <h2 className="menu_title">Tierra De Estrellas</h2>
                    <br />
                </div>

                <ul className="menu_link">

                    <li className="menu_items">
                        <Link to="/" className="menu_links">Inicio</Link>
                    </li>
                    <li className="menu_items">
                        <Link to="/Nosotros" className="menu_links">Nosotros</Link>
                    </li>
                    <li className="menu_items">
                    <Link to="/Astronomia" className="menu_links">Astronomia</Link>
                    </li>
                    <li className="menu_items">
                        <Link to="/Noticias" className="menu_links">Noticias</Link>
                    </li>
                    <li className="menu_items">
                        <a href="#" className="menu_links">JUGAR</a>
                    </li>
                    <li className="menu_items">
                        <a href="#" className="menu_links">Inicio Sesion </a>
                    </li>

                    <img src={x} className="menu_close" />

                </ul>

                <div className="menu_menu">
                    <img src={menu} className="menu_img" />
                </div>

            </nav>
        </div>

    )
}

const NavMenuAstronomia = () => {
    return (
        <div className="menux">
            <nav className="menu container">
                <div className="menu_logo">

                    <h4 className="menu_title">Tierra De Estrellas</h4>
                    <br />
                </div>

                <ul className="menu_link">

                    <li className="menu_items">
                        <Link to="/" className="menu_links">Inicio</Link>
                    </li>
                    <li className="menu_items">
                        <Link to="/Nosotros" className="menu_links">Nosotros</Link>
                    </li>
                    <li className="menu_items">
                    <Link to="/Astronomia" className="menu_links">Astronomia</Link>
                    </li>
                    <li className="menu_items">
                        <Link to="/Noticias" className="menu_links">Noticias</Link>
                    </li>
                    <li className="menu_items">
                        <a href="#" className="menu_links">JUGAR</a>
                    </li>
                    <li className="menu_items">
                        <a href="#" className="menu_links">Inicio Sesion </a>
                    </li>

                    <img src={x} className="menu_close" />

                </ul>

                <div className="menu_menu">
                    <img src={menu} className="menu_img" />
                </div>

            </nav>
        </div>

    )
}

export {NavMenuInicio,NavMenuNosotros,NavMenuNoticias,NavMenuAstronomia};