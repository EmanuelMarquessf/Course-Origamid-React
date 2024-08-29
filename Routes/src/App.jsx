import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx'
import Product from './pages/Product.jsx';
import NotFound from './pages/NotFound.jsx';

import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const teste = 10;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home teste={teste}/>}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='produto/:id' element={<Product />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
