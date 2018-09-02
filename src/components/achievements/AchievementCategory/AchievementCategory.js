import React from 'react'
import './AchievementCategory.css'

const AchievementCategory = ({category, onClick}) =>
  <div className={'AchievementCategory'} onClick={onClick}>{category}</div>

export default AchievementCategory