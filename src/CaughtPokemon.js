import React, {useState} from "react";

const CaughtPokemon = (props) => {
  // const todayDate = new Date().toLocaleDateString();
  const [pokemonCount, setPokemon] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  function pokemonCatch() {
    if (pokemonNameInput !== "") {
      setPokemon(pokemonCount.concat(pokemonNameInput));
      console.log(pokemonNameInput);
      setPokemonNameInput("");
    }
  }

  return (
    <div>
      <p>
        Caught {pokemonCount.length} Pokemon on{" "}
        {props.todayDate.toLocaleDateString()}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />

      <button onClick={pokemonCatch}>catchCount</button>
      <ul>
        {pokemonCount.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemon;

// const pokemons = [
//   "Bulbasaur",
//   "Ivysaur",
//   "Venusaur",
//   "Charmander",
//   "Charmeleon",
//   "Charizard",
//   "Squirtle",
//   "Wartortle",
//   "Blastoise",
//   "Caterpie",
//   "Metapod",
//   "Butterfree",
// ];
