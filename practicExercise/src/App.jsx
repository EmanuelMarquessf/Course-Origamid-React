import { useState, useEffect } from "react";
import Pokemons from "./pages/Pokemons";
import { GoogleGenerativeAI } from "@google/generative-ai"


function App() {
  const [input, setInput] = useState("");
  const [pokemonId, setPokemonId] = useState(null);
  const [pokemonArray, setPokemonArray] = useState([]);
  const [filterArray, setFilterArray] = useState([]);

  const [loading, setLoading] = useState(false)


  const [randomTeam, setRandomTeam] = useState([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0`)
      .then((response) => response.json())
      .then((json) => {
        const updatePokemonArray = json.results.map((pokemon) => ({
          id: pokemon.url.match(/\/(\d+)\/$/)[1],
          name: pokemon.name,
        }));
        setPokemonArray(updatePokemonArray);
      });
  }, []);

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
    const API_KEY = "AIzaSyABoTAHVeaBSx0AbtGPxJiAN0TwZqOLcEM";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    try {
      setLoading(true);
      const prompt = "Get me a array with a ballanced pokemon team(without repeat type), with 6 pokemons, use all generations of pokemons mix popular and unpopular pokemons, Don't rely on competitive Pokemon to generate this team, return the response on array on pokeapi format. Use the format: [{\"name\":\"pokemonName\", \"id\":pokemonID}].";
      const result = await model.generateContent(prompt);
      // const response = await result.response;
      const text = result.response.text();
      console.log(text)
      const cleanText = text.replace(/```/g, "")
      setRandomTeam(JSON.parse(cleanText))
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('fetchDataFromGemini error: ', error)
    }
  }

  useEffect(() =>{
    console.log(randomTeam)
  }, [randomTeam])

  return (
    <>
      <button disabled={loading} className="bg-r4 p-4" onClick={() => fetchDataFromGemini()}>{loading ? 'Loading...' : 'Gerar'}</button>
      
      <div className="flex flex-col gap-4 w-[1220px] h-auto m-4 p-4 bg-gray-300 rounded-sm shadow-sm items-center justify-center">
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
    </>
  );
}

export default App;
