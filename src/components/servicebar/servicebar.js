import React, { Component } from 'react'
import './servicebar.css'
import { observer } from 'mobx-react'

@observer
class ServiceBar extends Component {

  render () {
    const {level, name, description, capacity, type, maxLevel, currency} = this.props.service

    return <div className={'servicebar'}>
      <div className={'servicebar-left'}>
        <h3>{name}</h3>
        <h5>{description}</h5>
      </div>
      <div className={'servicebar-right'}>
        <p>capacity: <span>{capacity} {type} </span>/ level</p>
        <p>level: <span>{level} / {maxLevel}</span></p>
        <p>price: <span>{this.props.service.getPrice()} {currency}</span></p>
      </div>
    </div>
  }
}

export default ServiceBar
