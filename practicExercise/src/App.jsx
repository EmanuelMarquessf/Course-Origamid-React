import { useState, useEffect } from 'react';
import Pokemons from './pages/Pokemons';

function App() {
  const [input, setInput] = useState('');
  const [pokemonName, setPokemonName] = useState(null);
  const [pokemonArray, setPokemonArray] = useState([])
  const [filterArray, setFilterArray] = useState([])


  function handleClick() {
    console.log(event.target.value)
    setPokemonName(event.target.value);
    setInput('');
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0`)
    .then((response) => response.json())
    .then((json) => setPokemonArray(json.results))
  }, [])

  useEffect(() => {
    if (input.length > 2) {
      const filtered = pokemonArray.filter((pokemon) => pokemon.name.includes(input));
      if(filterArray){
        const fetchDetailsPromises = filtered.map((pokemon) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then((response) => response.json())
            .then((json) => ({
              ...pokemon,
              sprite: json.sprites.front_default,
            }))
  
        );
        Promise.all(fetchDetailsPromises).then((pokemonWithDetails) => {
          const finalFiltered = pokemonWithDetails.filter(
            (pokemon) => pokemon.sprite !== null && pokemon.sprite !== ''
          );
          setFilterArray(finalFiltered);
        });
      }
    } else {
      setFilterArray([]);
    }
  }, [input])

  return (
    <>
      <div className='flex flex-col gap-4 w-[600px] h-auto m-4 p-4 bg-gray-300 rounded-sm shadow-sm items-center justify-center'>
        <h1 className='text-3xl font-pixelify font-medium'>Pokemon team creator</h1>
        <div className='flex flex-col gap-2 h-auto'>
          <div className='flex flex-row gap-2'>
            <input
              className='px-6 py-4'
              placeholder='Pokemon name'
              type="text"
              value={input}
              onChange={({ target }) => setInput(target.value)}
            />
          </div>
          {filterArray && (
            <div>
              {filterArray.map((pokemon) => (
                <div className='flex flex-row w-full justify-center items-center bg-gray-100' key={pokemon.name} onClick={() => setPokemonName(pokemon.name)}>
                  <img className='w-24' src={pokemon.sprite} alt="" />
                  <p className='flex-1 text-lg'>{pokemon.name}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      <Pokemons pokemonName={pokemonName} />
    </>
  );
}

export default App;