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
          {this.props.error && 
            <p>{this.props.error.response}</p>
          }
          {this.props.loading &&
            <p>@fakeDonaldTrump is typing
              <span class="loader-dot">.</span>
              <span class="loader-dot">.</span>
              <span class="loader-dot">.</span>
            </p>
          }
          {this.props.text &&
            <p>{this.props.text}</p>
          }
          {this.props.url &&
            <img src={this.props.url}/>
          }
        </div>
        {!this.props.loading && this.props.text &&
          <div className="footer">
            <div className="time">Just now</div>
            <div className="buttons">
              <a className="button"><div className="comment"></div>30 124</a>
              <a className="button"><div className="share"></div> 22 633</a>
              <a className="button"><div className="heart"></div> 91 036</a>
            </div>
          </div>
        }
      </div>
    )
  }
}

Tweet.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  url: PropTypes.string
}

export default Tweet
