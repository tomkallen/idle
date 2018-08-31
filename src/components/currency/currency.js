import React from 'react'
import './currency.css'

const Currency = ({currency}) =>
  <div className={'currency'}>
    <img src={require(`./${currency}.png`)}/>
  </div>

export default Currency

