import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {routerActions} from 'react-router-redux'
import * as PeopleStateActions from './PeopleState'
import PeopleView from './PeopleView'

export default connect(
  state => ({
    people: state.people
  }),
  dispatch => {
    return {
      PeopleActions: bindActionCreators(PeopleStateActions, dispatch),
      routeractions: bindActionCreators(routerActions, dispatch)
    }
  }
)(PeopleView)
