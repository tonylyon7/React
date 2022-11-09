import React, { Component } from "react";
import LifeCycleB from "./LifecycycleB";

class LifeCycleA extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Tony"
        }

        console.log("LifeCycleA Constructor")
    }
    static getDerivedStateFromProps(props, state){
        console.log("lifecycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecycleA ComponenetDidUpdate")
        return null
    }

    changeState = () => {
        this.setState({
            name: "Shola"
        })
    }
    render(){
        console.log("LifecycleA render")
        return(
            <>
            {/* <LifeCycleB/> */}
            <button onClick={this.changeState}>Change State</button>
            </>
        )
    }
}


export default LifeCycleA