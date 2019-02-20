import React, { Component } from 'react'
import Client from './Client';

export class Meditation extends Component {
    constructor(props){
        super(props);
        this.state = {
          videos: []
        }
      }
    
      componentDidMount(){
        Client.getMeditation((res)=>{
          // console.log(res);
          this.setState({videos:res.items});
        });
      }
    
      render() {
        let videos = this.state.videos.map((video,index)=>{
          return (<div className="video-container" key={`video-${index}`}>
              <iframe title={video.snippet.title} width="853" height="480" src={`//www.youtube.com/embed/${video.id.videoId}?rel=0`} frameBorder="0" allowFullScreen></iframe>
            </div>);
        })
        return (
          <div>
            {videos}
          </div>
        )
      }
    }

export default Meditation
