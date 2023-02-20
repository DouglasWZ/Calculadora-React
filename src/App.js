import './App.css';
import freeCodeCampLogo from './images/FreeCodeCampLogo.png'
import Boton from './components/boton';
import Pantalla from './components/pantalla'
import BotonClear from './components/botonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    setInput(input + val);
  }

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por Favor Ingrese valores para realizar los cálculos');
    }
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de FreeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}> {/*Otra forma de llamar una funcion, creandola ahi mismo, tambien se puede hacer de la otra forma, como se creo la funcion de agregarInput */}
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

// TEMAS A EVALUAR EN ESTE PORYECTO
// props.children
// componentes con una etiqueta de apertura y una de cierre
// Instalar una libreria externa (math.js)

export default App;
