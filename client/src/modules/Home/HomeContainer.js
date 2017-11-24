import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {routerActions} from 'react-router-redux'
import HomeView from './HomeView'

export default connect(
  state => ({}),
  dispatch => {
    return {
      routeractions: bindActionCreators(routerActions, dispatch)
    }
  }
)(HomeView)
