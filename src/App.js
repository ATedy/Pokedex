import React from "react";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
// import ReactDOM from "react-dom";

function App() {
  const logWhenClicked = () => console.log("Button was clicked!");
  return (
    <div className="container">
      <Logo appName="My Pokedex" btnClicked={logWhenClicked} />
      <BestPokemon
        favourite="Squirtle"
        abilities={["Anticipation", "Adaptability", "Run-Away"]}
      />
      <CaughtPokemon todayDate={new Date()} count={4} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
