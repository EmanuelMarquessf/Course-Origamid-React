import {useState, useEffect} from 'react'
import Pokemon from '../components/Pokemon'
import useLocalStorage from '../hooks/useLocalStorage'


function Pokemons({ pokemonId }) {
  const [pokemonArray, setPokemonArray] = useLocalStorage('pokemonTeam', [])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    if (pokemonId) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((response) => response.json())
        .then((json) => setPokemonArray((prevArray) => {
          const duplicate = prevArray.find(pokemon => pokemon.name === json.name);
          setLoad(false)
          if(!duplicate) return [...prevArray, json]
          return prevArray
        } ));
    }
  }, [pokemonId])

  return (
    <div className='flex flex-row gap-4 flex-wrap m-4 bg-gray-300 w-[1220px]'>
      {pokemonArray.map((loadPokemon) => (
        <Pokemon load={load} key={loadPokemon.id} onButtonClick={() => setPokemonArray(pokemonArray.filter((pokemon) => pokemon.name !== loadPokemon.name))}  pokemon={loadPokemon} />
      ))}
      {pokemonArray.length == 0 && (
        <span>Ainda sem pokemons adicionados</span>
      )}
    </div>
  )
}

export default Pokemons