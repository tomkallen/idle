import React from 'react'
import './currency.css'
import images from '../../../resources/ui/ui'

const Currency = ({ currency }) =>
  <div className={'currency'}>
    <img src={images[currency]} alt='' />
  </div>

export default Currency
