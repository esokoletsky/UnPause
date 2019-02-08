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
      this.setState({videos:res.items});
    });
  }

  render() {
    let videos = this.state.videos.map(video=>{
      return (<div class="video-container col s12 m6">
          <iframe width="853" height="480" src={`//www.youtube.com/embed/${video.id.videoId}?rel=0`} frameborder="0" allowfullscreen></iframe>
        </div>);
    })
    return (
      <div class="mot-video-container">
        {videos}
      </div>
    )
  }
}

export default VideoGrid
