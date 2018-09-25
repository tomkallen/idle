import React, { Component } from 'react'
import './BurgherPanel.css'
import { observer, inject } from 'mobx-react'
// import store from '../../../store'
import Panel from '../../common/Panel/Panel'
import BurgherItem from '../BurgherItem/BurgherItem'
import { Scrollbars } from 'react-custom-scrollbars'

@inject('store')
@observer
class BurgherPanel extends Component {
  renderBurgerList = () =>
    this.props.store.burghers.map(burgher => <BurgherItem burgher={burgher} />)

  render () {
    return <Panel wide header={'Burghers'}>
      <Scrollbars style={{ width: '100%', height: 300 }}>
        {this.renderBurgerList()}
      </Scrollbars>
    </Panel>
  }
}
export default BurgherPanel
