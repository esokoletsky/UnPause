import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Grid extends Component {

  render() {
    return (
  <div>    
    <section className="grid">
      <div className="box"> <Link  to={ (this.props.isLoggedIn) ? "/videos" : "/login/videos" }>Motivational Videos</Link>  </div>
      <div className="box"> <Link  to={ (this.props.isLoggedIn) ? "/quotes" : "/login/quotes" }>Motivational Quotes</Link>  </div>
      <div className="box"> <Link  to={ (this.props.isLoggedIn) ? "/goals" : "/login/goals" }>Set Goals</Link>  </div>
      <div className="box"> <Link  to={ (this.props.isLoggedIn) ? "/meditation" : "/login/meditation" }>Meditation</Link>  </div>
    </section>
    <div className="logo"><img src="../img/icon.png"></img></div>
  </div>
    )
  }
}

export default Grid
