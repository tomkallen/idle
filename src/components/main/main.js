import React, { Component } from 'react'
import BuildingPanel from '../buildings/BuildingPanel/BuildingPanel'
import ControlButton from '../common/controls/ControlButton/ControlButton'
import ResourceTab from '../resourcetab/resourcetab'
import ServicePanel from '../services/ServicePanel/ServicePanel'
import { observer, inject } from 'mobx-react'
import AchiTab from '../achievements/achitab/achitab'
import ControlBar from '../common/controls/ControlBar/ControlBar'
import store from '../../store'
import AchievementsPanel from '../achievements/AchievementsPanel/AchievementsPanel'

@inject('store')
@observer
export default class Main extends Component {
  componentDidMount () {
    this.props.store.tick()
  }

  render () {
    return (
      <div>
        <ControlBar/>
        <div className={'main'}>
          <AchievementsPanel/>
          <BuildingPanel
            resources={this.props.store.resources}
            buildings={this.props.store.buildings}
          />
          <ServicePanel/>
          {this.props.store.currentAchievement ? <AchiTab/> : null}
          <ResourceTab/>
        </div>
      </div>
    )
  }
}