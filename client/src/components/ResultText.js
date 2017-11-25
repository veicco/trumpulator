import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'

class ResultText extends Component {
  render() {
    if (!this.props.tags) {
      return null;
    }
    console.log(this.props.tags)
    return (
      <div id="result">
        {Object.keys(this.props.tags[0]).map((tag,key) => {
          return(<Tag key={key} text={tag}/>)
        })}
      </div>
    )
  }
}

ResultText.propTypes = {
  tags: PropTypes.object
}

export default ResultText
