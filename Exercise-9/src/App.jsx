import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/Contact";
import Product from "./Pages/Product";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product/:id" element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
