import React, { Component } from 'react'
import './BuildingBar.css'
import BuildingPrice from '../BuildingPrice/BuildingPrice'
import BuildingBuyButton from '../BuildingBuyButton/BuildingBuyButton'
import BuildingTitle from '../BuildingTitle/BuildingTitle'
import { observer, inject } from 'mobx-react'
import store from '../../../store'

@inject('store')
@observer
class BuildingBar extends Component {

  levelUp = () => this.props.store.levelUp(this.props.building.index)

  render () {
    let {building, resources} = this.props
    const price = building.getPrice()
    const enabled  = price <= resources.gold

    return (
      <div className={'itembar'}>
        <div className={'itembar-body'}>
          <div className="itembar-header">
            <BuildingTitle title={building.name} level={building.level}/>
          </div>
          <div className="itembar-body-footer">
            <div className={'itembar-body-footer-produces'}>+{building.getSpeed()} {building.produces} / sec</div>
            <BuildingPrice currency={building.currency} price={price}/>
          </div>
        </div>
        <BuildingBuyButton enabled={enabled} handleClick={this.levelUp}/>

      </div>)
  }
}

export default BuildingBar

