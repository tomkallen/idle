import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './AchievementsPanel.css'
import { achievements } from '../../../achievements'
import PanelHeader from '../../common/PanelHeader/PanelHeader'
import AchievementInfo from '../AchievementInfo/AchievementInfo'
import AchievementCategory from '../AchievementCategory/AchievementCategory'
import AchievementItem from '../AchievementItem/AchievementItem'
import { Scrollbars } from 'react-custom-scrollbars'
import store from '../../../store'

@inject('store')
@observer
export default class AchievementsPanel extends Component {

  state = {category: null}

  renderCategories = () => [...new Set(this.props.store.achievements.map(achievement => achievement.category))]
    .map(category =>
      <AchievementCategory onClick={() => this.setState({category})} category={category}/>)

  renderList = () =>
    this.props.store.achievements
      .filter(achievement => achievement.category === this.state.category)
      .sort((a, b) => b.active - a.active)
      .map(achievement => <AchievementItem achievement={achievement}/>)

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
          <div className={'list'}>
            <Scrollbars style={{width: '100%', maxHeight: '35rem'}}>
              {this.renderList()}</Scrollbars>
          </div>
        </div>
      </div>
    </div>
  }
}