import React, { Component } from 'react'
import './servicebar.css'
import { observer } from 'mobx-react'

@observer
class ServiceBar extends Component {

  render () {

    return <div className={'servicebar'}>
      <div className={'servicebar-left'}>
        <h3>Service Title</h3>
        <h5>Description of what it does</h5>
        <p>Some footnotes</p>
      </div>
      <div className={'servicebar-right'}>Here goes incomes and expenditures</div>
    </div>
  }
}

export default ServiceBar
