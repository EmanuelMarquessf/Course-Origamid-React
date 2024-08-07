import {useState, useEffect, memo} from 'react'

function Pokemon({pokemon, onButtonClick}) {
  return (
    <>{pokemon && (
      <div onClick={onButtonClick} className='flex flex-col items-center border w-[189px] bg-r3 p-4 border-r5 rounded-sm'>
        <img className='w-full bg-slate-100 rounded-sm border border-r5' src={pokemon.sprites.front_default} alt="" />
        <div className='flex flex-row w-full'>
          <span className='flex-1 mt-2 px-2 bg-slate-100 font-pixelify rounded-sm border border-r5'>{pokemon.name}</span>
          <span className='mt-2 px-2 bg-slate-100  font-pixelify rounded-sm border border-r5'>#{pokemon.id}</span>
        </div>
      </div>
    )}</>
  )
}

export default memo(Pokemon)