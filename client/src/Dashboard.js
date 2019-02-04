import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends Component {




  render() {
      let email = localStorage.getItem('userEmail');
      
    return (
        <h1>Dashboard for {email}</h1>
    );
  }
}

export default Dashboard;
