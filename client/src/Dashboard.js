import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Grid from './Grid';

class Dashboard extends Component {




  render() {
      let email = localStorage.getItem('userEmail');
      
    return (
      <div className="dashboard-wrapper">
        <h5>Welcome back {email}</h5>
        <Grid {...this.props} />
      </div>
    );
  }
}

export default Dashboard;
