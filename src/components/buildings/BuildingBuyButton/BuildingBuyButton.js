import React, { Component } from 'react'
import './BuildingBuyButton.css'

class BuildingBuyButton extends Component {
  render () {
    return (
      <div
        onClick={this.props.handleClick}
        className={this.props.enabled ?'itemicon': 'itemicon disabled'}>
        {this.props.enabled ? "Buy" :"X"}
      </div>
    )
  }
}

export default BuildingBuyButton

