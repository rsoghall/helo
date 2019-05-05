import React, { Component } from 'react'
import axios from 'axios';

export class Auth extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: ""
    }
  }

  login = async (e) => {
    e.preventDefault()
    try {
      const { userName, password } = this.state
      const res = await axios.post("/auth/login", { userName, password })
      this.props.history.push(`/dashboard`)
    } catch (error) {
      alert("Wrong Username or Password")
    }
    }
  render() {
    return (
      <div>
        Auth
        <form>
          <div>
            <input
              onChange={e => this.setState({ userName: e.target.value })}
              value={this.state.userName}
              type="text"
            placeholder="User Name"/>
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
            <button type="submit">Login</button>
          </div>
          <div>
            <button type="register">Register</button>
          </div>

        </form>
      </div>
    )
  }
}

export default Auth
