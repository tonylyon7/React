import React from "react";
import "../../styles/style.css"
import classes from "../../styles/style.module.css"

const Styling = (props) => {
    const show = props.render ? "primary" : null
    return(
        <>
            <h2 className= {`${show} font-lg`}>This is regular Stying</h2>
            <h2 style={{fontSize: "40px", color: "red"}}> This is inline Styling</h2>
            <h2 className={classes.primary}>This is CSS module styling</h2>
        </>
    )
}

export default Styling