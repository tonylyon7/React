import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComponent'
import MemoComponent from './MemoComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        state: "Tony"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Tony"
            })
        }, 2000)
    }
  render() {
      console.log("ParentComponent")
    return (
      <div>
        {/* <RegularComponent/>
        <PureComp/> */}
        <MemoComponent/>
      </div>
    )
  }
}

export default ParentComponent
