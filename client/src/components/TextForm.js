import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextForm extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <textarea type="text" placeholder="Give me some text"/>
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

}

export default TextForm
