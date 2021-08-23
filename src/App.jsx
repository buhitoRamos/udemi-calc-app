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
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const mathOperations = ['+', '-', '*', '/'];
  const _keyInput = key  => {
    
    const value = numbers.find(number => number === key.key);
    if (value) {
      setStack(`${stack}${value}`);
    } else {
      const operation = mathOperations.find(mathOp => mathOp === key.key);
      if( operation) {
        setStack(`${stack}${operation}`);
      } 
        const equals = key.key === '=' ? true : false;
        if(equals) {
          _equals();   
        }
    }
  }
  const _equals = ()=> {
    if (stack && stack > 0) {
      setStack(`${eval(stack).toString()}`)
    } else if(stack) {
      setStack(`${eval(stack)}`)
    }
  }
 


  // Lo que ejecuta la funcion 
  //template literals o string son para concatenar string ecmaS 6 
  // para diferenciasr operaciones aritmeticas de concatenacion de strings `${a} ${b}`
  return (
    <main className='react-calculator' onKeyUp= {(key)=> _keyInput(key)}>
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
        onClickEqual={() => _equals()}
      />
    </main>)

}

//Exportación 

export default App