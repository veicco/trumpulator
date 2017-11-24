import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {routerActions} from 'react-router-redux'
import HomeView from './HomeView'
import * as HomeStateActions from './HomeState';

export default connect(
  state => ({
    home: state.home
  }),
  dispatch => {
    return {
      actions: bindActionCreators(HomeStateActions, dispatch),
      routeractions: bindActionCreators(routerActions, dispatch)
    }
  }
)(HomeView)
