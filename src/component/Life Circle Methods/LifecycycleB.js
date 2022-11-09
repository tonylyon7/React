import React, { Component } from "react";

class LifeCycleB extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Tony"
        }

        console.log("LifeCycleB Constructor")
    }
    static getDerivedStateFromProps(props, state){
        console.log("lifecycleB getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleB componentDidMount")
    }
    render(){
        console.log("LifecycleB render")
        return(
            <>
            </>
        )
    }
}


export default LifeCycleB