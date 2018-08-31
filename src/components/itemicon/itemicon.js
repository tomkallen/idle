import React, { Component } from 'react'
import './itemicon.css'

class ItemIcon extends Component {
  render () {
    return (
      <div
        onClick={this.props.handleClick}
        className={this.props.enabled ?'itemicon': 'itemicon disabled'}>
        {this.props.enabled ? "BUY" :"X"}
      </div>
    )
  }
}

export default ItemIcon

