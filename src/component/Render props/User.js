import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
      <div>
          <h2>Hello {this.props.render(true)}</h2>
      </div>
    )
  }
}

export default User