import React from "react";
import '../hojas-de-estilos/Boton.css'

export function Boton({texto, esBotonDeClick, manejarClick}){
    return(
        <button className={ esBotonDeClick ? "boton1" : "boton2" } onClick={manejarClick}>
            {texto}
        </button>
    )
}