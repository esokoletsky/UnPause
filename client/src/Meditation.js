import React, { Component } from 'react'
import Client from './Client';
import {Link} from 'react-router-dom';

export class Meditation extends Component {
    constructor(props){
        super(props);
        this.state = {
          video: ""
        }
      }
    
      handleClick() {
        Client.getVideos((res)=>{
          // console.log(res);
          this.setState({video:res.video});
        });
      }
      
      componentDidMount(){
        Client.getMeditation((res)=>{
          // console.log(res);
          this.setState({video:res.video});
        });
      }
    
      render() {
        return (
          <div>
            <h2>Meditation Video</h2>
            <div className="video-container">
              <iframe width="853" height="480" src={`//www.youtube.com/embed/${this.state.video}?rel=0`} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div style={{textAlign: "center"}}><button onClick={()=>this.handleClick()}>Next</button></div>
          </div>
        )
      }
    }

export default Meditation
