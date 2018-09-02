import React from 'react'
import './panelheader.css'

const PanelHeader = ({children, closeButton}) =>
  <div className={'panelheader'}>
    {children}
  </div>

export default PanelHeader