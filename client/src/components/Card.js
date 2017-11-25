import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  render() {
    return (
        <div className="card">
          <h4>{this.props.text}</h4>
          <img className="" src={this.props.url} alt={this.props.value}/>
        </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Card
