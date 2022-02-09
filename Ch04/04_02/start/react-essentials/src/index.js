import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const checklist = ["Boots", "tent", "headlamp"];
console.log(checklist);
console.log(checklist[1]);

{/* We can use array destructuring: */}
const [mostImportantItem, second] = ["boots", "tent", "headlamp"];
console.log(mostImportantItem, second);

{/* You also do not need to create a variable name for every single item: 
  You can skip over anything with a comma and will act as a placeholder.
*/}
const [,, light] = ["boots", "tent", "headlamp"];
console.log(light);

ReactDOM.render(
  <App authorized={true} />,
  document.getElementById("root")
);
