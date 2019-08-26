import React, {useState,useEffect} from 'react';
import Buscador from './components/Buscador';

// 13423305-560615782599bc88e2edb8fa7 api key

// url https://pixabay.com/api/?key=13423305-560615782599bc88e2edb8fa7

const App = () => {


  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState({});

  useEffect(()=>{

    const consultarApi = async () => {

      if ( busqueda === '') return;

      const token = '13423305-560615782599bc88e2edb8fa7';
      const cantidadPorPagina = 30;
      const url = `https://pixabay.com/api/?key=${token}&q=${busqueda}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setResultados(resultado);
      console.log();
      


    }

    consultarApi();


  },[busqueda])

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">
          Buscador de imagenes
        </p>
        <Buscador
          setBusqueda={setBusqueda}
        />
      </div>
      <div className="row justify-content-center">
       
      </div>
    </div>
  );
};

export default App;