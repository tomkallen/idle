import React from 'react'
import "./AchievementItem.css"

const AchievementItem = ({achievement}) =>
  <div className={"AchievementItem"}>
    <div className={'name'}>{achievement.name}</div>
    <div className={'info'}>{achievement.info}</div>
    <span className={'score'}>{achievement.score}</span>
    {/*{!achievement.active &&<div className={'inactive'}/>}*/}
  </div>

export default AchievementItem