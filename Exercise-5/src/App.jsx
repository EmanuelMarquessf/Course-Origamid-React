import { useState, useEffect } from 'react'
import Product from './components/Product'

function App() {
  const [product, setProduct] = useState('')

  useEffect(() => {
    const localProduct = window.localStorage.getItem('product')
    if(localProduct){setProduct(localProduct)}
  }, [])

  useEffect(() => {
    if (product !== null) window.localStorage.setItem('product', product);
  }, [product]);

  function handleClick({ target }) {
    setProduct(target.innerText);
    console.log(target.innerText)
  }

  return (
    <div>
      <div>
        <h1>Preferencia: {product}</h1>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
      </div>
      <Product product={product}/>
    </div>
  )
}

export default App
