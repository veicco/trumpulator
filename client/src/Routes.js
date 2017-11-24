import React, {Component} from 'react'
import {history} from './redux/store'
import {Switch, Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import HomeContainer from './modules/Home/HomeContainer'
import PeopleContainer from './modules/People/PeopleContainer'
import CharacterContainer from './modules/Character/CharacterContainer'
import PlanetsContainer from './modules/Planets/PlanetsContainer'

class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={HomeContainer}/>
          <Route path='/people/:slug' component={CharacterContainer}/>
          <Route path="/people" component={PeopleContainer}/>
          <Route path="/planets" component={PlanetsContainer}/>
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default Routes
