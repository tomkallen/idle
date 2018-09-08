import React from 'react'
import './AchievementItem.css'

const AchievementItem = ({achievement}) =>
  <div className={'AchievementItem'}>
    <div className={achievement.active ? 'name' : 'name disabled'}>{achievement.name}</div>
    {achievement.active && <div>
      <div className={'info'}>{achievement.info}</div>
      <span className={'score'}>{achievement.score}</span>
    </div>}
  </div>

export default AchievementItem