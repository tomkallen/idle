import React, { Component } from 'react'
import './servicebar.css'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class ServiceBar extends Component {

  render () {
    const {level, name, description, capacity, type, maxLevel, currency} = this.props.service
    const price = this.props.service.getPrice()
    const enabled = price <= this.props.store.resources.gold

    return <div className={'servicebar'}>
      <div className={'servicebar-left'}>
        <h3>{name}</h3>
        <h5>{description}</h5>
      </div>
      <div className={'servicebar-right'}>
        <p>capacity: <span>{capacity} {type} </span>/ level</p>
        <p>level: <span>{level} / {maxLevel}</span></p>
        <p>price: <span>{price} {currency}</span></p>
      </div>
      <div className={'servicebar-bottom'}>
        {enabled && <button>Upgrade</button>}
      </div>
    </div>
  }
}

export default ServiceBar
