import React, { Component } from 'react'
import { Link } from 'react-router'

class Custom extends Component{
  render() {
    return (
      <div>
        <p>Custom component</p>
        <Link to="/custom">custom</Link>
      </div>
    ); 
  }
}
export default Custom;
