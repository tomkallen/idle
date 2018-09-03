import React, { Component } from 'react'
import './BuildingBuyButton.css'

class BuildingBuyButton extends Component {
  render () {
    return (
      <button
        onClick={this.props.handleClick}
        className={this.props.enabled ?'itemicon': 'itemicon disabled'}>
        {this.props.enabled ? "Buy" :"X"}
      </button>
    )
  }
}

export default BuildingBuyButton

