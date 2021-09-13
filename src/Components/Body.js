import React from "react";

function Body(props) {
    return (
        <div style={{ textAlign: "center", margin: "10px" }}>
            <h1>Your Name: {props.name}</h1>
            <h1>Gender: {props.gender}</h1>
            <h3>
                (Probability of being {props.gender} is {props.probability}!)
            </h3>
        </div>
    );
}

export default Body;
