import { baseUrlPokeApi } from '../config/config'

export async function FetchData(){
  const response = await fetch(`${baseUrlPokeApi}pokemon?limit=100000&offset=0`);
  const data = await response.json();
  
  const filteredData = FilterData(data.results);

  return filteredData; 
}

function FilterData(data) {
  return data.map((pokemon) => ({
    id: pokemon.url.match(/\/(\d+)\/$/)[1],
    name: pokemon.name,
  }));
}

export async function fetchSelectedPokemon(pokemonID){
  const data = fetch(
    `${baseUrlPokeApi}pokemon/${pokemonID}`
  ).then(response => response.json())

  return data
}