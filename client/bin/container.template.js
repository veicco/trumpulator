import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {routerActions} from 'react-router-redux'
import * as COMPONENT_NAMEStateActions from './COMPONENT_NAMEState';
import COMPONENT_NAMEView from './COMPONENT_NAMEView'

export default connect(
  state => ({
    /* map state to props */
  }),
  dispatch => {
    return {
      COMPONENT_NAMEactions: bindActionCreators(COMPONENT_NAMEStateActions, dispatch),
      routeractions: bindActionCreators(routerActions, dispatch)
    }
  }
)(COMPONENT_NAMEView)
