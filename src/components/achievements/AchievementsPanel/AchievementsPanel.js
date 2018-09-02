import React, { Component } from 'react'
import './AchievementsPanel.css'
import PanelHeader from '../../main/panelheader/panelheader'
import AchievementInfo from "../AchievementInfo/AchievementInfo"
import AchievementCategory from "../AchievementCategory/AchievementCategory"
import AchievementItem from "../AchievementItem/AchievementItem"

import { achievements } from '../../../achievements'

export default class AchievementsPanel extends Component {

  state={category: null}

  renderCategories = ()=> [...new Set(achievements.map(achievement => achievement.category))]
    .map(category =>
      <AchievementCategory
        onClick={()=> this.setState({category})}
        category={category}/>)

  renderList = () => {
    return achievements
      .filter(achievement=> achievement.category === this.state.category)
      .map(achievement => <AchievementItem achievement={achievement}/>)
  }

  render () {
    return <div className={'AchievementsPanel'}>
      <div className={'wrapper'}>
        <PanelHeader>Achievements</PanelHeader>
        <AchievementInfo/>
        <div className={'body'}>
          <div className={'categories'}>{this.renderCategories()}</div>
          <div className={'list'}>{this.renderList()}</div>
        </div>
      </div>
    </div>
  }
}