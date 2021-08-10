import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'
//podemos eliminar las llaves y return cuando la funcion solo tiene un retorno, se puede quitar return 
// y dejar solo los parentesis

const Button = ({ text, type, clickHandler }) => {
 
  return (
    <button className={type} onClick={() => clickHandler(text)}>
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}
export default Button