import {useEffect, useState} from 'react'

function Filter({filterGemini, setFilterGemini}) {

  const [typeFilter, setTypeFilter] = useState('all')
  const [generationFilter, setGenerationFilter] = useState('All')
  const [obsFilter, setObsFilter] = useState('')


  function handleSubmit(event) {
    event.preventDefault();    
    setFilterGemini({type: typeFilter, generation: generationFilter, obs: obsFilter})
    console.log(filterGemini)
  }

  return (
    <form className='flex flex-row gap-5 p-10 mx-48 justify-center bg-slate-200' onSubmit={handleSubmit}>
      <div className='flex flex-col flex-1'>
        <label htmlFor="type">Type</label>
        <select
          className='py-2 px-4 w-full'
          value={typeFilter}
          onChange={({target}) => setTypeFilter(target.value)}
          name="typeFilter">
          <option value="all">All</option>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
        </select>
      </div>

      <div className='flex flex-col flex-1'>
        <label htmlFor="type">Generation</label>
        <select
          className='py-2 px-4'
          value={generationFilter}
          onChange={({target}) => setGenerationFilter(target.value)}
          name="pokemon-regions" id="pokemon-regions">
          <option value="all">All</option>
          <option value="kanto">Kanto</option>
          <option value="johto">Johto</option>
          <option value="hoenn">Hoenn</option>
          <option value="sinnoh">Sinnoh</option>
          <option value="unova">Unova</option>
          <option value="kalos">Kalos</option>
          <option value="alola">Alola</option>
          <option value="galar">Galar</option>
          <option value="paldea">Paldea</option>
          <option value="hisui">Hisui</option>
        </select>
      </div>

      <div className='flex flex-col flex-1'>
        <label htmlFor="obs">Observation</label>
        <input className='py-2 px-4' type="text" name="" id="obs" value={obsFilter} onChange={({target})=> setObsFilter(target.value)}/>
      </div>
      <button className='py-2 px-4 bg-r4'>Gerar</button>
    </form>
  )
}

export default Filter