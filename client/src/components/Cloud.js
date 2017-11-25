import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WordCloud from 'react-d3-cloud'

const fontSizeMapper = word => Math.pow(word.value + 1, 15) * 10
const rotate = word => 0

class Cloud extends Component {
  render() {
    return (
      <div id="cloud">
        <WordCloud
          data={this.props.tags}
          fontSizeMapper={fontSizeMapper}
          rotate={rotate}
        />
      </div>
    )
  }
}

Cloud.propTypes = {
  tags: PropTypes.array.isRequired
}

export default Cloud
