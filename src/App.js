import './App.css';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import Boton from './componentes/boton';
import { useState } from 'react';
import { evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState(' ');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input));
    }else{
      alert("ingrese Valores")
    }
    
  };
  



  return (
    <div className="App">
      <div className='nombre__contenedor'>
        <h1>Calculadora</h1>
      </div>

      <div className='contenedor__calculadora'>
        <Pantalla input={input}/>

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
          <BotonClear manejarClear={() => setInput(' ')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
