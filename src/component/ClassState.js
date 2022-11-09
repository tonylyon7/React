//import { Component } from "react";
import React, {Component} from "react";

class ClassState extends Component{
    constructor(props){
        super(props)
        this.state = {
            Message: "we are getting good in React"
        }
    }

    changeMessage(){
        this.setState({
            Message: "React is getting interesting"
        })
    }

    render(){
        return(
            <>
                <h2>{this.state.Message}</h2>
                <button onClick={() => this.changeMessage()}>Change State</button>
            </>
        )
    }
}

export default ClassState