import React, { Component } from 'react';
//import { Link } from 'react-router-dom';


class Logout extends Component {

    constructor(props){
        super(props);
        localStorage.clear();
        this.props.hydrateState();
        this.props.history.push('/');
      }


  render() {
      
    return (
        <h1>logging out....</h1>
    );
  }
}

export default Logout;
