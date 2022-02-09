import React from "react";
import "./App.css";
import restaurant from './restaurant.jpg';

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
      <p>
        We serve the most {props.adjective} food around.
      </p>
      <img src={restaurant} height={200} alt="Pizza"/>
      <img src="https://github.com/eveporcello.png" height={200} alt="Eve Porcello"/>
      <img src="https://github.com/monikaszucs.png" height={200} alt="Monika Szucs"/>
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map(dish => (
          <li>{dish}</li>
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
  "Tofu with Vegetables"
];

function App() {
  return (
    <div className="App">
      <Header name="Horacio" />
      <Main adjective="amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
