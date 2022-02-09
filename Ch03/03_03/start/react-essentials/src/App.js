import React from "react";
import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      {/* Option 1 and 3 is to write this map within this Main function */}
      <ul style={{ testAlign: "left"}}>
        {/* This is used in option 1
        {props.dishes?.map((dish, i) => (
          <li key={i}>{dish}</li>
        ))}
        */}
        {/* This is option 3 below*/}
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
    "Macaroni and Cheese",
    "Salmon",
    "Tofu with Vegetables",
    "Minestrone"
]

// Option 2 to do these two lines below. This will display an object in the console log
const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));
console.log(dishObjects);

function App() {
  return (
    <div className="App">
      <Header name="Horacio" />

      {
      /* This is Part of Option 1 this is passing array of strings
      <Main adjective="amazing" dishes={dishes}/>
      */}
      {/* This passes an array of objects below*/}
      <Main adjective="amazin" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
