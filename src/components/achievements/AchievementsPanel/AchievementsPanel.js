import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './AchievementsPanel.css'
import PanelHeader from '../../main/panelheader/panelheader'
import AchievementInfo from '../AchievementInfo/AchievementInfo'
import AchievementCategory from '../AchievementCategory/AchievementCategory'
import AchievementItem from '../AchievementItem/AchievementItem'
import store from '../../../store'

@inject('store')
@observer
export default class AchievementsPanel extends Component {

  state = {category: null}

  renderCategories = () => [...new Set(this.props.store.achievements.map(achievement => achievement.category))]
    .map(category =>
      <AchievementCategory onClick={() => this.setState({category})} category={category}/>)

  renderList = () => {
    return this.props.store.achievements
      .filter(achievement => achievement.category === this.state.category)
      .map(achievement => <AchievementItem achievement={achievement}/>)
  }

  currentScore = () => this.props.store.achievements.reduce((sum, achi) => achi.active ? sum + achi.score : sum, 0)
  maxScore = () => this.props.store.achievements.reduce((sum, achi) => sum + achi.score, 0)

  render () {
    if (this.props.store.display !== 'achievements') return null
    return <div className={'AchievementsPanel'}>
      <div className={'wrapper'}>
        <PanelHeader closeButton onClick={() => this.props.store.displayModal(false)}>Achievements</PanelHeader>
        <AchievementInfo current={this.currentScore()} max={this.maxScore()}/>
        <div className={'body'}>
          <div className={'categories'}>{this.renderCategories()}</div>
          <div className={'list'}>{this.renderList()}</div>
        </div>
      </div>
    </div>
  }
}