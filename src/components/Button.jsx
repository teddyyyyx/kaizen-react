import React from 'react'
import './button.scss'

export const Button = ({props}) => {
   let button_text = props;
  return (
    <button class="boton-elegante">
        {button_text}
    </button>
  )
}
