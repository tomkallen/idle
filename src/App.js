import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import store from './store'

import Main from './components/main/main'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className='App'>
          <div className={'top'} />
          <Main />
        </div>
      </Provider>
    )
  }
}

export default App
