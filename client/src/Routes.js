import React, {Component} from 'react'
import {history} from './redux/store'
import {Switch, Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import HomeContainer from './modules/Home/HomeContainer'

class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={HomeContainer}/>
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default Routes
