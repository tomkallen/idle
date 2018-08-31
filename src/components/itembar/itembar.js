import React, { Component } from 'react'
import './itembar.css'
import ItemPrice from '../itemprice/itemprice'
import ItemIcon from '../itemicon/itemicon'
import ItemTitle from '../itemtitle/itemtitle'
import { observer, inject } from 'mobx-react'
import store from '../../store'

@inject('store')
@observer
class ItemBar extends Component {

  levelUp = () => this.props.store.levelUp(this.props.building.index)

  render () {
    let {building, resources} = this.props
    const price = building.getPrice()
    const enabled  = price <= resources.gold

    return (
      <div className={'itembar'}>
        <div className={'itembar-body'}>
          <div className="itembar-header">
            <ItemTitle title={building.name} level={building.level}/>
          </div>
          <div className="itembar-body-footer">
            <div className={'itembar-body-footer-produces'}>+{building.getSpeed()} {building.produces} / sec</div>
            <ItemPrice currency={building.currency} price={price}/>
          </div>
        </div>
        <ItemIcon  enabled={enabled} handleClick={this.levelUp}/>

      </div>)
  }
}

export default ItemBar

