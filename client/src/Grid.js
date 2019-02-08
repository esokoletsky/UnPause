import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Grid extends Component {

  constructor(props){
    super(props);
  }
    

  render() {
    return (
  <div>    
    <section className="grid">
      <div> <Link  to={ (this.props.isLoggedIn) ? "/videos" : "/login/videos" }>Meditation Videos</Link>  </div>
      <div> <Link  to={ (this.props.isLoggedIn) ? "/quotes" : "/login/quotes" }>Motivational Quotes</Link>  </div>
      <div>Something3</div>
      <div>Something4</div>
    </section>
  </div>
    )
  }
}

export default Grid
