import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

class Navbar extends Component {
  render() {
    return (
      <nav className="nav nav-pills nav-fill mb-3">
        <Link to="/">Home</Link>
        <Link to="/people">People</Link>
        <Link to="/planets">Planets</Link>
      </nav>
    )
  }
}

Navbar.propTypes = {
}

export default Navbar
