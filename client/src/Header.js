import React, { Component } from 'react'
import Nav from './Nav';
import { Link } from 'react-router-dom';


export class Header extends Component {


  render() {
    return (
      <div className="header">
        <Link to={(this.props.isLoggedIn)? "/dashboard" : "/"}><img src='../img/icon-left-font.png'></img></Link>
        <Nav {...this.props}/> 
      </div>
    )
  }
}

export default Header
