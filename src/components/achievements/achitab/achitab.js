import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './achitab.css'
import sounds from '../../../audio'

@inject('store')
@observer
class AchiTab extends Component {
  timeout = null

  componentDidMount () {
    sounds.achi.playing && sounds.achi.stop()
    sounds.achi.play()
    clearInterval(this.timeout)
    this.timeout = setTimeout(this.clearAchiTab, 8000)
  }

  clearAchiTab = () => this.props.store.updateStore('currentAchievement', null)

  render () {
    return <div
      onClick={() => this.clearAchiTab()}
      className={'achitab'}>
      <p>
        {this.props.store.currentAchievement.name}
        <span className={'achilabel'}>{this.props.store.currentAchievement.score}</span>
      </p>
      <div className={'achitab-text'}>
        {this.props.store.currentAchievement.info}
      </div>

    </div>
  }
}

export default AchiTab
