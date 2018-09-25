import React from 'react'
import './AchievementItem.css'

const AchievementItem = ({ achievement }) =>
  <div className={'AchievementItem'}>
    <div className={achievement.active ? 'name' : 'name disabled'}>
      {achievement.name}
      {achievement.active && <span className={'score'}>{achievement.score}</span>}
    </div>
    <div>
      <div className={'info'}>{achievement.info}</div>
    </div>
  </div>

export default AchievementItem
