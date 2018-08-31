import React, { Component } from 'react'
import './resourcetab.css'
import { observer, inject } from 'mobx-react'
import ItemPrice from '../itemprice/itemprice'
import store from '../../store'

@inject('store')
@observer
class ResourceTab extends Component {
  render () {
    const resources = Object.keys(this.props.store.resources).map(r =>
      <ItemPrice
        price={this.props.store.resources[r]}
        currency={r}
      />)
    return <div className={'resourcetab'}>{resources}</div>
  }
}

export default ResourceTab
