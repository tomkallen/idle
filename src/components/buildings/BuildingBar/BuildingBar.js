import React, { Component } from 'react'
import './BuildingBar.css'
import Currency from '../../common/Currency/Currency'
import { observer, inject } from 'mobx-react'
import store from '../../../store'

@inject('store')
@observer
class BuildingBar extends Component {

  levelUp = () => this.props.store.levelUp(this.props.building.index)

  render () {
    let {building, resources} = this.props
    const price = building.getPrice()
    const enabled = price <= resources.gold

    return (
      <div className={'itembar'}>
        <div className={'itembar-body'}>
          <div className="itembar-header">
            <div className={'itembar-title'}>
              <span className={'itembar-title-name'}>{building.name}</span>
              {building.level ? <span className={'itembar-level'}>x {building.level}</span> : null}
            </div>
          </div>
          <div className="itembar-body-footer">
            <div className={'itembar-body-footer-produces'}>+{building.getSpeed()} {building.produces} / sec</div>
          </div>
        </div>
        <button
          onClick={() => enabled && this.levelUp()}
          className={enabled ? 'buy-button' : 'buy-button disabled'}>
          <Currency currency={building.currency}/>
          {price}
        </button>
      </div>)
  }
}

export default BuildingBar

