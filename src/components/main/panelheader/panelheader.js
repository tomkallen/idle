import React from 'react'
import './panelheader.css'

const PanelHeader = ({children, closeButton, onClick}) =>
  <div className={'panelheader'}>
    {children}
    {closeButton &&
    <span onClick={onClick}>x</span>
    }
  </div>

export default PanelHeader