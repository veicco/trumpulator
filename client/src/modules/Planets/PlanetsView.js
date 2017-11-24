import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'
import Loader from '../../components/Loader'

class Planets extends Component {
  componentDidMount() {
    if (!this.props.planets.data) {
      this.props.PlanetsActions.fetchPlanets()
    }
  }
  renderPlanets = (planets) => {
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((r, key) => {
            return(
              <tr key={key}>
                <td>{r.name}</td>
                <td>{r.rotation_period}</td>
                <td>{r.orbital_period}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Redux Kit - Planets</title>
        </Helmet>
        <section>
          <h1>Planets</h1>
          {this.props.planets.isFetching &&
            <Loader/>
          }
          {this.props.planets.data &&
            this.renderPlanets(this.props.planets.data.results)
          }
        </section>
      </div>
    )
  }
}

Planets.propTypes = {
  planets: PropTypes.object.isRequired
}


export default Planets
