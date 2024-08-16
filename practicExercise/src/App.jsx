import { useState, useEffect } from "react";
import Pokemons from "./pages/Pokemons";
import Filter from "./components/Filter"
import { jsonModel, textModel } from './config/gemini'
import { FetchData } from "./services/pokeapi.service";


function App() {
  const [input, setInput] = useState("");
  const [pokemonId, setPokemonId] = useState(null);
  const [pokemonArray, setPokemonArray] = useState([]);
  const [filterArray, setFilterArray] = useState([]);
  // const [cambiosData, cambiosConfigData] = Promise.all([fetchData()]);


  const [filterGemini, setFilterGemini] = useState({type: 'all', generation: 'all', obs: ''})

  const [loading, setLoading] = useState(false)

  const [randomTeam, setRandomTeam] = useState([])

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await FetchData();
        setPokemonArray(data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    console.log(pokemonArray)
  }, [pokemonArray]);

  useEffect(() => {
    if (input.length > 2) {
      setFilterArray(
        pokemonArray.filter((pokemon) => pokemon.name.includes(input))
      );
    } else if (input.length == 0) {
      setFilterArray([]);
    }
  }, [input]);

  async function fetchDataFromGemini(){
    try {
      setLoading(true);
      const prompt = 
        `Array with a ballanced pokemon team(without repeat type) with this caracteristcs:
          - 6 pokemons(without repeat pokemons or evolutions);
          ${filterGemini.generation != 'all' ? `Only ${filterGemini.generation} pokemons` : `All pokemon generations` };
          ${filterGemini.type != 'all' ? `${filterGemini.type} monotype team, primary or secondary with this type` : ``}
          ${filterGemini.obs != '' ? `With only ${filterGemini.obs} pokemons` + ' pokemons' : ''}
          - Mix popular and unpopular pokemons
          - Return the response on array on pokeapi format. 
          Use the format [{\"name\":\"pokemonName\", \"id\":pokemonID}].
        `;
      const result = await jsonModel.generateContent(prompt);
      const json = result.response.text();
      setRandomTeam(JSON.parse(json))
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('fetchDataFromGemini error: ', error)
    }
  }

  useEffect(() =>{
    console.log(filterGemini)
  }, [filterGemini])



  return (
    <div className="mx-32 my-10">
      <button disabled={loading} className="bg-r4 p-4" onClick={() => fetchDataFromGemini()}>{loading ? 'Loading...' : 'Gerar'}</button>
      <Filter filterGemini={filterGemini} setFilterGemini={setFilterGemini}></Filter>
      
      <div className="flex flex-col gap-4  h-auto bg-gray-300 rounded-sm shadow-sm items-center justify-center">
        <h1 className="text-3xl font-pixelify font-medium">
          Pokemon team creator
        </h1>
        <div className="flex flex-col gap-2 h-auto">
          <div className="flex flex-row gap-2">
            <input
              className="px-6 py-4"
              placeholder="Pokemon name"
              type="text"
              value={input}
              onChange={({ target }) => setInput(target.value)}
            />
            <button
              className="bg-r3"
              onClick={() => setPokemonId(Math.floor(Math.random() * 1000))}
            >
              Surprienda-me
            </button>
          </div>
          {filterArray && (
            <div className="flex flex-row flex-wrap w-full">
              {filterArray
                .filter((item) => item.id < 2000)
                .slice(0, 4)
                .map((pokemon) => (
                  <div
                    className="flex flex-row justify-left items-center bg-gray-100 w-[240px]"
                    key={pokemon.name}
                    onClick={() => {
                      setPokemonId(pokemon.id);
                      setFilterArray("");
                      setInput("");
                    }}
                  >
                    <img
                      className="w-20 h-20"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                      alt=""
                    />
                    <p className="text-lg capitalize">{pokemon.name}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <Pokemons pokemonId={pokemonId} randomTeam={randomTeam}/>
    </div>
    
  );
}

export default App;
