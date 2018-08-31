import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './achitab.css'
import sounds from '../../audio'

@inject('store')
@observer
class AchiTab extends Component {

  componentDidMount () {
    sounds.achi.play()
    setTimeout(this.clearAchiTab, 5000)
  }

  clearAchiTab = () => {
    this.props.store.updateStore('currentAchievement', null)
  }

  render () {
    console.log('Displaying achi')
    return <div
      onClick={() => this.clearAchiTab()}
      className={'achitab'}>
      <p>{this.props.store.currentAchievement.name}</p>
      <div className={'achitab-text'}>{this.props.store.currentAchievement.info}
      </div>
    </div>
  }
}

export default AchiTab
