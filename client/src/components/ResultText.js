import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'
import Cloud from './Cloud'

class ResultText extends Component {
  getTags = (tags) => {
    return Object.keys(this.props.tags[0]).map((tag) => {
      return {
        text: tag,
        value: this.props.tags[0][tag]
      }
    })
  }
  render() {
    if (!this.props.tags) {
      return null;
    }
    // return(
    //   <Cloud tags={this.getTags(this.props.tags[0])}/>
    // )
    return (
      <div id="result">
        {Object.keys(this.props.tags[0]).map((tag,key) => {
          return(<Tag key={key} text={tag} value={this.props.tags[0][tag]}/>)
        })}
      </div>
    )
  }
}

ResultText.propTypes = {
  tags: PropTypes.object
}

export default ResultText
