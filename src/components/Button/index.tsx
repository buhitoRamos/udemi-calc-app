import React, {FC} from 'react'
import './Button.css'
//podemos eliminar las llaves y return cuando la funcion solo tiene un retorno, se puede quitar return 
// y dejar solo los parentesis

export type ButtonClickHandler = (text: string)=> void
type Props = {
  text: string,
  type?: string,
  clickHandler: ButtonClickHandler
}

const Button: FC<Props> = ({ text, type, clickHandler }) => {
 
  return (
    <button className={type} onClick={() => clickHandler(text)}>
      <span>{text}</span>
    </button>
  )
}

export default Button