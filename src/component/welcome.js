import React, {Component} from "react";

class Welcome extends Component{
    render(){
        return(
            <h2>We have stated {this.props.name}</h2>
        )
    }
}
//class base
export default Welcome