import React from "react";
import "../Styles/navbar.css";
import { useState } from "react";

function Navbar(props) {
    const [arrow, arrowf] = useState("↓");
    const [hoverl, dropdown] = useState({ display: "none" });

    function catagories() {
        if (hoverl.display === "block") {
            dropdown({ display: "none" });
            arrowf("↓");
        } else {
            dropdown({ display: "block" });
            arrowf("↑");
        }
    }

    return (
        <div className="navbar">
            <div>
                <h1>I Know Your Gender!</h1>
                <h3>Hehehehe</h3>
            </div>
            <div className="nav-right">
                <form
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginRight: "15px",
                    }}
                    onSubmit={props.getName}
                >
                    <input
                        type="text"
                        placeholder="type a name..."
                        name="name"
                    />
                    <button className="submit" style={{ marginLeft: "5px" }}>
                        Submit
                    </button>
                </form>
                <div className="catagRight">
                    <button onClick={catagories} className="catagories">
                        Catagories
                    </button>
                    <span onClick={catagories} className="down">
                        {arrow}
                    </span>
                    <ul style={hoverl} className="hoverlist">
                        <li>Comedy</li>
                        <li>Thriller</li>
                        <li>Action</li>
                        <li>Horror</li>
                        <li>Fantasy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
