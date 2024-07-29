import { useState } from 'react'
import Product from './components/Product';

function App() {
  const [data, setData] = useState(null)
  const [loadingData, setLoadingData] = useState(null)

  
  async function fetchData(){
    setLoadingData(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${(event.target.innerText).toLowerCase()}`,
    );
    const json = await response.json();
    setData(json)
    setLoadingData(false);

  }

  return (
    <div>
      <button onClick={fetchData}>TABLET</button>
      <button onClick={fetchData}>SMARTPHONE</button>
      <button onClick={fetchData}>NOTEBOOK</button>

      <div>
        {loadingData && <p>Loading...</p>}
        {!loadingData && data && <Product data={data}/>}
      </div>
    </div>
  )
}

export default App
