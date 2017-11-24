import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'
import Loader from '../../components/Loader'
import Link from '../../components/Link'
import {slugify} from '../../utils/strings'

class People extends Component {
  componentDidMount() {
    if (!this.props.people.data) {
      this.props.PeopleActions.fetchPeople()
    }
  }
  renderPeople = (people) => {
    return(
      <ul>
        {people.map((r, key) => {
          return(
            <li key={key}><Link to={`/people/${slugify(r.name)}`}>{r.name}</Link></li>
          )
        })}
        </ul>
    )
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Redux Kit - People</title>
        </Helmet>
        <section>
          <h1>People</h1>
          {this.props.people.isFetching &&
            <Loader/>
          }
          {this.props.people.data &&
            this.renderPeople(this.props.people.data.results)
          }
        </section>
      </div>
    )
  }
}

People.propTypes = {
  people: PropTypes.object.isRequired
}


export default People
