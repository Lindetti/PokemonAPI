import { useState,  useEffect } from 'react'
import "./card.scss";

const Card = () => {
    const [pokemon, setPokemon] = useState({
        name: "",
        image: "",
        height: "",
        weight: "",
        hp: "",
        type: "",
        attack: "",
        defense: "",
        specialAttack: "",
        specialDefense: "",
        speed: "",
      });

      const [showDetails, setShowDetails] = useState(false);
      const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/17")
      const [BG, setBackgroundColor] = useState("#e98477")
      const random = Math.floor(Math.random() * 200) + 1;
     console.log(random)

      const BGcolor = {
        backgroundColor: BG,
      }


      useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
         const name = data.name;
         const image = data.sprites.front_default;
         const height = data.height;
         const weight = data.weight;
         const hp = data.stats[0].base_stat;
         const attack = data.stats[1].base_stat;
         const defense = data.stats[2].base_stat;
         const specialAttack = data.stats[3].base_stat;
         const specialDefense = data.stats[4].base_stat;
         const speed = data.stats[5].base_stat;
         const type = data.types[0].type.name;

         setPokemon({
        ...pokemon,
         name: name,
         image: image,
         height: height,
         weight: weight,
         hp: hp,
         attack: attack,
         defense: defense,
         specialAttack: specialAttack,
         specialDefense: specialDefense,
         speed: speed,
         type: type
         });


         if (type === "grass" || type === "bug") {
            setBackgroundColor("#70c8a0");
        } else if (type === "fire") {
            setBackgroundColor("#e98477");
        } else if (type === "water") {
            setBackgroundColor("#74ccf4");
        } else if (type === "electric") {
            setBackgroundColor("#F8EC99");
        } else if (type === "normal" || type === "fairy") {
            setBackgroundColor("#d3d3d3");
        } else if (type === "poison" || type === "psychic" || type === "ghost") {
            setBackgroundColor("#a696cf");
        } else  if (type === "ground" || type === "fighting" || type === "rock") {
            setBackgroundColor("#d3b299");
        } else if (type === "dark") {
          setBackgroundColor("#595959");
        } else {
            setBackgroundColor("");
        }

        })
       }, [url]);

       const randomPokemon = () => {
        setUrl(`https://pokeapi.co/api/v2/pokemon/${random}`)
      }

       const toggleDetails = () => {
        setShowDetails(!showDetails);
      }

      const showButton = !showDetails ? "More Details" : "Close";


    return (
      <div className="card-wrapper">
        <div className="card-div"  style={BGcolor}>
        <div className="card">
        <div className="nameHP">
<h3 className="pokemonName">{pokemon.name}</h3>
<h3 className="hpDiv">{pokemon.hp}<span className="hp">HP</span></h3>
</div>

<div className="pokemonImageDiv">
  <img src={pokemon.image} alt="image" />
</div>
<figcaption className="figcaption"><span className="height">Height: {pokemon.height}</span> 
<span className="weight">Weight: {pokemon.weight}</span></figcaption>
<div className="details">
  <div className="types">
  <p className="type">Type: </p> 
  <p><span className="typeNum">{pokemon.type.charAt(0).toUpperCase() + pokemon.type.slice(1)} </span></p>
  </div>
  <div className="attack">
    <div className="pokeAttack"><p>Attack</p></div>
    <div className="pokeAttackNum">
    <p>{pokemon.attack}</p>
    </div>
  </div>

  <div className="defense">
  <div className="pokeDefense"><p>Defense</p></div>
  <div className="pokeDefenseNum">
    <p>{pokemon.defense}</p>
    </div>
     </div>
     </div>

     <div className="moreButton">
          <button className="morebutton" onClick={toggleDetails}>{showButton}</button>
        </div>

        {showDetails ? 
        <div className="more-details">
          <ul>
            <li>Special-Attack: <span className="specialAttack">{pokemon.specialAttack}</span></li>
            <li>Special-Defense: <span className="specialAttack">{pokemon.specialDefense}</span></li>
            <li>Speed: <span className="speed">{pokemon.speed}</span></li>
          </ul>
        </div>
        : !showDetails}
        </div>
      </div>
              <div className="button"> 
            <button className="newPokemon" onClick={randomPokemon}>Get New Card</button>
          </div>
          </div>
    )
}

export default Card;