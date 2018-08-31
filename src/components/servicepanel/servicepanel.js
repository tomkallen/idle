import React, { Component } from 'react'
import './servicepanel.css'
import { observer, inject } from 'mobx-react'
import PanelHeader from '../panelheader/panelheader'
import Tab from '../tab/tab'
import ServiceBar from '../servicebar/servicebar'
import { Scrollbars } from 'react-custom-scrollbars'
import  store from "../../store"

@inject('store')
@observer
class ServicePanel extends Component {

  renderBars = () =>
    this.props.store.services.map(service =>
      <ServiceBar
        key={service.index}
        service={service}
        resources={this.props.store.resources}
      />)

  render () {

    return <div className={'itempanel'}>
      <PanelHeader>Services</PanelHeader>
      <Tab active>General</Tab>
      <Tab>II</Tab>
      <Scrollbars style={{width: '100%', height: 300}}>
        {this.renderBars()}
      </Scrollbars>
    </div>
  }
}

export default ServicePanel
