import React, { Component } from 'react'
import Client from './Client';

export class Goals extends Component {

  constructor(props){
    super(props);
    this.state = {
      quickGoal: '',
      moderateGoal: '',
      dailyGoal: '',
      overallGoal: ''
    }
  }

  onSubmit(e){
    e.preventDefault();
    let goal = {
      user: localStorage.getItem('userID'),
      minutes: this.state.quickGoal,
      hours: this.state.moderateGoal,
      day: this.state.dailyGoal,
      overall: this.state.overallGoal
    };

    Client.createGoal(goal,(res)=>{
      console.log(res);
      this.props.history.push('/user-goals');
    });
    //alert('see eugene, he knows what he is doing')

  }

  onChange(e){
    let value = e.target.value;
    let key = e.target.getAttribute('id');
    this.setState({
      [key]: value
    });
  }


render() {
  return (
    <div className="App">
      <header>
      <h2 className="titles">Setup your goals</h2>
        <form onSubmit={(e)=>this.onSubmit(e)}>
          <p>
            <label htmlFor="quickGoal">Quick Goal (under 30 min)</label>
            <input type="text" id="quickGoal" placeholder="example: change css for a form" onChange={(e)=>this.onChange(e)} value={this.state.email}/>
          </p>
          <p>
            <label htmlFor="moderateGoal">Moderate Goal (several hours)</label>
            <input type="text" id="moderateGoal" placeholder="example: create login page" onChange={(e)=>this.onChange(e)} value={this.state.email}/>
          </p>          
          <p>
            <label htmlFor="dailyGoal">Daily Goal</label>
            <input type="text" id="dailyGoal" placeholder="example: change css for a form" onChange={(e)=>this.onChange(e)} value={this.state.email}/>
          </p>          
          <p>
            <label htmlFor="overallGoal">Overall Goal</label>
            <input type="text" id="overallGoal" placeholder="example: change css for a form" onChange={(e)=>this.onChange(e)} value={this.state.email}/>
          </p>
          <p><input type="submit"/></p>
        </form>
      </header>
      

    </div>
  );
}
}
export default Goals
