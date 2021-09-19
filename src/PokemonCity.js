import React, {useState} from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  // function updateCity(e) {
  //   setCity(e.target.value);
  //   console.log(e.target.value);
  // }

  return (
    <div>
      <p>Welcome to the city of {city}</p>

      <input
        className="mb-5"
        type="text"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
    </div>
  );
}

export default PokemonCity;
