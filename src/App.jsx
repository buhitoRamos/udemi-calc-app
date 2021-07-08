import React from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import './App.css'
import Result from './components/Result'

// Generamos la función del compoente
const App = () => {

  const onClickNumbers = text => {
    console.log(text)
  }
  const onClickOperation = operation => {
    console.log(operation)
  }
  const onClickEqual = equals => {
    console.log(equals)
  }
  // Lo que ejecuta la funcion 
  return (
    <main className='react-calculator'>
      <Result value={'10'} />
      <Numbers clickHandler={onClickNumbers} />
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