const BestPokemon = (props) => {
  // const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favorite Pokemon is {props.favourite}</p>
      <ul>
        <li></li>
        {props.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};
export default BestPokemon;
