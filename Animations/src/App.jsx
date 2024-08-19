import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  const [ativar, setAtivar] = useState(false) 
  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>

      {ativar && 
        <Card />
      }
    </div>
  )
}

export default App
