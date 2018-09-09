import React, { Component } from 'react'
import './ServiceBar.css'
import { observer, inject } from 'mobx-react'
import Button from '../../common/controls/Button/Button'

@inject('store')
@observer
class ServiceBar extends Component {

  render () {
    const {level, name, description, maxLevel, currency, index} = this.props.service
    const price = this.props.service.getPrice()
    const enabled = price <= this.props.store.resources.gold

    return <div className={'servicebar'}>
      <div className={'servicebar-left'}>
        <h3>{name}</h3>
        <h5>{description}</h5>
      </div>
      <div className={'servicebar-right'}>
        <p>capacity: <span>{this.props.service.getCapacity()}</span></p>
        <p>level: <span>{level} / {maxLevel}</span></p>
        <p>price: <span>{price} {currency}</span></p>
      </div>
      <div className={'servicebar-bottom'}>
        <Button
          onClick={() => this.props.store.upgrade(index)}
          enabled={enabled}
        >Upgrade</Button>
      </div>
    </div>
  }
}

export default ServiceBar
