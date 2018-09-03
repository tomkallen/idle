import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './ControlBar.css'
import ControlButton from '../ControlButton/ControlButton'
import store from '../../../../store'

@inject('store')
@observer
class ControlBar extends Component {
  render () {
    return <div className={'ControlBar'}>
      <ControlButton
        title={'Achievements'}
        onClick={() => this.props.store.displayModal('achievements')}
      />
    </div>
  }
}

export default ControlBar