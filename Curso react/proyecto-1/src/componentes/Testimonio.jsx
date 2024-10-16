import React from 'react';
import '../hojas-de-estilos/Testimonios.css'

export function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' 
      src={require(`../imagenes/testimonio-${props.imagen}.jpeg`)}
      alt='Imagen 1'/>

    <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'>{props.nombre}</p>
      <p className='cargo-testimonio'>{props.cargo}</p>
      <p className='texto-testimonio'>{props.testimonio}</p>
    </div>
    </div>
  );
}