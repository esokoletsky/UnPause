import React, { Component } from 'react';
import Client from './Client';


export class Quotes extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: []
    }
  }
  
  componentDidMount(){
    Client.getQuotes((res)=>{
        // console.log(res);
      this.setState({quotes:[res]});
    });
  }

  render() {
    let quotes = this.state.quotes.map((quote,index)=>{
      return (
      <div key={`media-${index}`}>
          <img src={quote.media} alt={quote.title} />
        </div>
        );
    })
    return (
      <div>
        <div className="img-box">{quotes}</div>
      </div>
    )
  }
}

export default Quotes
