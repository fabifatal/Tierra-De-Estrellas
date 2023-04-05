import React from "react";
import facebook from "../imagenes/facebook.svg"
import ig from "../imagenes/instagrma.svg"
import wsp from "../imagenes/whatsapp.svg"
import email from"../imagenes/email.svg"



const Piefinal = () => {
    return (
        <div className="piefinal">
            <section className="piefinal_container container">
                <div clas="piefinal_social">
                    <a href="#" className="piefinal_icons"><img src= {facebook} className="piefinal_img" /></a>
                    <a href="#" className="piefinal_icons"><img src= {ig} className="piefinal_img" /></a>
                    <a href="#" className="piefinal_icons"><img src= {wsp} className="piefinal_img" /></a>
                    <a href="#" className="piefinal_icons"><img src= {email} className="piefinal_img" /></a>
                </div>

                <h3 className="piefinal_copyright">Derechos reservados &copy; Tierra De Estrellas</h3>
            </section>
        </div>
    )
}

export default Piefinal;