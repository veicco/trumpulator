import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'
import Card from './Card'
import Cloud from './Cloud'

class ResultText extends Component {
  getTags = (tags) => {
    return Object.keys(this.props.tags[0]).map((tag) => {
      return {
        text: tag,
        value: this.props.tags[0][tag]
      }
    }).sort((left,right) => right.value-left.value)
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
        <div className="row">
        {this.getTags(this.props.tags[0]).map((tag,key) => {
          return(
            <div className="col-sm-4">
              <Card key={key} text={tag.text} value={tag.value.toFixed(2)}/>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

ResultText.propTypes = {
  tags: PropTypes.object
}

export default ResultText
