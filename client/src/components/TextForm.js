import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextForm extends Component {
  onSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(e.target.text.value)
  }
  render() {
    return (
      <div id="form">
        <form onSubmit={this.onSubmit}>
          <div>
            <textarea id="text" type="text" placeholder="Give me some text"/>
          </div>
          <div>
            <button type="submit">Go!</button>
          </div>
        </form>
      </div>
    )
  }
}

TextForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default TextForm
