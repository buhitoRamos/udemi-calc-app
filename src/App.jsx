import React from 'react'
import Button from './components/Button'
import './App.css'
import Result from './components/Result'

// Generamos la función del compoente
const App = ()=> {
    const clickHandler = text => {
        console.log(text)
    }
    // Lo que ejecuta la funcion 
    return (
    <main className='react-calculator'>
        <Result value={'10'}/>
        <div className="numbers">
            <Button text="1" clickHandler={clickHandler}/>
            <Button text="2" clickHandler={clickHandler}/>
            <Button text="3" clickHandler={clickHandler}/>
            <Button text="4" clickHandler={clickHandler}/>
            <Button text="5" clickHandler={clickHandler}/>
            <Button text="6" clickHandler={clickHandler}/>
            <Button text="7" clickHandler={clickHandler}/>
            <Button text="8" clickHandler={clickHandler}/>
            <Button text="9" clickHandler={clickHandler}/>
            <Button text="0" clickHandler={clickHandler}/>
        </div>
        <div className="functions">
            <button>clear</button>
            <button>r</button>
        </div>
        <div className="math-operations">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
            <button>=</button>
        </div>
       

    </main>)

}

//Exportación 

export default App