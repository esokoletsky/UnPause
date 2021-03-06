import React, { Component } from 'react'
import Client from './Client';
import { Link } from 'react-router-dom';

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

      removeGoal(id){
        //console.log(`Deleting ${id}`);
        Client.deleteGoal(id,(res)=>{
          Client.getGoal((res)=>{
            this.setState({goals:res});
          });
        });
      }
    
      render() {
        let goals = this.state.goals.map((goal,index)=>{
          return (
          <div key={`goal-${index}`} className="goal-set">
            <li><span>Quick:</span><p>{goal.minutes}</p></li>  
            <li><span>Moderate:</span><p>{goal.hours}</p></li>
            <li><span>Daily:</span><p>{goal.day}</p></li>
            <li><span>Overall:</span><p>{goal.overall}</p></li>
            <button onClick={()=>this.removeGoal(goal._id)}>Delete</button>
            <br></br>
            <br></br>
          </div>);
        })
        return (
          <div>
            <h2 className="titles">My Goals</h2>
            <div> <Link  to="/goals" >Create a new goal</Link>  </div>
            {goals}
          </div>
        )
      }
    }

export default CurrentGoals
