import {useState, useEffect} from 'react'
import Pokemon from '../components/Pokemon'

function Pokemons({ pokemonName }) {
  const [pokemonArray, setPokemonArray] = useState(() => {
    const localTeam = window.localStorage.getItem('localTeam');
    return localTeam ? JSON.parse(localTeam) : [];
  });

  useEffect(() => {
    window.localStorage.setItem('localTeam', JSON.stringify(pokemonArray));
  }, [pokemonArray]);

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
    <div className='flex flex-row gap-4 flex-wrap m-4 bg-gray-300 w-[600px]'>
      {pokemonArray.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon}/>
      ))}
    </div>
  )
}

export default Pokemons