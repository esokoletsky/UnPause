import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {

  constructor(props){
    super(props);
  }



  render() {
    return (
        <ul className='nav'>
            {(!this.props.isLoggedIn) ? <li><Link to="/register">Register</Link></li> : <li><Link to="/dashboard">Dashboard</Link></li> } 
            {(this.props.isLoggedIn) ? <li><Link to="/logout">Logout</Link></li> : <li><Link to="/login">Login</Link></li>}
        </ul>
    );
  }
}

export default Nav;
