import React from 'react'
import "./AchievementItem.css"

const AchievementItem = ({achievement}) =>
  <div className={"AchievementItem"}>
    <p>{achievement.name}</p>
    <p>{achievement.info}</p>
    <p>{achievement.score}</p>
    {!achievement.active &&<div className={'inactive'}/>}
  </div>

export default AchievementItem