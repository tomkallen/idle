import React from 'react'
import './itemtitle.css'


const ItemTitle = ({title, level}) =>
  <div className={'itemtitle'}>
    {title}
    {level ? <span>{`level ${level}`}</span>: null}
  </div>

export default ItemTitle

