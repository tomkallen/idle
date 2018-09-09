import React, { Component } from 'react'
import './BurgherPanel.css'
import { observer, inject } from 'mobx-react'
import store from '../../../store'
import BurgherItem from '../BurgherItem/BurgherItem'
import PanelHeader from '../../common/PanelHeader/PanelHeader'
import { Scrollbars } from 'react-custom-scrollbars'

@inject('store')
@observer
export default class BurgherPanel extends Component {

  renderBurgerList = () =>
    this.props.store.burghers.map(burgher => <BurgherItem burgher={burgher}/>)

  render () {
    return <div className={'BurgerPanel'}>
      <PanelHeader>Burghers</PanelHeader>
      <Scrollbars
        style={{width: '100%', height: 300}}
      >
        {this.renderBurgerList()}
      </Scrollbars>
    </div>
  }
}

