import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ResultText extends Component {
  render() {
    return (
      <div id="result">
        {this.props.text}
      </div>
    )
  }
}

ResultText.propTypes = {
  text: PropTypes.string
}

export default ResultText