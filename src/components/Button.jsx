import React from 'react'
  const Button = ({text, type, clickHandler}) => {
      return (
          <button className={type} onClick={()=> clickHandler(text)}>
              <span>{text}</span>
          </button>
      )

  }
  export default Button