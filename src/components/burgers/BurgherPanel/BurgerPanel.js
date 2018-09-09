import React, { Component } from 'react'
import './BurgerPanel.css'
import { observer, inject } from 'mobx-react'
import store from '../../../store'
import BurgherItem from '../BurgherItem/BurgherItem'
import PanelHeader from "../../common/PanelHeader/PanelHeader"

@inject('store')
@observer
export default class BurgerPanel extends Component {

  renderBurgerList = () => {
    return this.props.store.burgers.map(burger =>
      <BurgherItem burger={burger}/>
    )
  }

  render () {
    return <div className={'BurgerPanel'}>
      <PanelHeader>Burghers</PanelHeader>
      {this.renderBurgerList()}
      </div>
  }
}

