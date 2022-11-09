import React from "react";

const ChildComponent = (props) => {
    return(
        <button onClick={() => props.greetHandler("child")}>Click Me</button>
    )
}

export default ChildComponent