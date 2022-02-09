import React from "react";
import "./App.css";

function SecreteComponent(){
  return <h1>Super secret information for authorized users only</h1>
}

function RegularComponent(){
  return <h1>Everyone can see this component</h1>
}

{/* Option 1 for conditional statement
function App(props) {
  if (props.authorized){
    return <SecreteComponent/>
  } else {
    return <RegularComponent/>
  }
}
*/}

{/* Option 2 below for conditional statement we use a inline turnary if statement */}
function App(props) {
  return (
    <>
      {props.authorized ? <SecreteComponent/> : <RegularComponent/>}
    </>
  )
}

export default App;
