import React, { Component } from 'react'
import './tab.css'

export default class Tab extends Component {
  getClass = () => {
    if (this.props.active) return 'tab active'
    if (this.props.disabled) return 'tab disabled'
    return 'tab '
  }

  handleClick = () => {
    if (this.props.disabled) return
    this.props.onClick && this.props.onClick()
  }

  render () {
    return (
      <div
        onClick={this.handleClick}
        className={this.getClass()}>
        {this.props.children}
      </div>
    )
  }
}
