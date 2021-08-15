/* eslint no-eval: 0 */
import React, { useState } from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import words from 'lodash.words'
import './App.css'
import Result from './components/Result'

// Generamos la función del compoente
const App = () => {
  const [stack, setStack] = useState("");
  const items = words(stack, /[^-^+^*^/]+/g);
  const value = items.length > 0 ? items[items.length - 1] : "0";
  console.log(items)


  // Lo que ejecuta la funcion 
  //template literals o string son para concatenar string ecmaS 6 
  // para diferenciasr operaciones aritmeticas de concatenacion de strings `${a} ${b}`
  return (
    <main className='react-calculator'>
      <Result value={value} />
      <Numbers onClickNumber={number => setStack(`${stack}${number}`)}
      />
      <Functions
        onContentClear={() => setStack("")}
        onDelete={() => {
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack)
          }
        }
        }
      />
      <MathOperations
        onClickOperation={operation => setStack(`${stack}${operation}`)}
        onClickEqual={() => setStack(`${eval(stack).toString()}`)}
      />
    </main>)

}

//Exportación 

export default App