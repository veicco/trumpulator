import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'
import TextForm from '../../components/TextForm'
import ResultText from '../../components/ResultText'
import Tweet from '../../components/Tweet'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Headline Pulator</title>
        </Helmet>
        <section>
          <h1>Headline Pulator</h1>
          <TextForm handleSubmit={(text) => this.props.homeActions.fetchHeadline(text)}/>
          <Tweet text="I am iron man"/>
          <ResultText tags={this.props.home.data.tags} tweet={this.props.home.data.tweet} loading={this.props.home.isFetching}/>
      </section>
      </div>
    )
  }
}

Home.propTypes = {
  homeActions: PropTypes.object.isRequired,
  home: PropTypes.object
}

export default Home
