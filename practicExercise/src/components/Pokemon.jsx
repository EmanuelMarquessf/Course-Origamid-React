import {useState, useEffect, memo} from 'react'
import { X } from 'lucide-react'
import Load from './Load'


function Pokemon({pokemon, onButtonClick}) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[pokemon]);


  return (
    <>{pokemon && (
      <div className='flex flex-col items-end border w-[353px] h-auto py-1 px-2 bg-r3 border-r5 rounded-sm'>
        <button onClick={onButtonClick} > <X  color="black" size={20}></X> </button>
        <div className='flex flex-col gap-1 w-full items-center '>
          <div className='flex flex-row w-full gap-1'>
            <span className='flex-1 px-2 py-1 bg-slate-100 font-vt rounded-sm border border-r5 capitalize text-2xl'>{pokemon.name}</span>
            <span className='px-2 py-1 bg-slate-100  font-vt rounded-sm border border-r5 text-2xl'>#{pokemon.id}</span>
          </div>
          {!loading ? (
            <img src={pokemon.sprites.other["official-artwork"].front_default} className='flex justify-end bg-slate-100  w-full rounded-sm border border-r5'></img>
          ) : (
            <Load loading={loading} setLoading={setLoading}/>
          )}
          <div className='flex flex-row gap-1 p-1 w-full justify-center bg-slate-100'>
            {pokemon.types.map((type, index) => <img key={index} className='w-16' src={`./pokemonTypes/${type.type.name}.svg`} alt="" />)}
          </div>
        </div>
      </div>
    )}</>
  )
}

export default memo(Pokemon)