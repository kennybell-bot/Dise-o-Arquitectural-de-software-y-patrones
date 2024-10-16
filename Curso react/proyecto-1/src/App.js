import './App.css';
import { Testimonio } from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Testimonios ficticios de gente ficticia</h1>
      <Testimonio 
        nombre = 'Abraham Selano'
        cargo = 'Ingeniero de pendejadas'
        imagen = '1'
        testimonio = 'Me encanta trabajar en esta empresa porque me pagan para hacer nada y pendejear todo el dia'
      />

      <Testimonio 
        nombre = 'Elkin Melo Lima'
        cargo = 'Ingeniero de mkdas'
        imagen = '2'
        testimonio = 'Me encanta trabajar en esta empresa porque me pagan por mkear todo el dia'
      />

      <Testimonio 
        nombre = 'Alma Marcela Silva de Alegria'
        cargo = 'Ingeniera de mmdas'
        imagen = '3'
        testimonio = 'Me encanta trabajar en esta empresa porque me pagan por mamar gallo todo el dia'
      />
      </div>
    </div>
  );
}

export default App;
