import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [produto, setProduto] = useLocalStorage('produto', '')
  
  function handleClick({target}) {
    setProduto(target.innerText)
  }
  
  return (
    <div>
      <span>produto : {produto}</span>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  )
}

export default App
