import React, { Component } from 'react'
import './tab.css'

export default class Tab extends Component {
  render () {
    return (
      <div
        onClick={this.props.onClick}
        className={this.props.active ? 'tab active' : 'tab'}>
        {this.props.children}
      </div>
    )
  }
}