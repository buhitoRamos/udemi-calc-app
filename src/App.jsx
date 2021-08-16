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
  const keyImput = key  => {
    console.log(key)
    console.log(`presiono tecla ${key.key}`);
    const number = key.code.includes("Numpad") && 
    !key.code.includes("NumpadEnter") ?
   words(key.key,  /[^-^+^*^/]+/g ) : false;
    console.log(`el valor de number es ${number}`)
    if(number.length > 0) { 
      setStack(`${stack}${number}`)
    } else {
    let matOperation = key.code.includes("Divide") ||
    key.code.includes("Numpad") ||
    key.code.includes("Add") ||
    key.code.includes("Mult") ||
    key.code.includes("Sub") ?
    key.key : false;
    if(matOperation && matOperation !=="Enter") {
      setStack(`${stack}${matOperation}`)
    } else {
     // setStack(`${eval(stack).toString()}`)
    }

    }
    

  }
 


  // Lo que ejecuta la funcion 
  //template literals o string son para concatenar string ecmaS 6 
  // para diferenciasr operaciones aritmeticas de concatenacion de strings `${a} ${b}`
  return (
    <main className='react-calculator' onKeyUp= {(key)=> keyImput(key)}>
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