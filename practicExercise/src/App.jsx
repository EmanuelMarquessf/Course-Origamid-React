import { useState } from 'react';
import Pokemons from './pages/Pokemons';

function App() {
  const [input, setInput] = useState('');
  const [pokemonName, setPokemonName] = useState(null);

  function handleClick() {
    setPokemonName(input);
    setInput('');
  }

  return (
    <>
      <div className='flex flex-col gap-4 w-[600px] h-[150px] m-4 p-4 bg-gray-300 rounded-sm shadow-sm items-center justify-center'>
        <h1 className='text-3xl font-pixelify font-medium'>Pokemon team creator</h1>
        <div className='flex gap-2'>
          <input
            className='px-6 py-4'
            placeholder='Pokemon name'
            type="text"
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
          <button
            className='uppercase font-roboto font-bold bg-red-600 px-6 py-4'
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>

      <Pokemons pokemonName={pokemonName} />
    </>
  );
}

export default App;