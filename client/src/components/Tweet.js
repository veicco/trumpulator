import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tweet extends Component {
  render() {
    return (
      <div className="tweet">
        <div className="tweet-header">
          <div className="image">
            <img src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"/>
          </div>
          <div className="tweeter">
            <div>
              <div className="name">
                <span>Donald J. Trump</span>
              </div>
              <div className="trusted">
              </div>
            </div>
            <div className="nick">
              <span>@fakeDonaldTrump</span>
            </div>
          </div>
          <div className="twitter-logo">
          </div>
        </div>
        <div className="tweet-body">
          <p>Time Magazine called to say that I was PROBABLY going to be named “Man (Person) of the Year,” like last year, but I would have to agree to an interview and a major photo shoot. I said probably is no good and took a pass. Thanks anyway!</p>
        </div>
        <div className="footer">
          <div className="time">Just now</div>
          <div className="buttons">
            <a className="button"><div className="comment"></div>30 124</a>
            <a className="button"><div className="share"></div> 22 633</a>
            <a className="button"><div className="heart"></div> 91 036</a>
          </div>
        </div>
      </div>
    )
  }
}

Tweet.propTypes = {
  text: PropTypes.string.isRequired
}

export default Tweet
