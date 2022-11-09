import React, { Component } from 'react'
import withCounter from './withCounter'


export class HoverCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }
    // increment = () => {
    //     this.setState(prevState => {
    //         return {count: prevState.count + 1}
    //     })
    // }
  render() {
        // const {count} = this.state
    return (
      <div>
          <h2 onMouseOver={this.props.increment}>Hovered {this.props.count} times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter)



