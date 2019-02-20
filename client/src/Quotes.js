import React, { Component } from 'react';
import Client from './Client';
import { Link } from 'react-router-dom';


export class Quotes extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: []
    }
    this.handleClick = this.handleClick.bind(this);
  }
  

  handleClick() {
    Client.getQuotes((res)=>{
      // console.log(res);
    this.setState({quotes:res});
    });
  }

  componentDidMount(){
    Client.getQuotes((res)=>{
        // console.log(res);
      this.setState({quotes:res});
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
        <h2 className="titles">Motivational Quotes</h2>
        <div className="img-box">{quotes}</div>
        <div style={{textAlign: "center"}}><button onClick={this.handleClick}>Next</button></div>
      </div>
    )
  }
}

export default Quotes


