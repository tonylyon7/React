import React, { Component, createRef } from 'react'
import ComponentInput from './ComponentInput'

export class FocusInput extends Component {
    constructor(props) {
      super(props)
        this.ComponentREf = React.createRef()
    }

    clickHandler = () => {
        this.ComponentREf.current.FocusInput()
    }
  render() {
    return (
      <div>
          <ComponentInput ref={this.ComponentREf}/>
          <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default FocusInput