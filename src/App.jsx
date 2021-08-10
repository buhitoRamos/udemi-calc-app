import React, { useState } from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import './App.css'
import Result from './components/Result'

// Generamos la función del compoente
const App = () => {
  const [stack, setStack] = useState("");

  const onClickOperation = operation => {
    console.log(operation)
  }
  const onClickEqual = equals => {
    console.log(equals)
  }
  // Lo que ejecuta la funcion 
  //template literals o string son para concatenar string ecmaS 6 
  // para diferenciasr operaciones aritmeticas de concatenacion de strings `${a} ${b}`
  return (
    <main className='react-calculator'>
      <Result value={stack} />
      <Numbers onClickNumber={number => setStack(`${stack}${number}`)} 
      />
      <Functions
        onContentClear={(text) => console.log('functionsClear:' + text)}
        onDelete={(text) => console.log('functionsDelete:' + text)}
      />
      <MathOperations
        onClickOperation={onClickOperation}
        onClickEqual={onClickEqual}
      />
    </main>)

}

//Exportación 

export default App