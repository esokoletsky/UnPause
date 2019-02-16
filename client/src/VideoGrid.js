import React, { Component } from 'react'
import Client from './Client';

export class VideoGrid extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos: []
    }
  }

  componentDidMount(){
    Client.getVideos((res)=>{
      // console.log(res);
      this.setState({videos:res.items});
    });
  }

  render() {
    let videos = this.state.videos.map((video,index)=>{
      return (<div key={`video-${index}`}>
          <iframe title={video.snippet.title} width="460" height="200" src={`//www.youtube.com/embed/${video.id.videoId}?rel=0`} frameBorder="0" allowFullScreen></iframe>
        </div>);
    })
    return (
      <div className="videoGrid">
        <div className="col">{videos}</div> 
      </div>
    )
  }
}

export default VideoGrid
