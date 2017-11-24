import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {routerActions} from 'react-router-redux'
import * as PlanetsStateActions from './PlanetsState';
import PlanetsView from './PlanetsView'

export default connect(
  state => ({
    planets: state.planets
  }),
  dispatch => {
    return {
      PlanetsActions: bindActionCreators(PlanetsStateActions, dispatch),
      routeractions: bindActionCreators(routerActions, dispatch)
    }
  }
)(PlanetsView)
