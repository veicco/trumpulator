import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ResultText extends Component {
  render() {
    if (!this.props.tags) {
      return null;
    }
    console.log(this.props.tags)
    return (
      <div id="result">
        <ul>
        {Object.keys(this.props.tags[0]).map((tag,key) => {
          return(<li key={key}>{tag}</li>)
        })}
        </ul>
      </div>
    )
  }
}

ResultText.propTypes = {
  tags: PropTypes.object
}

export default ResultText
