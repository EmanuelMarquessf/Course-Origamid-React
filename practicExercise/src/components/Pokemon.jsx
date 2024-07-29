import {useState, useEffect, memo} from 'react'

function Pokemon({pokemon}) {
  return (
    <div style={{display : 'flex', flexDirection: 'column', alignItems: 'center', border: '1px black solid'}}>
      <img src={pokemon.sprites.front_default} alt="" />
      <span>{pokemon.name}</span>
    </div>
  )
}

export default memo(Pokemon)