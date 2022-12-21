import React from 'react';
import './App.css';
import Formulario from './componentes/formulario';
import fotoviola from './imagenes/foto-viola.jpg'
import { GiViolin } from "react-icons/gi";


function App() {
  return (
    <div>
      <h1>David Gallello</h1>
      <h2><GiViolin/> Violista  <GiViolin/></h2>
      <img
        src={fotoviola}
        className='foto-viola-1.jpg'></img>
      <p>David Gallello es Licenciado en Perfeccionamiento Instrumental, con especialización
        en Viola por la Universidad Nacional de Córdoba.
        Estudió en Argentina con Finlay Ferguson (Profesor de la UNC), Alberto Lepage
        (Solista de Viola en la Orquesta Sinfónica de Córdoba), Silvina Álvarez (Suplente
        Solista en la Orquesta Filarmónica de Buenos Aires), y en Estados Unidos con Toby
        Appel (Profesor de The Juilliard School de Nueva York).
        Participó en Seminarios y Festivales de música nacionales e internacionales, como
        el 3er Encuentro Internacional Argentino - Chileno de Músicos (Tucumán) y el
        Festival de Música de Santa Catarina (Jaraguá do Sul, Brasil).
        Su labor en el campo de la docencia comprende la enseñanza de Viola en
        Orquestas-Escuela con el Sistema SOIJAR, como Profesor en la Escuela de Música
        Shinichi Suzuki, Profesor en el Conservatorio Provincial de Cruz del Eje (Córdoba) y
        Profesor Adscripto de la Cátedra Viola V en la Facultad de Artes de la Universidad
        Nacional de Córdoba.
        Se ha desempeñado como Violista de Fila en la Orquesta Nacional y Juvenil del
        Bicentenario, en la Orquesta Sinfónica de Córdoba, en la Orquesta Filarmónica de
        Río Negro. Actualmente es el Solista de Viola en la Orquesta Sinfónica de la
        Universidad Nacional de Córdoba.</p>
      <Formulario />
    </div>

  )
}

export default App;
