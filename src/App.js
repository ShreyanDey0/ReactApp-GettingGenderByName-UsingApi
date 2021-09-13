import axios from "axios";
import React from "react";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import "./Styles/style.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null,
        };
        this.getName = this.getName.bind(this);
    }

    getName(e) {
        e.preventDefault();
        const name = e.target.elements.name.value;
        if (name) {
            axios.get(`https://api.genderize.io/?name=${name}`).then((res) => {
                const result = res.data;
                this.setState({
                    data: result,
                });
            });
        } else return;
    }

    render() {
        return (
            <div>
                <Navbar getName={this.getName} />
                {this.state.data != null ? (
                    <Body
                        name={this.state.data.name}
                        gender={this.state.data.gender}
                        probability={this.state.data.probability}
                    />
                ) : (
                    <h1 style={{ textAlign: "center", margin: "10px" }}>
                        Enter your Name
                    </h1>
                )}
            </div>
        );
    }
}

export default App;
