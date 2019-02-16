import React, { Component } from 'react'
import Client from './Client';

export class CurrentGoals extends Component {
    constructor(props){
        super(props);
        this.state = {
          goals: []
        }
      }
    
      componentDidMount(){
        Client.getGoal((res)=>{
          // console.log(res);
          this.setState({goals:res});
        });
      }
    
      render() {
        let goals = this.state.goals.map((goal,index)=>{
          return (
          <div key={`goal-${index}`} className="goal-set">
            <li>Quick: {goal.minutes}</li>  
            <li>Moderate: {goal.hours}</li>
            <li>Daily: {goal.day}</li>
            <li>Overall: {goal.overall}</li>
          </div>);
        })
        return (
          <div>
            {goals}
          </div>
        )
      }
    }

export default CurrentGoals
