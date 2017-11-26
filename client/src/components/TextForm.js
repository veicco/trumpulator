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
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <textarea id="text" type="text" placeholder="Give me some text"/>
          </div>
          <div className="form-group" style={{textAlign: "center"}}>
            <button type="submit" className="btn btn-default">Trumpulate</button>
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
