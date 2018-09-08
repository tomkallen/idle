import React from 'react'
import './Panel.css'
import PanelHeader from '../PanelHeader/PanelHeader'

const Panel = ({children, header, closeButton, onClick}) =>
  <div className={'Panel'}>
    <PanelHeader
      closeButton={closeButton}
      onClick={onClick}>
      {header}
    </PanelHeader>
    {children}
  </div>

export default Panel