import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        Welcome to <Link to="/">UnPause</Link>!
      </div>
    )
  }
}

export default Header
