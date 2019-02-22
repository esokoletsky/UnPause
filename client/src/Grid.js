import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Grid extends Component {

  render() {
    return (
  <div> 
  <h5 className="explain">UnPause is a web app that helps you get moving again. All of us face procrastination at one point or another,
   this app was designed to get you back on track. It features motivational quotes, videos, meditaion,
    and even a goal oriented list.</h5>   
    <section className="grid">
      <div className="box"> <Link  to={ (this.props.isLoggedIn) ? "/videos" : "/login/videos" }>Motivational Videos</Link>  </div>
      <div className="box"> <Link  to={ (this.props.isLoggedIn) ? "/quotes" : "/login/quotes" }>Motivational Quotes</Link>  </div>
      <div className="box"> <Link  to={ (this.props.isLoggedIn) ? "/user-goals" : "/login/goals" }>Goals</Link>  </div>
      <div className="box font"> <Link  to={ (this.props.isLoggedIn) ? "/meditation" : "/login/meditation" }>Meditation</Link>  </div>
    </section>
    <div className="logo"><img src="../img/icon.png"></img></div>
  </div>
    )
  }
}

export default Grid
