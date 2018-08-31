import React, { Component } from 'react'
import './tab.css'

export default class Tab extends Component {
  render () {
    return (
      <div className={this.props.active ? 'tab active' : 'tab'}>
        {this.props.children}
      </div>
    )
  }
}