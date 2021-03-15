import React from "react";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <Logo appName="My Pokedex" />
      <BestPokemon
        favourite="Squirtle"
        abilities={["Anticipation", "Adaptability", "Run-Away"]}
      />
      <CaughtPokemon todayDate={new Date()} count={4} />
    </div>
  );
}

export default App;
