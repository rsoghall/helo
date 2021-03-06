import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types'
import { withRouter } from 'react-router'


export class Nav extends Component {
  render() {
    console.log(this.props.location.pathname)
    if (this.props.location.pathname === '/') {
      return null
    }
  
    return (
      <div>
        Nav Bar
        <Link to={`/dashboard`}>
          <button>Home</button>
        </Link>
        <Link to={`/new`}>
          <button>New Post</button>
          </Link>
        <Link to={`/`}>
          <button>Logout</button>
          </Link>
      </div>
    )
  }
}

export default withRouter(Nav)
