import {useState, useEffect} from 'react'
import Pokemon from '../components/Pokemon'

function Pokemons({pokemonName}) {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    if (pokemonName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((json) => setPokemonArray((prevArray) => {
          const duplicate = prevArray.find(pokemon => pokemon.name === json.name);
          if(!duplicate) return [...prevArray, json]
          return prevArray
        } ));
    }
  }, [pokemonName])

  return (
    <div style={{display : 'flex', gap: '2rem', alignItems: 'center', textAlign: 'center'}}>
      {pokemonArray.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon}/>
      ))}
    </div>
  )
}

export default Pokemons