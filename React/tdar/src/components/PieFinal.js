import React from "react";
import facebook from "../imagenes/facebook.svg"
import ig from "../imagenes/instagrma.svg"

const Piefinal = () => {
    return (
        <div className="mt-2 piefinal">
            <section className="piefinal_container container">
                <div clas="piefinal_social">
                    <a href="https://www.facebook.com/profile.php?id=100091783688945" className="piefinal_icons"><img src= {facebook} className="piefinal_img" /></a>
                    <a href="https://www.instagram.com/tierradeestrellaschile/" className="piefinal_icons"><img src= {ig} className="piefinal_img" /></a>
                </div>

                <h6 className="piefinal_copyright">Derechos reservados &copy; Tierra De Estrellas</h6>
            </section>
        </div>
    )
}

export default Piefinal;