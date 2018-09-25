import React from 'react'
import './AchievementInfo.css'

const AchievementInfo = ({ current, max }) =>
  <div className={'AchievementInfo'}><span>{current}/{max}</span> achievement points earned</div>

export default AchievementInfo
