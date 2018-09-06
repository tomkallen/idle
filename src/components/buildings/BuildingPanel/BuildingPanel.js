import React, { Component } from 'react'
import BuildingBar from '../BuildingBar/BuildingBar'
import './BuildingPanel.css'
import { observer } from 'mobx-react'
import Tab from '../../main/tab/tab'
import PanelHeader from '../../main/panelheader/panelheader'
import { Scrollbars } from 'react-custom-scrollbars'

@observer
class BuildingPanel extends Component {

  renderBars = () =>
    this.props.buildings.map(building =>
      <BuildingBar
        key={building.index}
        building={building}
        resources={this.props.resources}
      />)

  render () {

    return <div className={'itempanel'}>
      <PanelHeader>Production</PanelHeader>
      <div className="tab-holder">
        <Tab active>I</Tab>
        <Tab disabled>II</Tab>
        <Tab disabled>III</Tab>
        <Tab disabled>IV</Tab>
      </div>
      <Scrollbars
        style={{width: '100%', height: 300, borderBottom: '1px solid var(--golden)'}}>{this.renderBars()}</Scrollbars>
    </div>
  }
}

export default BuildingPanel
