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
      this.setState({quotes:res.items});
    });
  }

  render() {
    let quotes = this.state.quotes.map(quote=>{
      return (
      <div>
          <div src={`https://healthruwords.p.mashape.com/v1/quotes/${quote.media}`}> </div>
        </div>
        );
    })
    return (
      <div>
        {quotes}
      </div>
    )
  }
}

export default Quotes
