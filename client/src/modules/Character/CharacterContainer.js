import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {routerActions} from 'react-router-redux'
import CharacterView from './CharacterView'
import * as PeopleStateActions from '../People/PeopleState'

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
)(CharacterView)
