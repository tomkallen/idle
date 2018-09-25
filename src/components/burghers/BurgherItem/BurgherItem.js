import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './BurgherItem.css'
import ui from '../../../resources/ui/ui'
import Button from '../../common/controls/Button/Button'

class BurgherItem extends Component {
  getResources = (type) =>
    this.props.burgher[type].map(res => <span>{res.amount} {res.type}</span>)

  render () {
    const { burgher } = this.props

    return <div className={'BurgerItem'}>
      <div className={'image'}>
        <img src={burgher.image} alt='' />
      </div>
      <div className={'cell'}>
        <div className={'BurgerItem-title'}><span>{burgher.name}</span></div>
        <div>{burgher.description}</div>
      </div>
      <div className={'cell resources'}>
        <div className={'BurgerItem-resources'}>
          <img src={ui.arrowDown} alt='' /> {this.getResources('consumes')}
        </div>
        <div className={'BurgerItem-resources'}>
          <img src={ui.arrowUp} alt='' /> {this.getResources('produces')}
        </div>
      </div>
      <div className={'cell action'}>
        <Button enabled>Raise</Button>
      </div>
    </div>
  }
}

export default BurgherItem

BurgherItem.propTypes = {
  burgher: PropTypes.object.isRequired
}
