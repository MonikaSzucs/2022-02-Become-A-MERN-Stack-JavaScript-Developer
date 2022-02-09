import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function AppTwo() {
    return (
        <h1>This is the Second App</h1>
    )
}

ReactDOM.render(
    <>
        {/* The fragement acts as a wrapper but its not actual adding anything to the DOM* <React.Fragment></React.Fragment>*/}
        <App />
        <AppTwo/>
    </>, 
    document.getElementById("root"));
