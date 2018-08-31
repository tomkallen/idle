import React, { Component } from 'react'
import ItemBar from '../itembar/itembar'
import './itempanel.css'
import { observer } from 'mobx-react'
import Tab from '../tab/tab'
import ResourceTab from '../resourcetab/resourcetab'
import PanelHeader from "../panelheader/panelheader"
import { Scrollbars } from 'react-custom-scrollbars'

@observer
class ItemPanel extends Component {

  renderBars = () =>
    this.props.buildings.map(building =>
      <ItemBar
        key={building.index}
        building={building}
        resources={this.props.resources}
      />)

  render () {

    return <div className={'itempanel'}>
      <PanelHeader>Buildings</PanelHeader>
      <Tab active>I</Tab>
      <Tab>II</Tab>
      <Tab>III</Tab>
      <Tab>IV</Tab>
      <Scrollbars style={{width: '100%', height: 300}}>{this.renderBars()}</Scrollbars>
      <ResourceTab/>
    </div>
  }
}

export default ItemPanel
