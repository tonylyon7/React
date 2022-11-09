import React, { Component } from 'react'

export class HoverCounter2 extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
          <button onMouseOver={incrementCount}> Hover {count} times</button>
      </div>
    )
  }
}

export default HoverCounter2