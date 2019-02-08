import React, { Component } from 'react';
import Register from './Register';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Login from './Login';
import Logout from './Logout';
import Header from './Header';
import VideoGrid from './VideoGrid';
import Quotes from './Quotes';
import Grid from './Grid';
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
    let gridOrDashboard = (this.state.isLoggedIn) ? <Route exact path="/dashboard" render={(props) => <Dashboard {...this.state} {...props} hydrateState={()=>this.hydrateState()} />} /> : <Route exact path="/" render={(props) => <Grid {...this.state} {...props} hydrateState={()=>this.hydrateState()} />} />;
    return (
      <div className="container">
      <p>LoggedIn: {""+this.state.isLoggedIn+""}</p>
      <Header />
      <Nav {...this.state} />
      <Route exact path="/login" render={(props) => <Login {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/login/:redirect" render={(props) => <Login {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/logout" render={(props) => <Logout {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/register" render={(props) => <Register {...props} hydrateState={()=>this.hydrateState()} />} />
      { gridOrDashboard }
      <Route exact path="/videos" render={(props) => <VideoGrid {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/quotes" render={(props) => <Quotes {...props} hydrateState={()=>this.hydrateState()} />} />
      
      </div>
    )
  }
}

export default App;
