import React, { useRef } from "react";
import "./MapaUniverso.css";
import mapa from "../../imagenes/img-juego/mapa1.jpg";
import mapagrande from "../../imagenes/img-juego/eso0116a_El campo profundo Capodimonte.jpg"
import { useDraggable } from "react-use-draggable-scroll";



const MapaNocturno = () =>{
  const ref = useRef();
  const { events} = useDraggable(ref);
  return (<div className="contImgMapa"{...events} ref={ref}>
    <img className="imgMapa"src={mapagrande} alt="Campo Profundo Capodimonte"/>
 
  </div>

  )

}

// const MapaNocturno = () => {
//   return (
//     <div className="contMapa">
//       <div className="contContaminacion tamanioMapa">
//         <div className="contaminacionlum"></div>
//       </div>
//       <div className="contImgMapa tamanioMapa">
//         <img className="bg-img imgMapa" src={mapa} />
//       </div>
//     </div>
//   );
// };

export default MapaNocturno;
