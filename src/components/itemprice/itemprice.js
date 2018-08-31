import React from 'react'
import './itemprice.css'
import Currency from '../currency/currency.js'

const ItemPrice = ({price, currency}) =>
  <div className={'itemprice'}>
    <Currency currency={currency}/>
    {price}
  </div>

export default ItemPrice

