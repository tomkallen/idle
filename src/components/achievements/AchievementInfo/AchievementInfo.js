import React from 'react'
import './AchievementInfo.css'

const AchievementInfo = ({current, max}) =>
  <div className={'AchievementInfo'}>{current}/{max} achievement points earned</div>

export default AchievementInfo