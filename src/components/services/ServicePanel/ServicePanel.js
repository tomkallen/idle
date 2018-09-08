import React, { Component } from 'react'
import './ServicePanel.css'
import { observer, inject } from 'mobx-react'
import PanelHeader from '../../common/PanelHeader/PanelHeader'
import Tab from '../../main/tab/tab'
import ServiceBar from '../ServiceBar/ServiceBar'
import Panel from '../../common/Panel/Panel'
import { Scrollbars } from 'react-custom-scrollbars'
import store from '../../../store'

@inject('store')
@observer
class ServicePanel extends Component {
  state = {filter: 'store'}

  renderBars = () =>
    this.props.store.services
      .filter(service => service.tab === this.state.filter)
      .sort((a, b) => a.price - b.price)
      .map(service =>
        <ServiceBar
          key={service.index}
          service={service}
          resources={this.props.store.resources}
        />)

  render () {

    return <Panel header={'Storage'}>
      <div className={'tab-holder'}>
        <Tab
          onClick={() => this.setState({filter: 'store'})}
          active={this.state.filter === 'store'}
        >Store
        </Tab>
        <Tab
          onClick={() => this.setState({filter: 'housing'})}
          active={this.state.filter === 'housing'}
        >Housing
        </Tab>
      </div>
      <Scrollbars style={{width: '100%', maxHeight: '300px', border: '1px solid var(--golden)'}}>
        {this.renderBars()}
      </Scrollbars>
    </Panel>
  }
}

export default ServicePanel
