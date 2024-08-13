import React from 'react'

function SearchPokemon({filterArray, pokemonId, setPokemonId, input, setInput, children}) {
  return (
    <div className='flex flex-col gap-2 h-auto'>
      <div className='flex flex-row gap-2'>
        <input className='px-6 py-4' placeholder='Pokemon name' type="text" value={input} onChange={({ target }) => setInput(target.value)}/>
        <button className='bg-r3' onClick={() => setPokemonId(Math.floor(Math.random() * 1000))}>Surprienda-me</button>
      </div>
      {filterArray && (
        <div className='flex flex-row flex-wrap w-full'>
          {children}
        </div>
      )}

    </div>
  )
}

export default SearchPokemon