import React, { Component } from "react";
import axios from "axios";

export class Auth extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  async login (){
    try {
      const { email, password } = this.state;
      const res = await axios.post('/auth/login', { email, password });
      console.log(res)
      if (res.data.loggedIn) this.props.history.push(`/dashboard`);
    } catch (error) {
      alert("Wrong Username or Password");
    }
  };
  render() {
    return (
      <div>
        Auth
          <div>
            <input
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password}
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
          <button onClick={()=> this.login()}type="submit">Login</button>
          </div>
          <div>
            <button type="register">Register</button>
          </div>
      </div>
    );
  }
}

export default Auth;
