import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'
import TextForm from '../../components/TextForm'
import ResultText from '../../components/ResultText'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Headline Pulator</title>
        </Helmet>
        <section>
          <h1>Headline Pulator</h1>
          <TextForm handleSubmit={(text) => this.props.actions.fetchHeadline(text)}/>
          <ResultText tags={this.props.tags}/>
      </section>
      </div>
    )
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  headline: PropTypes.string,
  tags: PropTypes.object
}

export default Home
