import {useState, useEffect, memo} from 'react'


function Pokemon({pokemon, onButtonClick}) {
  return (
    <>{pokemon && (
      <div className='flex flex-col items-center border w-[189px] bg-r3 p-4 border-r5 rounded-sm'>
        <div className='flex justify-end px-2 w-full h-32 rounded-sm border border-r5 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${pokemon.sprites.front_default})` }}>
          <span onClick={onButtonClick} className='font-bold cursor-pointer'>X</span>
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <div className='flex flex-row w-full'>
            <span className='flex-1 mt-2 px-2 bg-slate-100 font-pixelify rounded-sm border border-r5 capitalize'>{pokemon.name}</span>
            <span className='mt-2 px-2 bg-slate-100  font-pixelify rounded-sm border border-r5'>#{pokemon.id}</span>
          </div>
          <div className='flex flex-row gap-1 w-full justify-center'>
            {pokemon.types.map((type, index) => <img className='w-16' src={`./pokemonTypes/${type.type.name}.svg`} alt="" />)}
          </div>
        </div>
      </div>
    )}</>
  )
}

export default memo(Pokemon)