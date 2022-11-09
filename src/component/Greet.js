import React from "react";

// const Greet = () => {
//     return(
//         <h2>Welcome to ReactJS</h2>
//     )
// }

const Greet = (props) => {
    return(
        <h2>Welcome to {props.name}</h2>
    )
}
//functional
export default Greet 