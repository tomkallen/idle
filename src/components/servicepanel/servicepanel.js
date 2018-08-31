import React, { Component } from 'react'
import './servicepanel.css'
import { observer, inject } from 'mobx-react'
import PanelHeader from '../panelheader/panelheader'
import Tab from '../tab/tab'
import ServiceBar from '../servicebar/servicebar'
import { Scrollbars } from 'react-custom-scrollbars'
import store from '../../store'

@inject('store')
@observer
class ServicePanel extends Component {
  state = {filter: 'store'}

  renderBars = () =>
    this.props.store.services
      .filter(service => service.tab === this.state.filter)
      .map(service =>
        <ServiceBar
          key={service.index}
          service={service}
          resources={this.props.store.resources}
        />)

  render () {

    return <div className={'itempanel'}>
      <PanelHeader>Services</PanelHeader>
      <Tab
        onClick={() => this.setState({filter: 'store'})}
        active={this.state.filter === 'store'}
      >Store</Tab>
      <Tab
        onClick={() => this.setState({filter: 'housing'})}
        active={this.state.filter === 'housing'}
      >Housing</Tab>
      <Scrollbars style={{width: '100%', height: 300}}>
        {this.renderBars()}
      </Scrollbars>
    </div>
  }
}

export default ServicePanel
