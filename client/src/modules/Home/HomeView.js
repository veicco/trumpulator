import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Redux Kit - Home</title>
        </Helmet>
        <section>
          <h1>Home</h1>
          <p>A starter template for React + Redux apps.</p>
          <p><a href="https://github.com/KovaVeikko/redux-kit">{"https://github.com/KovaVeikko/redux-kit"}</a></p>
          <p>Included packages:</p>
          <ul>
            <li><a href="https://reactjs.org/">React</a> for DOM management</li>
            <li><a href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux">React Router</a> for routing</li>
            <li><a href="http://redux.js.org/">Redux</a> for state management</li>
            <li><a href="https://webpack.github.io/">Webpack</a> for building</li>
            <li><a href="https://mochajs.org/">Mocha</a> + <a href="http://chaijs.com/">Chai</a> + <a href="http://airbnb.io/enzyme/">Enzyme</a> for testing</li>
            <li><a href="http://sass-lang.com/guide">Sass</a> for styling</li>
          </ul>
      </section>
      </div>
    )
  }
}

Home.propTypes = {
}

export default Home
