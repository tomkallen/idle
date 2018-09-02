import React from 'react'
import './BuildingPrice.css'
import Currency from '../../common/currency/currency.js'

const BuildingPrice = ({price, currency}) =>
  <div className={'itemprice'}>
    <Currency currency={currency}/>
    {price}
  </div>

export default BuildingPrice

