import React from 'react'

const withCounter = (WrappedComponent) => {
  class withCounter extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1}
        })
    }

    render(){
        return(
            <WrappedComponent
                count={this.state.count}
                increment = {this.increment}
            />
        )
    }
  }
  return withCounter
}



export default withCounter