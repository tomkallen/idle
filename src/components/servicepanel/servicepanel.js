import React, { Component } from 'react'
import './servicepanel.css'
import { observer } from 'mobx-react'
import Tab from '../tab/tab'
import ServiceBar from '../servicebar/servicebar'
import { Scrollbars } from 'react-custom-scrollbars'

@observer
class ServicePanel extends Component {

  // renderBars = () =>
  //   this.props.buildings.map(building =>
  //     <ItemBar
  //       key={building.index}
  //       building={building}
  //       resources={this.props.resources}
  //     />)

  render () {

    return <div className={'itempanel'}>
      <Tab active>I</Tab>
      <Tab>II</Tab>
      <Scrollbars style={{width: '100%', height: 300}}>
        <ServiceBar/>
      </Scrollbars>
    </div>
  }
}

export default ServicePanel
