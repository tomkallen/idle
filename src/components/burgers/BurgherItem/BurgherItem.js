import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './BurgherItem.css'
import ui from "../../../resources/ui/ui"

class BurgherItem extends Component {

  getResources = (type) => {
    return this.props.burger[type].map(res => <span>{res.amount} {res.type}</span>)
  }

  render () {
    const burger = this.props.burger

    return <div className={'BurgerItem'}>
      <div className={'image'}>
        <img src={burger.image}/>
      </div>
      <div className={'cell'}>
        <div className={'BurgerItem-title'}><span>{burger.name}</span></div>
        <div>{burger.description}</div>
      </div>
      <div className={'cell'}>
        <div className={'BurgerItem-resources'}><img src={ui.arrowDown}/> {this.getResources('consumes')}</div>
        <div className={'BurgerItem-resources'}><img src={ui.arrowUp}/> {this.getResources('produces')}</div>
      </div>
    </div>
  }
}

export default BurgherItem

BurgherItem.propTypes = {
  burger: PropTypes.object.isRequired
}
