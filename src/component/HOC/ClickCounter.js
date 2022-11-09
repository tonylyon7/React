import React, { Component } from 'react'
import withCounter from './withCounter'

export class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }

    // Increment = () => {
    //     this.setState((prevState) => {
    //         return {count: prevState.count + 1}
    //     })
    // }

  render() {
    // const {count} = this.state
    return (
      <div>
          <button onClick={this.props.increment}>Clicked {this.props.count} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter)