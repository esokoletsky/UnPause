import React, { Component } from 'react';
import Register from './Register';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Login from './Login';
import Logout from './Logout';
import Grid from './Grid';
import Header from './Header';
import { Route } from 'react-router-dom';
class App extends Component {
  
  constructor(){
    super();
    this.state = {
      isLoggedIn: localStorage.getItem('userID') !== null
    }
  }

  componentDidMount(){
    console.log('mounted',this.state);
    this.setState({
      isLoggedIn: localStorage.getItem('userID') !== null
    });
  }

  hydrateState(){
    this.setState({
      isLoggedIn: localStorage.getItem('userID') !== null
    });
  }


  render() {
    return (
      <div>
      <p>LoggedIn: {""+this.state.isLoggedIn+""}</p>
      <Header />
      <Nav {...this.state} />
      <Grid />

      <Route exact path="/login" render={(props) => <Login {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/logout" render={(props) => <Logout {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/register" render={(props) => <Register {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/dashboard" component={Dashboard} />
      
      </div>
    )
  }
}

export default App;
