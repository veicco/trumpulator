import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'
import Card from './Card'
import Cloud from './Cloud'

class ResultText extends Component {
  render() {
    if (!this.props.tags) {
      return null;
    }
    return (
      <div id="result">
        <div className="row">
        {this.props.tags.map((tag,key) => {
          return(
            <div key={key} className="col-sm-4">
              <Card text={tag.text} value={tag.value.toFixed(2)} url={tag.url}/>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

ResultText.propTypes = {
  tags: PropTypes.array
}

export default ResultText
