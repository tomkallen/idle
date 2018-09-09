import React from 'react'
import "./Button.css"

const Button = (props) =>
  <button
    onClick={props.onClick}
    className={props.enabled ? 'Button':'Button disabled'}>
    {props.children}
  </button>

export default Button