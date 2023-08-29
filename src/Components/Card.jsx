import { useState } from "react";
import "../style/card.css";



export const Card = ({ imagen, titulo, descripcion, precios, handleAgregar, handleQuitar, handleAumentar, handleDisminuir }) => {
  const [added, setAdded] = useState(false);


  const clickAgregar=  () => {
    handleAgregar()
    setAdded(true)
  }

  const clickQuitar= () => {
    handleQuitar()
    setAdded(false)
  }



  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen"></img>
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precios}</p>
        {added ? (
          <button type="button" className="boton-quitar" onClick={clickQuitar} >
            Quitar al carrito
          </button>
        ) : (
          <button type="button" className="boton-agregar" onClick={clickAgregar} >
            Agregar carrito
          </button>
        )}
      </div>
    </div>
  );
};
