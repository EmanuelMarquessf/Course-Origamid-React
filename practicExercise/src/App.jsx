import { useState, useEffect, useRef } from 'react'
import Pokemons from './pages/Pokemons'
import Pokemon from './components/Pokemon'


function App() {
  const [input, setInput] = useState('');
  const [pokemonName, setPokemonName] = useState(null);

  function handleClick(){
    setPokemonName(input);
    setInput('')
  }

  return (
    <div className=''>
      <p className='font-silkscreen'>Pokemon team creator</p>
      <div>
        <input type="text" value={input} onChange={({target}) => setInput(target.value)}/>
        <button className='uppercase font-roboto bg-red-600' onClick={handleClick}>Search</button>
      </div>
      {pokemonName && (
        <Pokemons pokemonName={pokemonName}/>
      )}
      
    </div>
  )
}

export default App
