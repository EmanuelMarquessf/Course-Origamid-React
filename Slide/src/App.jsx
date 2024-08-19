import { useState } from 'react'
import './App.css'
import Slide from './components/slide'

function App() {
  const [count, setCount] = useState(0)
  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1'
    },
    {
      id: 'slide2',
      text: 'Slide 2'
    },
    {
      id: 'slide3',
      text: 'Slide 3'
    },
  ]
  return (
    <div>
      <Slide slides={slides} />
    </div>
  )
}

export default App
