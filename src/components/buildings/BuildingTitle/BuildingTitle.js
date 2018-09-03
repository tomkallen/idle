import React from 'react'
import './BuildingTitle.css'


const BuildingTitle = ({title, level}) =>
  <div className={'itemtitle'}>
    {title}
    {level ? <span>{`x${level}`}</span>: null}
  </div>

export default BuildingTitle

