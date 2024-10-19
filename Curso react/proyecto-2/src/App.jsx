import './App.css';
import logo from './imagenes/Sparco-Logo.png';
import {Boton} from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numeroDeClicks, setNumeroDeClicks] = useState(0);

  const manejarClick = () => {
    setNumeroDeClicks(numeroDeClicks + 1)
  }

  const reiniciarContador = () => {
    setNumeroDeClicks(0)
  }

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img className='logo-sparco' src={logo} alt="Logo de sparco" />
      </div>
      <div className='contenedor-principal'>
        <Contador numeroDeClicks={numeroDeClicks}/>
        <Boton texto='Click' esBotonDeClick={true} manejarClick={manejarClick} />
        <Boton texto='Reiniciar' esBotonDeClick={false} manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
