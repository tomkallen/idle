import React from 'react'
import './Panel.css'
import PanelHeader from '../PanelHeader/PanelHeader'
import PropTypes from 'prop-types'

const Panel = ({ children, header, closeButton, onClick, wide }) =>
  <div className={wide ? 'Panel wide' : 'Panel'}>
    <PanelHeader
      closeButton={closeButton}
      onClick={onClick}>
      {header}
    </PanelHeader>
    {children}
  </div>

export default Panel

Panel.propTypes = {
  header: PropTypes.string.isRequired,
  closeButton: PropTypes.bool,
  wide: PropTypes.bool
}
