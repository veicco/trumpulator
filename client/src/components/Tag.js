import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tag extends Component {
  render() {
    return (
      <div className="tag">
        {this.props.text + " " }
      </div>
    )
  }
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default Tag
