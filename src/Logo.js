const Logo = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Welcome to {props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt=""
      />
    </div>
  );
};
export default Logo;
