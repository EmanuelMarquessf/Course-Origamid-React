import { useState } from 'react'
import Product from './components/product'
import Header from './components/header'
import Home from './components/home'

const { pathname } = window.location;

let Component;
  if (pathname === '/produtos') {
    Component = Product;
  } else {
    Component = Home;
  }

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

function App() {

  return (
    <div>
      <Header />
      <Component />
    </div>
  )
}

export default App
