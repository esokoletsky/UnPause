import React, { Component } from 'react';
import Client from './Client';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit(e){
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    Client.login(user,(res)=>{
      console.log(res);
      if(res.hasOwnProperty('message')){
        alert(res.message);
      } else {
        // console.log(res);
        localStorage.setItem('userID',res._id);
        localStorage.setItem('userEmail',res.local.email);
        this.props.hydrateState();
        if(this.props.match.params.hasOwnProperty('redirect')){
          this.props.history.push(`/${this.props.match.params.redirect}`);
        } else {
          this.props.history.push('/dashboard');
        }
      }
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
      <div className="credential-container">
          <form className="credentials" onSubmit={(e)=>this.onSubmit(e)}>
          <h4>Login</h4>
            <p>
              <label htmlFor="email">Email:</label>
              <p><input type="email" id="email" placeholder="email" value="demo@gmail.com" onChange={(e)=>this.onChange(e)} value={this.state.email}/></p>
            </p>
            <p>
              <label htmlFor="password">Password:</label>
              <p><input type="password" id="password" placeholder="password" value="demo" onChange={(e)=>this.onChange(e)} value={this.state.password}/></p>
            </p>
            <p><button type="submit">Submit</button></p>
          </form>
      </div>
    );
  }
}

export default Login;
