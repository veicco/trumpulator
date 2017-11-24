import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {routerActions} from 'react-router-redux'

class Link extends Component {
  handleClick = (e) => {
    e.preventDefault()
    this.props.routeractions.push(this.props.to)
  }
  render() {
    return (
      <a
        {...this.props}
        href={this.props.to}
        onClick={this.handleClick}
      >
        {this.props.children}
      </a>
    )
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
}

export default connect(
  state => ({}),
  dispatch => {
    return {
      routeractions: bindActionCreators(routerActions, dispatch)
    }
  }
)(Link)
