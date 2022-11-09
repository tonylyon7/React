import React, { Component } from "react";

class EventBind extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: "Welcome"
        }

        this.changeGreet = this.changeGreet.bind(this)  //do this when using the third method
    }
    
    changeGreet(){
        this.setState({
            message: "Goodbye"
        })
    }

    //Ways of binding an event in react
    //1.
    // render(){
    //     return(
    //         <>
    //             <div>
    //                 <h2>{this.state.message}</h2>
    //                 <button onClick={() => this.changeGreet ()}>Change Greeting</button>
    //             </div>
    //         </>
    //     )
    // }

    //2.
    // render(){
    //     return(
    //         <>
    //             <div>
    //                 <h2>{this.state.message}</h2>
    //                 <button onClick={this.changeGreet.bind(this)}>Change Greeting</button>
    //             </div>
    //         </>
    //     )
    // }

    //3.
    render(){
        return(
            <>
                <div>
                    <h2>{this.state.message}</h2>
                    <button onClick={this.changeGreet}>Change Greeting</button>
                </div>
            </>
        )
    }
}
export default EventBind