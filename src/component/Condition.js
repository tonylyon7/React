import React, { Component } from "react";

class Condition extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedin: true
        }
    }

    // render(){  //1. using if else statement
    //     if(this.state.isLoggedin){
    //         return <h2> Welcome Oluchi</h2>
    //     }else{
    //         return <h2>Welcome User</h2>
    //     }
    // }

    render(){   //2. using element variables
        // let message
        // if(this.state.isLoggedin){
        //     message = <h2>Welcome oluchi</h2>
        // }else{
        //     message = <h2>Welcome user</h2>
        // }

        return(   
            // <>
            //     {message}
            // </>

            //3. using ternary operator
            // this.state.isLoggedin ? <h2>Welcome Oluchi</h2>: <h2>Welcome user</h2>


            //4. using short circuit operator
            this.state.isLoggedin && <h2>Welcome oluchi</h2>
        )
    }
} 
export default Condition