import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Loader extends Component {
  render() {
    return (
      <div>
        <p>Donald Trump is writing...</p>
        <div className="loader"></div>
      </div>
    )
  }
}

Loader.propTypes = {

}

export default Loader
