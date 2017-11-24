import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'
import TextForm from '../../components/TextForm'

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Headline Pulator</title>
        </Helmet>
        <section>
          <h1>Headline Pulator</h1>
          <TextForm handleSubmit={this.props.actions.fetchHeadline}/>
      </section>
      </div>
    )
  }
}

Home.propTypes = {
}

export default Home
