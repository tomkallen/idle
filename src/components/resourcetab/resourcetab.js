import React, { Component } from 'react'
import './resourcetab.css'
import { observer, inject } from 'mobx-react'
import Currency from '../common/Currency/Currency'
import store from '../../store'

@inject('store')
@observer
class ResourceTab extends Component {
  render () {
    const resources = Object.keys(this.props.store.resources).map(r =>
      <div key={r} className={'resource'}>
        <Currency currency={r}/>
        <div className={'resource-numbers'}>{this.props.store.resources[r]}</div>
      </div>)
    return <div className={'resourcetab'}>{resources}</div>
  }
}

export default ResourceTab
