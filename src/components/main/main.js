import React, { Component } from 'react'
import ItemPanel from '../itempanel/itempanel'
import ServicePanel from '../servicepanel/servicepanel'
import { observer, inject } from 'mobx-react'
import store from '../../store'

@inject('store')
@observer
export default class Main extends Component {
  componentDidMount () {
    this.props.store.tick()
  }

  render () {
    return (
      <div className={'main'}>
        <ItemPanel resources={this.props.store.resources} buildings={this.props.store.buildings}/>
        <ServicePanel/>
      </div>
    )
  }
}