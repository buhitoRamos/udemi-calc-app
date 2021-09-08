/* eslint no-eval: 0 */
import React, { useState } from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import words from 'lodash.words'
import './App.css'
import Result from './components/Result'

const App = () => {
  const [stack, setStack] = useState("");
  const [isHistory, setIsHistory] = useState(false);
  const items = words(stack, /[^-^+^*^/]+/g);
  const value = items.length > 0 ? items[items.length - 1] : "0";
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const mathOperations = ['+', '-', '*', '/'];
  const _keyInput = key => {

    const value = numbers.find(number => number === key.key);
    if (value) {
      setStack(`${stack}${value}`);
    } else {
      const operation = mathOperations.find(mathOp => mathOp === key.key);
      if (operation) {
        setStack(`${stack}${operation}`);
      }
      const equals = key.key === '=' ? true : false;
      if (equals) {
        _equals();
      }
    }
  }
  const _equals = () => {
    if (stack && stack > 0) {
      try {
        setStack(`${eval(stack).toString()}`)
      } catch (e) {
        setStack("Error")
      }
      
    } else if (stack) {
      try {
        setStack(`${eval(stack)}`)
      } catch (e) {
        setStack("Error")
      }
    }
  }
  const _history = () => {
    let resultado = '';
   
    if (isHistory) {
      resultado =
        (
          <Result
            value={stack}
            classType={"history"}
            isHistory={true}
            />
        )
    }
    
    return resultado
  }



  return (
    <main className='react-calculator' onKeyUp={(key) => _keyInput(key)}>
      {
        _history()
      }
      <Result value={value}
        classType={"result"} />
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
        showHistory={() => setIsHistory(!isHistory)}
      />
      <MathOperations
        onClickOperation={operation => setStack(`${stack}${operation}`)}
        onClickEqual={() => _equals()}
      />
    </main>)

}

export default App