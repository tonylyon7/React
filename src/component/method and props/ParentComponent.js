import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Parent",
        }
    }

    greetParent = (child) => {
        alert(`Hello ${this.state.name} from ${child}`)
    }

    render(){
       return(
            <ChildComponent greetHandler={this.greetParent}/>
       )
    }
}

export default ParentComponent