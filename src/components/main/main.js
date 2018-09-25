import React, { Component } from 'react'
import BuildingPanel from '../buildings/BuildingPanel/BuildingPanel'
import BurgherPanel from '../burghers/BurgherPanel/BurgherPanel'
import ResourceTab from '../resourcetab/resourcetab'
import ServicePanel from '../services/ServicePanel/ServicePanel'
import { observer, inject } from 'mobx-react'
import AchiTab from '../achievements/achitab/achitab'
import ControlBar from '../common/controls/ControlBar/ControlBar'
// import store from '../../store'
import AchievementsPanel from '../achievements/AchievementsPanel/AchievementsPanel'

@inject('store')
@observer
class Main extends Component {
  componentDidMount () {
    this.props.store.tick()
  }

  render () {
    return (
      <div className={'main-wrapper'}>
        <ControlBar />
        <div className={'main'}>
          <AchievementsPanel />
          <ResourceTab />
          <BuildingPanel
            resources={this.props.store.resources}
            buildings={this.props.store.buildings}
          />
          <ServicePanel />
          {this.props.store.currentAchievement ? <AchiTab /> : null}
          <BurgherPanel />
        </div>
      </div>
    )
  }
}
export default Main
