import React, { Component } from 'react';
import Register from './Register';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Login from './Login';
import Logout from './Logout';
import Header from './Header';
import Footer from './Footer';
import VideoGrid from './VideoGrid';
import Quotes from './Quotes';
import Goals from './Goals';
import CurrentGoals from './CurrentGoals';
import Grid from './Grid';
import Meditation from './Meditation'
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
    let gridOrDashboard = (this.state.isLoggedIn) ? <Route exact path="/dashboard" render={(props) => 
    <Dashboard {...this.state} {...props} hydrateState={()=>this.hydrateState()} />} /> 
    : <Route exact path="/" render={(props) => <Grid {...this.state} {...props} hydrateState={()=>this.hydrateState()} />} />;

    return (
    <div>
    <Header {...this.state} />
      <div className="container">
      
      <Route exact path="/login" render={(props) => <Login {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/login/:redirect" render={(props) => <Login {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/logout" render={(props) => <Logout {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/register" render={(props) => <Register {...props} hydrateState={()=>this.hydrateState()} />} />
      { gridOrDashboard }
      <Route exact path="/videos" render={(props) => <VideoGrid {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/quotes" render={(props) => <Quotes {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/goals" render={(props) => <Goals {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/user-goals" render={(props) => <CurrentGoals {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/meditation" render={(props) => <Meditation {...props} hydrateState={()=>this.hydrateState()} />} />
      <Route exact path="/grid" render={(props) => <Grid {...props} hydrateState={()=>this.hydrateState()} />} />
      </div>
      <Footer />
    </div>
    )
  }
}

export default App;
