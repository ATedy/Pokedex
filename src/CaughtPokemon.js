const CaughtPokemon = (props) => {
  // const todayDate = new Date().toLocaleDateString();
  return (
    <div>
      <p>
        Caught {props.count} Pokemon on {props.todayDate.toLocaleDateString()}
      </p>
    </div>
  );
};

export default CaughtPokemon;
