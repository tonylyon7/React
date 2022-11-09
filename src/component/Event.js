import React from "react";

const Click = () => {
    const handleClick = () => {
        console.log("This button has been clicked")
    }
    return(
        <>
            <button onClick={() => handleClick()}>Click Me</button>
        </>
    )
}

export default Click