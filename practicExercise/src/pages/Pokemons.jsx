import {useState, useEffect} from 'react'
import Pokemon from '../components/Pokemon'
import useLocalStorage from '../hooks/useLocalStorage'


function Pokemons({ pokemonName }) {
  const [pokemonArray, setPokemonArray] = useLocalStorage('pokemonTeam', [])

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
    <div className='flex flex-row gap-4 flex-wrap m-4 bg-gray-300 w-[1220px]'>
      {pokemonArray.map((loadPokemon) => (
        <Pokemon onButtonClick={() => setPokemonArray(pokemonArray.filter((pokemon) => pokemon.name !== loadPokemon.name))} key={loadPokemon.id} pokemon={loadPokemon} />
      ))}
    </div>
  )
}

export default Pokemons