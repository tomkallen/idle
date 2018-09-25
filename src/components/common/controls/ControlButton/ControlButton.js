import React from 'react'
import './ControlButton.css'
import PropTypes from 'prop-types'

const ControlButton = (props) =>
  <div
    onClick={props.onClick}
    title={props.title}
    className={'ControlButton'}>A</div>

export default ControlButton

ControlButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool
}

ControlButton.defaultProps = {
  active: true
}
