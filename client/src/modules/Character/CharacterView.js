import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'
import {slugify} from '../../utils/strings'
import Loading from '../../components/Loader'

class Character extends Component {
  getCharacter(slug, people) {
    const filtered = people.filter((c) => slugify(c.name) === slug)
    if (filtered.length === 1) {
      return filtered[0]
    }
    return {}
  }
  componentWillMount() {
    if (!this.props.people.data) {
      this.props.PeopleActions.fetchPeople()
    }
  }
  render() {
    if (!this.props.people.data) {
      return <Loading/>
    }
    const c = this.getCharacter(this.props.match.params.slug, this.props.people.data.results)
    return (
      <div>
        <Helmet>
          <title>Redux Kit - {c.name}</title>
        </Helmet>
        <section>
          <h1>{c.name}</h1>
          <p>
            {c.name} {c.birth_year !== "unknown" ? `(b. ${c.birth_year})` : ""} is a {c.height} tall {c.gender === "n/a" ? "creature" : c.gender} who weights {c.mass}.
            {" "}{c.gender === "female" ? "She" : c.gender === "male" ? "He" : "It"} has {c.hair_color !== "n/a" ? c.hair_color + " hair," : ""}
            {" "}{c.eye_color ? c.eye_color + " eyes" : ""} and {c.skin_color} skin.
          </p>
        </section>
      </div>
    )
  }
}

Character.propTypes = {
  people: PropTypes.object.isRequired
}

export default Character
