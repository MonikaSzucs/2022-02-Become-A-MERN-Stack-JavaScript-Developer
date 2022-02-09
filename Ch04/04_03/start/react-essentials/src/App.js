import React, { useState } from "react";
import "./App.css";

function App() {
  {/* the first item in the usestate array is the state variable. Whatever we call the function setEmoation is going to update the state.
    Then inside the useState(SOMETHING) we will pass over a state
  */}
  const [emotion, setEmotion] = useState();
  console.log(emotion);
  return (
    <>
      <h1>Current emotion is {emotion}.</h1>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("Enthusiatic")}>Enthusiastic</button>
    </>
  );
}

export default App;
